import './options.css'
import { OptionsElement } from './options-element';

class OptionsPage {
  render(options) {
    console.log("rendering options: ", options);
    const optionsEl = new OptionsElement();
    document.body.appendChild(optionsEl);
  }

}

let op = new OptionsPage();
op.render();

