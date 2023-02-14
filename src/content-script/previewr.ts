import { Logger } from "../logger";
import WinBox from "./winbox";
import { computePosition, flip, offset, shift } from "@floating-ui/dom";
import "./previewr.css";
import { getEngineConfig } from "./search-engine";

const iframeName = "essentialkit_dict_frame";
// Export the dialog dom
WinBox.prototype.getDom = function () {
  return this.dom;
};

WinBox.prototype.startLoading = function () {
  this.dom.querySelector(".loading").style.display = "block";
  this.dom.querySelector("[name=essentialkit_dict_frame]").style.visibility = "hidden";
};
WinBox.prototype.stopLoading = function () {
  this.dom.querySelector(".loading").style.display = "none";
  this.dom.querySelector("[name=essentialkit_dict_frame]").style.visibility = "visible";
};

// This class is responsible to loading/reloading/unloading the angular app into the UI.
export class Previewr {
  getExtensionUrl = chrome.runtime.getURL;
  logger = new Logger("previewr");
  dialog?: WinBox;
  isVisible = false;
  url?: URL;
  navStack: URL[] = [];
  displayReaderMode = false;
  currentSelection?: string;
  cue = "define";
  hl = "en";
  engineConfig = getEngineConfig();

  /* This function inserts an Angular custom element (web component) into the DOM. */
  init() {
    if (this.inIframe()) {
      this.logger.debug(
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

        this.handleMessage(event.data);
      },
      false
    );
  }

  async handleMessage(message) {
    this.logger.debug("#handleMessage: ", message);
    if (message.action === "define" || message.action === "verbose-define") {
      try {
        let newUrl = new URL(this.engineConfig["url"](message.data));
        if(newUrl.href === this.url?.href) {
          this.logger.warn("Ignoring update of same URL", newUrl.href);
          return;
        }
        this.url = newUrl;
        if(this.dialog) {
          this.dialog.startLoading();
        }
        this.previewUrl(newUrl, message.point);
        return;
      } catch (e) {
        this.logger.log("Error creating url: ", e);
      }
    } else if (message.action === "loaded-and-cleaned") {
      // TODO: Reset to actual URL in case of internal navigation within iframe.
      // this.url = new URL(message.href); 
      this.dialog?.show();
      this.dialog?.stopLoading();
      return;
    } else if(message.action === "loaded-and-no-def") {
      // If verbose-define, show NO definition found.
      this.dialog?.close();
      return;
    } else if(message.action === "unload") {
      console.error("unload handled");
      this.dialog?.startLoading();
    } else {
      this.logger.warn("Unhandled action: ", message.action);
      return;
    }
  }

  async previewUrl(url: URL, point?: DOMRect) {
    this.logger.log("#previewUrl: ", url);    

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
      // Simply updating the url without changing the iframe, means the content-script doesn't get re-inserted into the frame, even though it's now out of context.
      html: `<iframe name="${iframeName}" src="${url}"></iframe><div class="loading"><span class="bar-animation"></span></div> `,
      // url: url.href, // Update restore when you update this.
      hidden: true,

      onclose: () => {
        this.navStack = [];
        this.url = undefined;
        this.dialog = undefined;
      },
    };

    if (!this.dialog) {
      this.logger.debug("creating new dialog with options", winboxOptions);
      this.dialog = new WinBox("Dictionary", winboxOptions);

    } else {
      this.logger.debug("restoring dialog");
      this.dialog.dom.style.left = pos.x + "px";
      this.dialog.dom.style.top = pos.y + "px";
      this.dialog.restore();
      // TODO: Show loading animation, which would be hidden after load.
      // TODO: Also reset html to ensure load is fired.
      this.dialog.setUrl(url.href);
    }

    // TODO: Periodically check and update the z-index.

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

