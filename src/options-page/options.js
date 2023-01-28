import './options.css'
import { OptionsElement } from './options-element';

class OptionsPage {
  render(options) {
    console.log("rendering options: ", options);
    const optionsEl = new OptionsElement();
    document.body.appendChild(optionsEl);
  }

}

const config = [
  {
    id: "disable-extension-on-site",
    type: "checkbox",
    title: "Temporarily disable extension",
    description: "Turns off the extension on all websites.",
  },
  {
    id: "disable-sync",
    type: "checkbox",
    title: "Disable storage sync",
    description: "Your settings will not propagate to other browsers.",
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
let op = new OptionsPage(config);
op.render();

