import * as Sentry from '@sentry/browser';
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: 'https://b899cc8fbe2b412c82a5355e82e1842f@o526305.ingest.sentry.io/4504658475876352',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 0.1,
  release: 'dictionary@23.2.10',
  environment: 'DEV',
});

/**
 * Simple util for logging to console.
 *
 * Ensure output level is set to 'verbose' to see debug logs.
 */


enum LogLevel {
  ERROR,
  WARNING,
  INFO,
  DEBUG
}
export class Logger {
  static debugMode = false;

  tag = "";

  constructor(tag: string) {
    this.tag = tag;
  }

  debug(...messages: unknown[]) {
    this.internalLog(LogLevel.DEBUG, ...messages);
  }
  log(...messages: unknown[]) {
    this.internalLog(LogLevel.INFO, ...messages);
  }
  warn(...messages: unknown[]) {    
    this.internalLog(LogLevel.WARNING, ...messages);
  }
  error(...messages: unknown[]) {
    this.internalLog(LogLevel.ERROR, ...messages);
  }

  internalLog(level: LogLevel, ...messages: unknown[]) {    
    const d = new Date(Date.now());
    const output = ["%c%s %s",
      "color: blue",
      `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`,
      this.tag,
      ...messages];

      if (!Logger.debugMode) {
        switch(level) {
          case LogLevel.WARNING:
          case LogLevel.INFO:
            Sentry.captureMessage(messages.join(" "));
            break;
          case LogLevel.ERROR:
            Sentry.captureException(messages)
            break;
        }
        return;
      } else {
        switch(level) {
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
