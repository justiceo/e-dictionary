import { Logger } from "../logger";
import WinBox from "./winbox";
import { computePosition, flip, offset, shift } from "@floating-ui/dom";
import "./previewr.css";

const iframeName = "essentialkit_dict_frame";
// Export the dialog dom
WinBox.prototype.getDom = function () {
  return this.dom;
};

const template = document.createElement("div");
template.innerHTML = `
<div class=wb-header>
<div class=wb-control>
    <span class=wb-min></span>
    <span class=wb-max></span>
    <span class=wb-full></span>
    <span class=wb-close></span>
</div>
<div class=wb-drag>
    <div class=wb-icon></div>
    <div class=wb-title></div>
</div>
</div>

<div class=wb-body></div>

<div class=wb-n></div>
<div class=wb-s></div>
<div class=wb-w></div>
<div class=wb-e></div>
<div class=wb-nw></div>
<div class=wb-ne></div>
<div class=wb-se></div>
<div class=wb-sw></div>
`;
// This class is responsible to loading/reloading/unloading the angular app into the UI.
export class Previewr {
  getExtensionUrl = chrome.runtime.getURL;
  logger = new Logger("previewr");
  headerIconUrlBase = "https://www.google.com/s2/favicons?domain=";
  dialog?: WinBox;
  isVisible = false;
  url?: URL;
  navStack: URL[] = [];
  displayReaderMode = false;
  currentSelection?: string;
  cue = "define";
  hl = "en";

  /* This function inserts an Angular custom element (web component) into the DOM. */
  init() {
    if (this.inIframe()) {
      this.logger.log(
        "Not inserting previewr in iframe: ",
        window.location.href
      );
      return;
    }

    this.listenForCspError();
    this.listenForWindowMessages();
  }

  listenForCspError() {
    document.addEventListener("securitypolicyviolation", (e) => {
      if (window.name !== iframeName) {
        return;
      }
      this.logger.error("CSP error", e, e.blockedURI);
    });
  }

  listenForWindowMessages() {
    window.addEventListener(
      "message",
      (event) => {
        if (event.origin !== window.location.origin) {
          this.logger.debug(
            "Ignoring message from different origin",
            event.origin,
            event.data
          );
          return;
        }

        if (event.data.application !== "dictionary") {
          this.logger.debug(
            "Ignoring origin messsage not initiated by Better Previews"
          );
          return;
        }

        this.logger.log("#WindowMessage: ", event);
        this.handleMessage(event.data);
      },
      false
    );
  }

  async handleMessage(message) {
    if (message.action === "define" || message.action === "verbose-define") {
      this.logger.log("Defining ", message);
    } else if (message.action === "loaded-and-cleaned") {
      this.dialog?.show();
      return;
    } else if(message.action === "loaded-and-no-def") {
      // If verbose-define, show NO definition found.
      this.dialog?.close();
      return;
    } else {
      this.logger.warn("Unhandled action: ", message.action);
      return;
    }

    try {
      let newUrl = new URL(`https://www.google.com/search?q=${this.cue}+${message.data}&hl=${this.hl}`);
      return this.previewUrl(newUrl, message.point);
    } catch (e) {
      this.logger.log("Error creating url: ", e);
    }
  }

  async previewUrl(url: URL, point?: DOMRect) {
    this.logger.log("#previewUrl: ", url);
    if(url.href === this.url?.href) {
      return;
    }
    this.url = url;

    let pos = {x: 0, y: 0, placement: "top"}
    if(point) {
      pos = await this.getPos(point!);
    }
    const winboxOptions = {
      icon: chrome.runtime.getURL("assets/logo-24x24.png"),
      x: pos.x,
      y: pos.y,
      width: "410px",
      height: "400px",
      autosize: false,
      class: ["no-max", "no-full", "no-min", "no-resize", "no-move"],
      index: await this.getMaxZIndex(),
      html: `<iframe name="${iframeName}" src="${url}"></iframe>`,
      template: template,
      hidden: true,

      onclose: () => {
        this.navStack = [];
        this.url = undefined;
        this.dialog = undefined;
      },
    };

    if (!this.dialog) {
      this.logger.debug("creating new dialog");
      this.dialog = new WinBox("Dictionary", winboxOptions);

      this.dialog.addControl({
        index: 2,
        class: "open-options",
        title: "Options",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE00lEQVR4nO2aWWhdVRSGP6xJixm01qoYW4fYwRSxILGtig8VfFD0QWlFELHUJ/tisaDUAaR1qm2ijU8OLxWHN4cHp6JWwfqirVAFFa1DakUQ1CQ114yy4D+wPDl373PPPTdytT9ccnPX2sPaZ++1/rX2geP4f+AxYBKYTn3GgS00EQYzjEg+B2gSdAJTwCgwx/3eod8rwIk0AVZr5Q9myL6XbDn/Is4BNgMLI3obNNkXM2SvS7Yu0sdC4E5gESVjCXBEk/gFuDag+7j07suQPSzZg4H2a4GfpPcj0E1JuMAZ8bv+2l7vA+amdFuA96RzQ0ZfN0v2Zur8GFqBHc7b/VGmMd6IfTqw9wBj+u0zoAc4H3gK+NV5J2ubxnIn/1lP7yxgKfCJc9Fb5TQ+LMOYs1NGtDlZL/C1ZKMa3L5PAO8Dtwb6vR34WE91Wl5sRN+/AVY53faUMV1FDEkO7Z/AqRlyG+Q56QwDjwJn1Og8BmSI9bFHTyGNBZqD6dxWxBB7Al+pg50BvYs1WFF0pZ5CGrs0hy9Tu6ImXKLzMClvMtu4UmOPR4zNhQe0IkeqbLFG4RTgh4ArrxlGJ/arwxeYPbykMT/KcNV1BcTkwK2k8bjCOZHSAiLy8xMKUvNz6K8A+oHP5VpH9L1fshgW62za4p1OiXhGK7QtotcqlzoRoPEm2y3dEJ6W/vayjJinJ2ErdFrEiL0uSD4BXCqX2Sav86SLG3sjxiyVnh34E4pM/GRgjSLwLhdZ3460G3AR+KJI3EkSL3syIRyQ3jviYRu0OFmB8x/pabXMbipCvVdoy4xGjPDGVNTGuFo13BHYorZgj2Q1SljnMRG4PSKI1+vwhdCvtvY3L3arjbHomMe8EbhXOc5BLdi05jwDiaVF9uMXamtkMi9Wqc2hAuPNcfOdgaqCHBhWWyOSedGuNkMFx5xuhCFDBQzpdAlUQwzpqGNrmUeptUhRZGt1hAwZdx7qW+AVBcB1OWhCctgtTuRF4q7NxYewDLgJeAh4DTjskjKb8wxskd+u1OF+K3KtMRhf+yuH+91UxfVWNNe7Ymy3x63Cu2r8Vk53OhgxZqVLoS365wmIb2h3rAcuLFrgm6fqyVgkE2xxFKUiw1bLAbSLLQzoSSQUxdo0jKLUQ+BaZUCINI7rSbTkHHMbJWKJJjdUA43vk0ca1ueQDnboTCRY1Cga3+NoQR4uVS8u01gj2mKlYK74jXX8LLOH5zXmpzlyl1zod8WzIsGyKNpdEdAofF24WjGklHJMAfTqrNgcrinaiZX2j2pF7o4MFsoc8xTo7ExUw1bN4WiOK41MbFYHv1XJyOa7ks2IErMza+j/XBW+EybxchWP2OluAezOpGYsdhnjB6ly5VplaEki5ovYVvC+JdDvxowidpIGDAJXOd02jZ1khIUvfrqdMfsU2Xe6bHK/dM5TIEyuFaZUpM6KR/5aYYeuFbpdEXBS8WaBxqz7WiHLmKRIN6YyZroC2OIGvy6jr/WumJBua//f7+5ekrEGyyzS2ep+p46N4l8e0O0LOIjtOWhHryrviRFZF0Z1oUv3EydF9Da6+440XpXMmHUIbSr9FLrYKQtrNFmrxKRxWDKj4k3zwsCxFP1uuhcGcIlTU7/Cge4Tq71UE0xPj4P/CP4GdM3Fkxh1C08AAAAASUVORK5CYII=",

        click: (event, winbox) => {
          if (
            this.url?.href ===
            new URL(chrome.runtime.getURL("options-page/options.html")).href
          ) {
            this.navBack();
          } else {
            if (this.url) {
              this.navStack.push(this.url);
            }
            this.previewUrl(
              new URL(chrome.runtime.getURL("options-page/options.html"))
            );
          }
        },
      });

      // this.setUserAgent(
      //   document.querySelector('iframe').contentWindow, 
      //   'Aakash Chakravarthy Mobile Agent'
      // );
    } else {
      this.logger.debug("restoring dialog");
      this.dialog.restore();
      this.dialog.setUrl(url.href);
    }

  }

  navBack() {
    const lastUrl = this.navStack.pop();
    if (lastUrl) {
      this.previewUrl(lastUrl);
    }
  }

  /*
   * Returns true if this script is running inside an iframe,
   * since the content script is added to all frames.
   */
  inIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  getMaxZIndex() {
    return new Promise((resolve: (arg0: number) => void) => {
      const z = Math.max(
        ...Array.from(document.querySelectorAll("body *"), (el) =>
          parseFloat(window.getComputedStyle(el).zIndex)
        ).filter((zIndex) => !Number.isNaN(zIndex)),
        0
      );
      resolve(z);
    });
  }

  setUserAgent(window, userAgent) {
    if (window.navigator.userAgent != userAgent) {
      var userAgentProp = {
        get: function() {
          return userAgent;
        }
      };
      try {
        Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
      } catch (e) {
        window.navigator = Object.create(navigator, {
          userAgent: userAgentProp
        });
      }
    }
  }

  async getPos(rect: DOMRect) {
    const virtualEl = {
      getBoundingClientRect() {
        return rect;
      }
    }
    const div = document.createElement("div");
    // These dimensions need to match that of the dialog precisely.
    div.style.width = "410px";
    div.style.height = "400px";
    div.style.position = "fixed";
    div.style.visibility = "hidden";
    document.body.appendChild(div);
    return computePosition(virtualEl, div, {
      placement: "top",
      strategy: "fixed", // If you use "fixed", x, y would change to clientX/Y.
      middleware: [
        offset(12), // Space between mouse and tooltip.
        flip(),
        shift({ padding: 5 }), // Space from the edge of the browser.
      ],
    }).then(({ x, y, placement, middlewareData }) => {
      return {
        x: x,
        y: y,
        placement: placement
      }
    });
  }
}

