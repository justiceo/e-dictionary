const fs = require("fs");
const { exec } = require("child_process");
const esbuild = require("esbuild");
const Jimp = require("jimp");
const Jasmine = require("jasmine");
const puppeteer = require('puppeteer');

class Build {
  outputBase = process.env.OUT_BASE || "build";
  browser = process.env.BROWSER || "chrome";
  isProd = process.env.PROD || false;
  outDir = "";

  testSpecs = ["spec/e2e-spec.ts"];
  compiledTestSpecs = ["spec/e2e-spec.js"];
  originalIconPath = "src/assets/icon.png";

  constructor() {
    // Change string value to boolean.
    if (this.isProd && this.isProd.toLowerCase() === "true") {
      this.isProd = true;
    }

    // Ensure browser is lowercase.
    this.browser = this.browser.toLowerCase();

    // Set the output directory
    this.outDir = `${this.outputBase}/${this.browser}-${
      this.isProd ? "prod" : "dev"
    }/`;
  }

  // Clean output directory
  clean(dir) {
    return new Promise((resolve, reject) => {
      fs.rm(dir, { recursive: true }, (err) => {
        if (err) {
          if (err.code == "ENOENT") {
            // Directory already deleted or doesn't exist.
            resolve();
          } else {
            reject(err);
          }
          return;
        }
        resolve();
      });
    });
  }

  // Bundle scripts.
  bundleScripts() {
    return esbuild
      .build({
        entryPoints: [
          "src/background-script/background.ts",
          "src/content-script/content-script.ts",
          "src/popup/popup.ts",
          "src/options-page/options.js",
        ],
        bundle: true,
        minify: this.isProd,
        sourcemap: !this.isProd,
        outdir: this.outDir,
        target: ["chrome58", "firefox57", "safari11", "edge16"],
      })
      .catch((err) => {
        console.error(err);
        process.exit(1);
      });
  }

  // Generate manifest
  // NB: This function would fail if outDir doesn't exist yet.
  generateManifest() {
    return new Promise((resolve, reject) => {
      let rawdata = fs.readFileSync("src/manifest.json");
      let manifest = JSON.parse(rawdata);

      const browserManifest = {};
      for (const [key, value] of Object.entries(manifest)) {
        if (!key.startsWith("__")) {
          browserManifest[key] = value;
        } else if (key.startsWith(`__${this.browser}__`)) {
          browserManifest[key.replace(`__${this.browser}__`, "")] = value;
        }
      }

      const formattedJson = JSON.stringify(browserManifest, null, 4);
      fs.writeFile(this.outDir + "manifest.json", formattedJson, (err) => {
        if (err) {
          reject();
        } else {
          resolve();
        }
      });
    });
  }

  // Generate icons
  generateIcons() {
    return new Promise((resolve, reject) => {
      Jimp.read(this.originalIconPath, (err, icon) => {
        if (err) {
          reject();
        }

        [16, 24, 32, 48, 128].forEach((size) => {
          const colorIcon = icon.clone();
          colorIcon
            .resize(size, size)
            .write(`${this.outDir}assets/icon-${size}x${size}.png`);
          const grayIcon = icon.clone();
          grayIcon
            .resize(size, size)
            .greyscale()
            .write(`${this.outDir}assets/icon-gray-${size}x${size}.png`);
        });
        resolve();
      });
    });
  }

  // Copy assets.
  copyAssets() {
    // Map of static files/directories to destinations we want to copy them to.
    const fileMap = {
      "src/assets/": "assets",
      "src/popup/popup.html": "popup/popup.html",
      "src/content-script/content-script.css":
        "content-script/content-script.css",
      "src/options-page/options.html": "options-page/options.html",
    };

    return new Promise((resolve, reject) => {
      let copied = 0;
      for (const [src, dest] of Object.entries(fileMap)) {
        fs.cp(
          src,
          this.outDir + dest,
          { force: true, recursive: true },
          (err) => {
            if (err) {
              reject(err);
              return;
            } else {
              copied++;

              // Resolve when all files are succcessfully copied.
              if (copied === Object.keys(fileMap).length) {
                resolve();
              }
            }
          }
        );
      }
    });
  }

  // Package extension.
  zipDir() {
    const zipFile = `${this.outputBase}/${this.browser}-${
      this.isProd ? "prod" : "dev"
    }.zip`;
    return new Promise((resolve, reject) => {
      exec(`zip -r ${zipFile}  ${this.outDir}`, (error, stdout, stderr) => {
        if (error) {
          reject(`zip error: ${error.message}`);
          return;
        }
        if (stderr) {
          reject(`zip stderr: ${stderr}`);
          return;
        }
        resolve(`Zipped files... \n${stdout}`);
      });
    });
  }

  // Tests
  buildAndExecuteTests() {
    const buildTest = esbuild
      .build({
        entryPoints: this.testSpecs,
        bundle: true,
        outdir: "spec",
        platform: "node",
      })
      .catch((err) => {
        console.error(err);
        process.exit(1);
      });

    return new Promise((resolve) => {
      buildTest.then(() => {
        const jasmine = new Jasmine();
        jasmine.loadConfig({
          spec_files: this.compiledTestSpecs,
          random: false,
        });
        jasmine.exitOnCompletion = false;

        jasmine.execute().then((doneInfo) => {
          // multiple execute calls on jasmine env errors. See https://github.com/jasmine/jasmine/issues/1231#issuecomment-26404527
          // compiledTestSpecs.forEach((f) => decache(f));
          resolve(doneInfo);
        });
      });
    });
  }

  // TODO: Watch.
  buildExtension() {
    return this.clean(this.outDir).then(() => {
      console.log(`Deleted ${this.outDir}`);

      Promise.all([this.bundleScripts(), this.copyAssets()]).then(() => {
        console.log("Successfully built extension");

        this.generateIcons();
        this.generateManifest().then(() => {
          this.zipDir().then((zipOut) => {
            console.log(zipOut);
          });
        });
      });
    });
  }

  async launchChrome() {
    await puppeteer.launch({
      headless: false,
      ignoreDefaultArgs: ["--disable-extensions", "--enable-automation"],
      args: [
        `--disable-extensions-except=${process.env.PWD}/${this.outDir}`,
        `--load-extension=${process.env.PWD}/${this.outDir}`,
      ],
    });
  }

  /* If this command fails with firefox not found, run:
   * `PUPPETEER_PRODUCT=firefox npm i -D puppeteer --prefix ./node_modules/firefox-puppeteer`
   */
  async launchFirefox() {
    await puppeteer.launch({
      product: "firefox",
      headless: false,
      ignoreDefaultArgs: ["--disable-extensions", "--enable-automation"],
      args: [
        `--disable-extensions-except=${process.env.PWD}/${this.outDir}`,
        `--load-extension=${process.env.PWD}/${this.outDir}`,
      ],
    });
  }

  test() {
    this.buildExtension().then(() => {
      this.buildAndExecuteTests();
    });
  }

  watch() {
    // For any changes in src/ rebuild the whole thing.
    // https://esbuild.github.io/api/#watch
  }
}

new Build().buildExtension();
