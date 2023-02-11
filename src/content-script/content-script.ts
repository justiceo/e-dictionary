import { Message } from "../shared";
import { Logger } from "../logger";
import { Previewr } from "./previewr";

import './content-script.css';

const L = new Logger("content-script");

class Listener {
  showTimeout?: number;

  start() {
    document.onmouseup = (e) => this.deferredMaybeShow(e);

    chrome.runtime.onMessage.addListener((request, sender, callback) => {
      L.debug("Re-posting message for DOM: ", request);
      this.sendMessage(request.action, request.data);
      callback("ok");
    });
  }

  deferredMaybeShow(e: MouseEvent): void {
    console.log("#maybeShow")
    // Allow a little time for cancellation.
    this.showTimeout = window.setTimeout(() => this.maybeShow(e), 100);
  }

  maybeShow(e: MouseEvent): void {
    console.log("#maybeShow")

    // Filter out empty/irrelevant selections.
    if (typeof window.getSelection == "undefined") {
      return;
    }
    const selection = window.getSelection()!;
    if (selection.isCollapsed) {
      return;
    }

    // Show appropriate buttons.
    const selectedText = selection.toString().trim();
    const range = selection.getRangeAt(0);
    const boundingRect = range.getBoundingClientRect();
    console.debug("Selected: ", selectedText);
    const actionsToShow = [];
    if (this.shouldDefine(e, selectedText)) {
      this.sendMessage("define", selectedText);
    }
  }

  shouldDefine(e: MouseEvent, selectedText: string): boolean {
    console.log("#shouldDefine: ", selectedText)
    const isQuerySize = (text: string) => {
      return text.length > 0 && text.length < 100;
    };

    const isEmail = (email: string) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const isUrl = (urlStr: string) => {
      const absoluteUrlMatcher = new RegExp("^(?:[a-z+]+:)?//", "i");
      return absoluteUrlMatcher.test(urlStr);
    };

    const isDate = (dataStr: string) => {
      return !isNaN(Date.parse(dataStr));
    };

    const hasLetters = (text: string) => {
      return /[a-zA-Z]/.test(text);
    };

    const hasOddSymbols = (text: string) => {
      // TODO: implement.
      return false;
    };

    return (
      isQuerySize(selectedText) &&
      hasLetters(selectedText) &&
      !isEmail(selectedText) &&
      !isDate(selectedText) &&
      !isUrl(selectedText) &&
      !hasOddSymbols(selectedText)
    );
  }

  hideAll() {}

  sendMessage(action: string, data: any) {
    console.log("Sending message: ", action, data);
    window.postMessage(
      { application: "dictionary", action: action, data: data },
      window.location.origin
    );
  }
}

(new Listener()).start();
(new Previewr()).init();