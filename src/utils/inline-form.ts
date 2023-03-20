/* A simple inline form that supports three sizes: inline, small and medium.

To update in REPL mode, see https://codepen.io/justiceo/pen/mdGGPxY.

Usage:
<inline-form
    app="Extension"
    logo="https://upload.wikimedia.org/wikipedia/commons/4/4f/SVG_Logo.svg" 
    store="http://example.com"            
    size="medium">
</inline-form>
*/
import '@webcomponents/custom-elements';
class InlineForm extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: "open" }); // sets and returns 'this.shadowRoot'

    const style = document.createElement("style");
    style.textContent = inlineCSS;

    const range = document.createRange();
    range.selectNode(document.getElementsByTagName("body").item(0));
    const documentFragment = range.createContextualFragment(markup);
    this.shadowRoot.append(style, documentFragment);
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
    const shadow = elem.shadowRoot;
    const size = elem.getAttribute("size") ?? "inline";
    const app = elem.getAttribute("app") ?? chrome.i18n.getMessage("appName");
    const logo = elem.getAttribute("logo") ?? chrome.runtime.getURL("assets/logo-128x128.png");
    const storeLink = elem.getAttribute("store") ?? "https://chrome.google.com/webstore/detail/" + chrome.i18n.getMessage("@@extension_id");
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
    }

    jumpButtons.forEach((button) =>
      button.addEventListener("click", (event) => {
        currentStep = event.target.getAttribute("data-next-step");
        multiStepForm.setAttribute("data-current-step", currentStep);
        if (button.id === "rate-on-store") {
          window.open(storeLink);
        }

        if (button.id === "submit-form") {
          const data = {
            feedback: multiStepForm.querySelector("input").value,
            appName: app,
          };
          fetch("https://formspree.io/f/mayzdndj", {
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
      })
    );
  }
}

const markup = `
  <form data-multi-step class='form inline'>
    <div class='row-container'>
      <div class='information'>
        <div class='logo'>
          <img src='' />
          <p></p>
        </div>
        <p data-step="1"> How are we doing?</p>
        <p data-step="2">Glad you like it! Can you help us share the ❤️? </p>
        <input name="feedback" data-step='3' placeholder='How can we improve?' />
        <p data-step='4'>Thanks for the feedback!</p>
      </div>
      <div class='action'>
        <div data-step="1">
          <span class='star' data-star-index='1'></span>
          <span class='star' data-star-index='2'></span>
          <span class='star' data-star-index='3'></span>
          <span class='star' data-star-index='4'></span>
          <span class='star' data-star-index='5'></span>
        </div>
        <div data-step="2">
          <button id="rate-on-store" type='button' data-next-step='4'>Rate on webstore</button>
          <button type='button' data-next-step='4'>No thanks</button>
        </div>
        <button id="submit-form" type='button' data-step="3" data-next-step='4'>Submit</button>
      </div>
    </div>
  </form>
  `;

const inlineCSS = `
  /* Start css reset */
  /* 1. Use a more-intuitive box-sizing model. */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  /* 2. Remove default margin */
  * {
    margin: 0;
  }
  /* 3. Allow percentage-based heights in the application */
  html,
  body {
    height: 100%;
  }
  /* Typographic tweaks! 4. Add accessible line-height 5. Improve text rendering */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  /* 6. Improve media defaults */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  /* 7. Remove built-in form typography styles */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  /* 8. Avoid text overflows */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  /* End css reset */
  
  .form {
    width: 100%;
  }
  [data-step],
  .form[data-current-step="4"] .action {
    display: none;
  }
  .form[data-current-step="1"] [data-step="1"],
  .form[data-current-step="2"] [data-step="2"],
  .form[data-current-step="3"] [data-step="3"],
  .form[data-current-step="4"] [data-step="4"] {
    display: block;
  }
  .row-container {
    align-items: center;
    background: #cce;
    display: grid;
    gap: 0.5rem;
    margin: 0;
    padding: 0.5rem 1rem;
  }
  
  .information {
    align-items: center;
    display: grid;
    gap: 0.5rem;
    grid-auto-flow: column;
  }
  .action {
    align-items: center;
    display: flex;
  }
  .logo {
    align-items: center;
    display: flex;
    gap: 0.5rem;
  }
  .logo img {
    width: 20px;
  }
  .logo p {
    display: none;
  }
  button {
    background-color: transparent;
    border-radius: 5px;
    margin-right: 0.5rem;
  }
  .star {
    cursor: pointer;
  }
  .star:before {
    content: "☆";
  }
  .full.star:before {
    content: "★";
    color: gold;
  }
  
  .inline .row-container,
  .inline .row-container.active {
    display: flex;
    min-height: 50px;
  }
  .inline .row-container .information {
    display: flex;
    flex-grow: 100;
  }
  .row-container .information input {
    flex: 1;
  }
  .inline .row-container[data-step="4"] .information {
    flex-grow: 0;
  }
  
  .small .row-container .information {
    display: flex;
  }
  
  .medium .row-container .information {
    grid-auto-flow: row;
  }
  .medium .logo p {
    display: block;
  }
  `;

customElements.define("inline-form", InlineForm);
