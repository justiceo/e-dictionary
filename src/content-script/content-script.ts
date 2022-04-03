import { Message } from "../shared";
import { Logger } from "../logger";

const L = new Logger("content-script");
const onMessage = (
    msg: Message,
    _: chrome.runtime.MessageSender,
    callback: () => void,
) => {
  L.debug("received message: ", msg.type);
  callback();
};

chrome.runtime.onMessage.addListener(onMessage);
