import * as Sentry from "@sentry/browser";

/**
 * Simple util for logging to console.
 *
 * Ensure output level is set to 'verbose' to see debug logs.
 */

enum LogLevel {
  ERROR,
  WARNING,
  INFO,
  DEBUG,
}
declare var IS_DEV_BUILD: boolean;
export class Logger {
  tag = "";

  constructor(tag: string) {
    this.tag = tag;

    console.error(tag, ": is_dev_build? ", IS_DEV_BUILD);
    if(!IS_DEV_BUILD) {
      this.initSentry();
    }
    this.listenForBgLogs();
  }

  initSentry() {
    Sentry.init({
      dsn: "https://b1d81a9e5f1546f79885a473ce33128c@o526305.ingest.sentry.io/6244539",
      tracesSampleRate: 0.1,
      release: "xtension@23.01.10",
      environment: "PROD",
    });
  }

  listenForBgLogs() {
    chrome.runtime.onMessage.addListener((message, sender) => {
      if(sender.id !== chrome.runtime.id || message.action != "log") {
        return;
      }
      this.internalLogTagOverride(message.data.level, message.data.tag, ...message.data.messages)
    });
  }

  debug = (...messages: unknown[]) => this.internalLog(LogLevel.DEBUG, ...messages);
  log = (...messages: unknown[]) => this.internalLog(LogLevel.INFO, ...messages); 
  warn = (...messages: unknown[]) => this.internalLog(LogLevel.WARNING, ...messages);
  error = (...messages: unknown[]) => this.internalLog(LogLevel.ERROR, ...messages);

  internalLog(level: LogLevel, ...messages: unknown[]) {
    this.internalLogTagOverride(level, this.tag, ...messages);
  }

  internalLogTagOverride(level: LogLevel, tag: string, ...messages: unknown[]) {
    const d = new Date(Date.now());
    const output = [
      "%c%s %s",
      "color: blue",
      `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`,
      tag,
      ...messages,
    ];
    if (!IS_DEV_BUILD) {
      switch (level) {
        case LogLevel.WARNING:
        case LogLevel.INFO:
          Sentry.captureMessage(output.join(" "));
          break;
        case LogLevel.ERROR:
          Sentry.captureException(output.join(" "));
          break;
      }
      return;
    } else {
      switch (level) {
        case LogLevel.DEBUG:
          console.debug(...output);
          break;
        case LogLevel.WARNING:
          console.warn(...output);
          break;
        case LogLevel.INFO:
          console.log(...output);
          break;
        case LogLevel.ERROR:
          console.error(...output);
          break;
      }
    }
  }
}

// For use in popup and service-worker.
export class RemoteLogger {
  tag = "";

  constructor(tag: string) {
    this.tag = tag;
  }

  debug = (...messages: unknown[]) => this.internalLog(LogLevel.DEBUG, ...messages);
  log = (...messages: unknown[]) => this.internalLog(LogLevel.INFO, ...messages); 
  warn = (...messages: unknown[]) => this.internalLog(LogLevel.WARNING, ...messages);
  error = (...messages: unknown[]) => this.internalLog(LogLevel.ERROR, ...messages);

  internalLog(level: LogLevel, ...messages: unknown[]): void {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      if(tabs.length !== 1) {
        return;
      }
      chrome.tabs.sendMessage(tabs[0].id!, {action: "log", data: {level: level, tag: this.tag, messages: messages}});
    });
  }
}