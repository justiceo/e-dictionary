import "@webcomponents/webcomponentsjs"; // Polyfill for customElements in content scripts, https://stackoverflow.com/q/42800035.
import { LitElement, css, html, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import bootstrap from "./bootstrap.bundle.min.js";
import { bootstrapCSS, enhancedBootstrapCSS } from "./bootstrap5.css.js";

@customElement("options-element")
export class OptionsElement extends LitElement {
  configItems = [
    {
      id: "check-id",
      type: "checkbox",
      title: "Sample checkbox title",
      description: "The detail information about the checkbox here.",
    },
    {
      id: "radio-id",
      type: "radio",
      title: "Sample radio title",
      description: "The detail information about the radio here.",
    },
    {
      id: "switch-id",
      type: "switch",
      title: "Sample switch title",
      description: "The detail information about the switch here.",
    },
    {
      id: "select-id",
      type: "select",
      title: "Sample select title",
      description: "The detail information about the select here.",
    },
    {
      id: "range-id",
      type: "range",
      title: "Sample range title",
      description: "The detail information about the range here.",
    },
    {
      id: "textarea-id",
      type: "textarea",
      title: "Sample textarea title",
      description: "The detail information about the textarea here.",
    },
  ];
  static styles = css`
    ${bootstrapCSS}
    ${enhancedBootstrapCSS}
  `;

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
          value=""
          id="thirdCheckbox"
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
            checked
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
        >
          <option selected>Open this select menu</option>
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
            <strong class="me-auto">Better Previews</strong>
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
