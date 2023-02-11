import WinBox from "winbox/src/js/winbox";
import 'winbox/dist/css/winbox.min.css'; 
import { Logger } from "../logger";

export class Previewr {
  logger = new Logger("previewr");
  init() {
    this.listenForWindowMessages();
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
    if (message.action === "define") {
      this.logger.log("Defining ", message);
    } else if (message.action === "verbose-define") {
      this.logger.log("HarD Defining: ", message);
    }

    const winboxOptions = {
        //icon: chrome.runtime.getURL("assets/logo-24x24.png"),
        x: "right",
        y: "50px",
        width: "300px",
        height: "100px",
        class: ["no-max", "no-full", "no-min"],
        index: await this.getMaxZIndex(),
        html: message.data
      };
    let dialog = new WinBox("Define " + message.data, winboxOptions);
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
}
