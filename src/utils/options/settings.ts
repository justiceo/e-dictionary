import '@webcomponents/custom-elements';
import bootstrap from "./bootstrap.bundle.min.js";
import bootstrapCSS from "./bootstrap5.txt.css";
import formHtml from './settings.txt.html';

export class SettingsUI extends HTMLElement {
  configItems: any[]
  template!: HTMLElement;
  constructor(configItems: any[]) {
    // Always call super first in constructor
    super();

    this.configItems = configItems;
    // Create a shadow root
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    console.log("SettingsUI added to page.");
    this.render(this.configItems);
  }
  disconnectedCallback() {
    console.log("SettingsUI element removed from page.");
  }

  adoptedCallback() {
    console.log("SettingsUI element moved to new page.");
  }


  // See https://netbasal.com/supercharge-your-forms-in-web-components-with-lit-5df42430907a
  // as potential alternative using lit.
  render(options: any[]): HTMLElement {
    const style = document.createElement("style");
    style.textContent = `
    ${bootstrapCSS}
    
    input[type="checkbox"] {
      /* Double-sized Checkboxes */
      -ms-transform: scale(1.4); /* IE */
      -moz-transform: scale(1.4); /* FF */
      -webkit-transform: scale(1.4); /* Safari and Chrome */
      -o-transform: scale(1.4); /* Opera */
      padding: 10px;
    }
    
    .collapse {
      margin-top: 15px;
    }
    .container {
      min-width: 400px;
      min-height: 400px;
    }
  `;

    this.template = document.createElement('div');
    this.template.innerHTML= formHtml;

    const output = document.createElement("ul");
    output.className = "list-group";
    options.forEach((o) => output.appendChild(this.cloneInput(o)));

    this.shadowRoot?.append(style, output);
  }

  async saveChange(option, updatedValue) {
    console.debug("saving: ", option.id, updatedValue);
    let configToSave =  {}
    option.value = updatedValue;
    configToSave[option.id] = option;
    await chrome.storage.sync.set(configToSave);
    this.showToast();
  }

  cloneInput(option): HTMLElement {
    let input = this.template
      .getElementsByClassName(`${option.type}-template`)[0]
      .cloneNode(true) as HTMLElement;

    input.getElementsByClassName(`control-title`)[0].innerHTML = option.title;
    input.getElementsByClassName(`control-description`)[0].innerHTML =
      option.description;

    const eventHandler = (e: Event) => {
      const data =
        ["checkbox", "switch"].indexOf(option.type) >= 0 ? e.target?.checked : e.target?.value;
      this.saveChange(option, data);
    };

    const actualInput = input.getElementsByClassName(
      "control-input"
    )[0] as HTMLInputElement;
    ["checkbox", "switch"].indexOf(option.type) >= 0 ? actualInput.checked = !!option.value: actualInput.value = option.value;

    option.type === "select"
      ? actualInput.addEventListener("change", eventHandler)
      : actualInput.addEventListener("input", eventHandler);

    if(option.type === "range") {
      actualInput.min = option.min;
      actualInput.max = option.max;
    }
    if(option.type === "select") {
      // option.options.forEach(e => {
      //   (actualInput as unknown as HTMLSelectElement).add(new Option(e, e));
      // });
    }

    return input;
  }

  showToast() {
    // Check if element is already inserted and use it, other-wise, add it.
    let toastEl = this.shadowRoot?.querySelector(".toast-container");
    if(!toastEl) {
      toastEl = this.template.querySelector(".toast-container")!;
      this.shadowRoot?.append(toastEl);
    }
    const toast = new bootstrap.Toast(toastEl.querySelector("#liveToast"));
    console.log("showing toast: ", bootstrap, toast);
    toast.show();
  }
}

customElements.define("settings-ui", SettingsUI);
