import { Logger } from "../utils/logger";

const L = new Logger("content-script");
const onMessage = (
    msg,
    _: chrome.runtime.MessageSender,
    callback: () => void,
) => {
  L.debug("received message: ", msg.action);
  callback();
};

chrome.runtime.onMessage.addListener(onMessage);
