const fs = require("fs");
const { exec } = require("child_process");
const esbuild = require("esbuild");
const Jimp = require("jimp");
const Jasmine = require("jasmine");
const outDir = "build/";

// Clean output directory
const clean = (outDir) => {
  return new Promise((resolve, reject) => {
    fs.rm(outDir, { recursive: true }, (err) => {
      if (err) {
        if (err.code == "ENOENT") {
          // Directory already deleted or doesn't exist.
          resolve();
        } else {
          reject(err);
        }
      }

      resolve();
    });
  });
};

// Bundle scripts.
const bundleScripts = (outDir, isProd) => {
  return esbuild
    .build({
      entryPoints: [
        "src/background-script/background.ts",
        "src/content-script/content-script.ts",
        "src/popup/popup.ts",
        "src/options-page/options.js",
      ],
      bundle: true,
      minify: isProd,
      sourcemap: !isProd,
      outdir: outDir,
      target: ["chrome58", "firefox57", "safari11", "edge16"],
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

// Generate manifest
// NB: This function would fail if outDir doesn't exist yet.
const generateManifest = (outDir, browser) => {
  return new Promise((resolve, reject) => {
    let rawdata = fs.readFileSync("src/manifest.json");
    let manifest = JSON.parse(rawdata);

    const browserManifest = {};
    for (const [key, value] of Object.entries(manifest)) {
      if (!key.startsWith("__")) {
        browserManifest[key] = value;
      } else if (key.startsWith(`__${browser}__`)) {
        browserManifest[key.replace(`__${browser}__`, "")] = value;
      }
    }

    const formattedJson = JSON.stringify(browserManifest, null, 4);
    fs.writeFile(outDir + "manifest.json", formattedJson, (err) => {
      if (err) {
        reject();
      } else {
        resolve();
      }
    });
  });
};

// Generate icons
const originalIconPath = "src/assets/icon.png";
const generateIcons = (outDir) => {
  return new Promise((resolve, reject) => {
    Jimp.read(originalIconPath, (err, icon) => {
      if (err) {
        reject();
      }

      [16, 24, 32, 48, 128].forEach((size) => {
        const colorIcon = icon.clone();
        colorIcon
          .resize(size, size)
          .write(`${outDir}assets/icon-${size}x${size}.png`);
        const grayIcon = icon.clone();
        grayIcon
          .resize(size, size)
          .greyscale()
          .write(`${outDir}assets/icon-gray-${size}x${size}.png`);
      });
      resolve();
    });
  });
};

// Copy assets.
const copyAssets = (outDir) => {
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
      fs.cp(src, outDir + dest, { force: true, recursive: true }, (err) => {
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
      });
    }
  });
};

// Package extension
const zipDir = (dirToZip, zipFile) => {
  return new Promise((resolve, reject) => {
    exec(`zip -r ${zipFile}  ${dirToZip}`, (error, stdout, stderr) => {
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
};

// Tests
const testSpecs = ["spec/e2e-spec.ts"];
const compiledTestSpecs = ["spec/e2e-spec.js"];
const runTest = () => {
  const buildTest = esbuild
    .build({
      entryPoints: testSpecs,
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
        spec_files: compiledTestSpecs,
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
};


// TODO: Watch.
const build = () => {
  outputDir = "build/";
  return clean(outputDir).then(() => {
    console.log(`Deleted ${outDir}`);

    Promise.all([bundleScripts(outputDir), copyAssets(outputDir)]).then(() => {
      console.log("Successfully built extension");

      generateIcons(outputDir);
      generateManifest(outputDir, "chrome").then(() => {
        zipDir(outputDir, "build/extension.zip").then((zipOut) => {
          console.log(zipOut);
        });
      });
    });
  });
};


const test = () => {
    build().then(() => {
        runTest();
    })
}

const watch = () => {
    // For any changes in src/ rebuild the whole thing.
    // https://esbuild.github.io/api/#watch
}

test();
