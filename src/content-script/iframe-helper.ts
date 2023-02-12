import { Logger } from "../logger";

// This script is executed inside the preview (i.e. document is iframe).
export class IFrameHelper {
  iframeName = "essentialkit_dict_frame";
  selector = "div[jsname=x3Eknd]";
  logger = new Logger("iframe-helper");
  constructor() {
    /*
     * Favicon URL request, Window.Title request, apply custom CSS.
     * Redirect clicks.
     */
  }

  registerListeners() {
    if (!this.inIframe()) {
      return;
    }
    if (this.getFrameName() !== this.iframeName) {
      return;
    }

    window.addEventListener("load", () => {
      this.focusGoogle();
      this.handleMutations();
    });

    window.addEventListener("unload", () => {
      this.sendMessage({
        action: "unload",
        href: document.location.href,
        sourceFrame: this.getFrameName(),
      });
    });
  }

  inIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  getFrameName() {
    return window.name;
  }

  // Returns a truthy value (the link element) if event target is a link.
  getLinkTarget(e: MouseEvent | KeyboardEvent): EventTarget | null {
    var target: any = e.target;
    // If the <a> element contains other elements, we traverse the tree to find the anchor element clicked:
    do {
      if (target.nodeName.toUpperCase() === "A" && target.href) {
        return target;
      }
    } while ((target = target.parentElement));
    return null;
  }

  sendMessage(message: any) {
    this.logger.debug("#sendMessage", message);
    chrome.runtime.sendMessage({ application: "dictionary", ...message });
  }

  hideAllExcept(el) {
    if (!el) {
      return;
    }

    let ns = el.nextElementSibling;
    while (ns) {
      let nns = ns.nextElementSibling;
      if (ns.style) {
        ns.style.display = "none";
      }
      ns = nns;
    }

    let ps = el.previousElementSibling;
    while (ps) {
      let pps = ps.previousElementSibling;
      if (ps.style) {
        ps.style.display = "none";
      }
      ps = pps;
    }
    this.hideAllExcept(el.parentElement);
  }
  focusGoogle() {
    let maybeDict = document.querySelectorAll(this.selector);
    if (maybeDict.length == 0) {
      this.logger.error("No match for selector, ", this.selector);
      this.sendMessage({
        action: "loaded-and-no-def",
        href: document.location.href,
        sourceFrame: this.getFrameName(),
      });
      return;
    }

    const body = document.querySelector("body.srp") as HTMLBodyElement | null;
    if (body) {
      body.style.setProperty("--center-width", "350px");
      body.style.overflowX = "hidden";
    }

    // TODO: Handle multiple defs case. Sample query is "firm".
    // Handle search box visible sometimes, query is "principal"=>"denoting".
    // Weird rendering: "ßdesignate".
    this.hideAllExcept(maybeDict[0]);
    this.sendMessage({
      action: "loaded-and-cleaned",
      href: document.location.href,
      sourceFrame: this.getFrameName(),
    });
  }

  // Mutations do not cause a page reload and may result in a jank.
  // E.g. clicking on querySelectorAll("[data-term-for-update]") elements in definition.
  // TODO: Use mutation observer for a more efficient mechanism to detect changes and hide them.
  handleMutations() {
    setInterval(() => {
      this.focusGoogle();
    }, 500);
  }
}
