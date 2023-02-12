// This script is executed inside the preview (i.e. document is iframe).
export class IFrameHelper {
  iframeName = "essentialkit.com/dictFrame"; 
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
      this.sendMessage({
        action: "load",
        href: document.location.href,
        sourceFrame: this.getFrameName(),
      });

      this.hideAllExcept(document.querySelector("div[jsname=x3Eknd]"))
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
    console.debug("#sendMessage", message);
    chrome.runtime.sendMessage({ application: "dictionary", ...message });
  }

  hideAllExcept(el) {
    if(!el) {
      return;
    }

    let ns = el.nextElementSibling;
    while(ns) {
        let nns = ns.nextElementSibling;
        if(ns.style) {
            ns.style.display = "none";
        }
        ns = nns;
    }

    let ps = el.previousElementSibling;
    while(ps) {
        let pps  = ps.previousElementSibling;
        if(ps.style) {
            ps.style.display = "none";
        }
        ps = pps;
    }
    this.hideAllExcept(el.parentElement);

    // Listen for mutations and re-apply. The footer is showing cause of this.
    // https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
}
}
