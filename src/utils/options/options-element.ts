import "@webcomponents/webcomponentsjs"; // Polyfill for customElements in content scripts, https://stackoverflow.com/q/42800035.
import { LitElement, css, html, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import bootstrap from "./bootstrap.bundle.min.js";
import bootstrapCSS from "./bootstrap5.txt.css";

@customElement("options-element")
export class OptionsElement extends LitElement {
  configItems: any[];
  
  static styles = css`
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

  constructor(configItems: any[]) {
    super();
    this.configItems = configItems;
  }

  checkboxTemplate(configItem: any) {
    return html`
      <li
        class="checkbox-template list-group-item p-4 d-flex justify-content-between align-items-center"
      >
        <div class="ms-2 me-5">
          <div class="fw-bold control-title">${configItem.title}</div>
          <small class="control-description disabled"
            >${configItem.description}</small
          >
        </div>
        <input
          @input="${(e) => this.saveChange(configItem.id, e)}"
          class="form-check-input me-1"
          type="checkbox"
          id="thirdCheckbox"
          ${configItem.value ? "checked" : ""}
        />
      </li>
    `;
  }
  switchTemplate(configItem: any) {
    return html`
      <li
        class="switch-template list-group-item p-4 d-flex justify-content-between align-items-center"
      >
        <div class="ms-2 me-auto">
          <div class="control-title fw-bold">${configItem.title}</div>
          <small class="control-description disabled"
            >${configItem.description}
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"            
          ${configItem.value ? "checked" : ""}
          />
        </div>
      </li>
    `;
  }
  radioTemplate(configItem: any) {
    return html`
      <li
        class="radio-template list-group-item p-4 d-flex justify-content-between align-items-center"
      >
        <div class="ms-2 me-5">
          <div class="control-title fw-bold">${configItem.title}</div>
          <small class="control-description disabled"
            >${configItem.description}</small
          >
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">Left</button>
          <button type="button" class="btn btn-primary">Middle</button>
          <button type="button" class="btn btn-primary">Right</button>
        </div>
      </li>
    `;
  }
  rangeTemplate(configItem: any) {
    return html`
      <li class="range-template list-group-item p-4">
        <div class="ms-2">
          <div class="control-title fw-bold">${configItem.title}</div>
          <small class="control-description disabled"
            >${configItem.description}>
          <input
            type="range"
            class="form-range"
            min="0"
            max="5"
            value="${configItem.value}"
            id="customRange2"
          />
        </div>
      </li>
    `;
  }
  textareaTemplate(configItem: any) {
    return html`
      <li class="textarea-template list-group-item p-4 ">
        <div class="d-flex justify-content-between align-items-center">
          <div class="ms-2 me-auto">
            <div class="control-title fw-bold">${configItem.title}</div>
            <small class="control-description disabled"
              >${configItem.description}
          </div>
          <div class="form-check form-switch">
          V
            <i
              class="bi-caret-down-fill"
              style="font-size: 1.5rem"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            ></i>
          </div>
        </div>
        <div class="collapse ms-2" id="collapseExample">
          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value="${configItem.value}"
            ></textarea>
          </div>
        </div>
      </li>
    `;
  }
  selectTemplate(configItem: any) {
    return html`
      <li
        class="select-template list-group-item p-4 d-flex justify-content-between align-items-center"
      >
        <div class="ms-2 me-5">
          <div class="control-title fw-bold">${configItem.title}</div>
          <small class="control-description disabled"
            >${configItem.description}</small
          >
        </div>
        <select
          class="form-select form-select-md"
          aria-label="example"
          style="max-width: 200px"
          value="${configItem.value}"
        >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </li>
    `;
  }
  toastTemplate() {
    return html`
      <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          class="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            <img
              src="../assets/logo-24x24.png"
              class="rounded me-2"
              alt="Logo"
            />
            <strong class="me-auto"
              >${chrome.i18n.getMessage("appName")}</strong
            >
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div class="toast-body">Successfully updated settings</div>
        </div>
      </div>
    `;
  }

  render() {
    const configItemTemplates: TemplateResult[] = [];
    this.configItems.forEach((o) => {
      switch (o.type) {
        case "checkbox":
          configItemTemplates.push(this.checkboxTemplate(o));
          break;
        case "switch":
          configItemTemplates.push(this.switchTemplate(o));
          break;
        case "radio":
          configItemTemplates.push(this.radioTemplate(o));
          break;
        case "select":
          configItemTemplates.push(this.selectTemplate(o));
          break;
        case "textarea":
          configItemTemplates.push(this.textareaTemplate(o));
          break;
        case "range":
          configItemTemplates.push(this.rangeTemplate(o));
          break;
      }
    });
    return html`
      <div class="container">
        <div class="row">
          <div class="col">
            <ul class="list-group">
              ${configItemTemplates}
            </ul>
          </div>
        </div>
        ${this.toastTemplate()}
      </div>
    `;
  }

  saveChange(fieldId, updatedValue) {
    console.log("saving: ", fieldId, updatedValue);
    this.showToast();
  }

  showToast() {
    const toastLiveExample = this.renderRoot.querySelector("#liveToast");
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  }
}
