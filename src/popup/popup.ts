
import { OptionsElement } from '../utils/options-element';
import '../utils/feedback/feedback';

const optionsEl = new OptionsElement([  {
  id: "disable-extension-on-site",
  type: "checkbox",
  title: "Disable extension on this site",
  description: "You will no longer see preview search results or view smart actions on this website",
},]);
document.body.appendChild(optionsEl);

document.querySelector("#go-to-options").addEventListener("click", () => {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL("options.html"));
  }
});

