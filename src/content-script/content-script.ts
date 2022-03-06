import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";
import { Message } from '../shared';
import { Logger } from '../logger';

Sentry.init({
    dsn: "https://b1d81a9e5f1546f79885a473ce33128c@o526305.ingest.sentry.io/6244539",

    release: "xtension@0.1.0",
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

const L = new Logger("content-script");
const onMessage = (msg: Message, _: chrome.runtime.MessageSender, callback: (response?: any) => void) => {
    L.debug('received message: ', msg.type);
    callback();
}

chrome.runtime.onMessage.addListener(onMessage);