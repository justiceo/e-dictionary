import './options.css'
import { OptionsElement } from '../utils/options/options-element';
import '../utils/translate';
import {WinBox} from '../utils/winbox/winbox';

class OptionsPage {
  render(options) {
    console.log("rendering options: ", options);
    const optionsEl = new OptionsElement(options);
    document.body.appendChild(optionsEl);

    new WinBox("Winbox Title", {
      width: "400px",
      height: "400px",
      shadowel: "test-shadow",
      html: `<h1>Hello winbox</h1>`
    });
  }

}

const config = [
  {
    id: "disable-extension-on-site",
    type: "checkbox",
    title: "Temporarily disable extension",
    description: "Turns off the extension on all websites.",
    value: true,
  },
  {
    id: "disable-sync",
    type: "checkbox",
    title: "Disable storage sync",
    description: "Your settings will not propagate to other browsers.",
    value: true,
  },
  {
    id: "radio-id",
    type: "radio",
    title: "Sample radio title",
    description: "The detail information about the radio here.",
    value: 1,
  },
  {
    id: "switch-id",
    type: "switch",
    title: "Sample switch title",
    description: "The detail information about the switch here.",
    value: true,
  },
  {
    id: "select-id",
    type: "select",
    title: "Sample select title",
    description: "The detail information about the select here.",
    value: 2,
  },
  {
    id: "range-id",
    type: "range",
    title: "Sample range title",
    description: "The detail information about the range here.",
    value: 0,
  },
  {
    id: "textarea-id",
    type: "textarea",
    title: "Sample textarea title",
    description: "The detail information about the textarea here.",
    value: "hello world",
  },
];
let op = new OptionsPage();
op.render(config);

