import { Message, Log } from '../shared';

const onMessage = (msg: Message, _: chrome.runtime.MessageSender, callback: (response?: any) => void) => {
    Log.debug('content-script.js', 'received message: ', msg.type);
    callback();
}

chrome.runtime.onMessage.addListener(onMessage);