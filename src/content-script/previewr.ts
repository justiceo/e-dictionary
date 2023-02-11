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
      return;
    } else if (message.action === "verbose-define") {
      this.logger.log("HarD Defining: ", message);
      return;
    }
  }
}
