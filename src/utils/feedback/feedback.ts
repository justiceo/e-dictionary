import '@webcomponents/custom-elements';
import markup from './feedback.txt.html';
import css from './feedback.txt.css';

/* A simple inline form that supports three sizes: inline, small and medium.

To update in REPL mode, see https://codepen.io/justiceo/pen/mdGGPxY.

Usage:
<feedback-form
    app="Extension"
    logo="https://upload.wikimedia.org/wikipedia/commons/4/4f/SVG_Logo.svg" 
    store="http://example.com"            
    size="medium">
</feedback-form>
*/
class FeedbackForm extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: "open" }); // sets and returns 'this.shadowRoot'
  }

  static get observedAttributes() {
    return ["size"];
  }

  connectedCallback() {
    console.log("Custom form element added to page.");
    this.updateStyle(this);
  }
  disconnectedCallback() {
    console.log("Custom square element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom square element moved to new page.");
  }

  updateStyle(elem) {
    const style = document.createElement("style");
    style.textContent = css;

    const range = document.createRange();
    range.selectNode(document.getElementsByTagName("body").item(0));
    const documentFragment = range.createContextualFragment(markup);

    const shadow = elem.shadowRoot;
    shadow.append(style, documentFragment);

    const size = elem.getAttribute("size") ?? "inline";
    const app = elem.getAttribute("app-name") ?? chrome.i18n.getMessage("appName");
    const logo = elem.getAttribute("logo-url") ?? chrome.runtime.getURL("assets/logo-128x128.png");
    const storeLink = elem.getAttribute("store-link") ?? "https://chrome.google.com/webstore/detail/" + chrome.i18n.getMessage("@@extension_id");
    const formLink = elem.getAttribute("form-link") ?? "https://formspree.io/f/mayzdndj";
    console.log(`Attributes: size=${size}, app=${app}, logo=${logo}`);

    const multiStepForm = shadow.querySelector("[data-multi-step]");
    multiStepForm.classList.remove("inline", "small", "medium");
    multiStepForm.classList.add(size);

    multiStepForm.querySelector("img").src = logo;
    multiStepForm.querySelector(".logo p").innerHTML = app;

    let currentStep = multiStepForm.getAttribute("data-current-step");

    if (!currentStep) {
      currentStep = 1;
      multiStepForm.setAttribute("data-current-step", currentStep);
    }

    const stars = [...multiStepForm.querySelectorAll(".star")];
    const jumpButtons = [...multiStepForm.querySelectorAll("[data-next-step]")];

    if (stars.length > 0) {
      const resetStarsClass = () =>
        stars.forEach((star) => (star.classList = ["star"]));

      const handleMouseOver = (event) => {
        const starIndex = event.target.getAttribute("data-star-index");
        resetStarsClass();

        stars.forEach((star, index) =>
          index < starIndex ? star.classList.add("full") : null
        );
      };

      const handleStarClick = (event) => {
        const starIndex = event.target.getAttribute("data-star-index");

        currentStep = starIndex < 5 ? 3 : 2;

        multiStepForm.setAttribute("data-current-step", currentStep);
      };

      stars.forEach((star) =>
        star.addEventListener("mouseover", handleMouseOver)
      );
      stars.forEach((star) => star.addEventListener("click", handleStarClick));
      multiStepForm.addEventListener("mouseleave", resetStarsClass);
    }

    jumpButtons.forEach((button) =>
      button.addEventListener("click", (event) => {
        currentStep = event.target.getAttribute("data-next-step");
        multiStepForm.setAttribute("data-current-step", currentStep);

        // Handle click on "rate on webstore".
        if (button.id === "rate-on-store") {
          window.open(storeLink);
        }

        // Handle feedback submission.
        if (button.id === "submit-form") {
          const data = {
            feedback: multiStepForm.querySelector("input").value,
            appName: app,
          };
          fetch(formLink, {
            method: "POST",
            body: JSON.stringify(data),
          })
            .then(function (response) {
              return console.log("response", response.json());
            })
            .then(function (response) {
              console.log("response 2", response.json());
            });
        }

        // Auto-close at the end.
        if(currentStep == 4) {
          setTimeout(() => {
            multiStepForm.style.display = "none";
          }, 1300);
        }
      })
    );
  }
}

customElements.define("feedback-form", FeedbackForm);
