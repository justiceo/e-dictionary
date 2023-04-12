import { Storage } from "../storage";

type Updater = {
    <T>(arg: T): T;
  };

type SuccessfulInteractionRecord = {
  interaction: string;
  timestamp: number;
}

type FeedbackData = {
  status: "honored" | "denied" | "ignored" | undefined;
  timestamp: number;
  rating?: number;
}

// Ideally, feedback should be shown after a successful interaction.
export class FeedbackChecker {
  DAY_MS = 86_400_000;
  MONTH_X2_MS = this.DAY_MS * 30 * 2;
  storage: Storage;

  recordSuccessfulInteraction(flow: string) {
    this.storage.getAndUpdate("success_counter", (records: SuccessfulInteractionRecord[]) => {
      if(!records) {
        records = []
      }

      records.push({
        interaction: flow,
        timestamp: Date.now()
      });

      return records;
    });
    // TODO: also log it.

    // After a success is a good time to request feedback.
    this.runFeedbackCheck();
  }

  recordFeedbackResponse(feedback: FeedbackData) {
    return this.storage.put("feedback_status", feedback);
    // TODO: Also log it.
  }

  // This loop runs until user honors the feedback request.
  async runFeedbackCheck(tabInfo?: chrome.tabs.TabActiveInfo) {
    if(await this.hasHonoredFeedbackRequest()) {
      return;
    }

    // TODO: return if new tab page.

    if(await this.shouldRequestFeedback()) {
      this.sendMessage({action: "maybe_request_feedback"});
    } else {
      // start listeners.
      this.maybeUpdateUsageDays();
    }
  }

  private async shouldRequestFeedback() {
    return !this.isIncognito() 
      && await this.isSignedInToGoogle() 
      && await this.getConsecutiveUsageDays() > 30 
      && await this.getSuccessCount() > 30
      && await this.isEligibleForReissue();
  }

  private async isIncognito(): Promise<boolean> {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const t = tabs.find(t => t.incognito);
    return Promise.resolve(t !== undefined)
  }

  private async getSuccessCount(): Promise<number> {
    const successRecords: any[] = await this.storage.get("succes_counter");
    if(!successRecords) {
      return Promise.resolve(0);
    }
    else return Promise.resolve(successRecords.length);
  }

  private isSignedInToGoogle(): Promise<boolean> {
    return new Promise((resolve) => {
      chrome.cookies.get({url:'https://accounts.google.com', name:'LSID'}, 
        (cookie)=> {
          if (cookie) {
              resolve(true);
          } else {
            resolve(false);
          }      
        });
      });
  }

  private async getConsecutiveUsageDays() {
    let usage = await this.storage.get("usage_days_counter");
    if(!usage) { // maybe undefined or null.
      return Promise.resolve(0)
    }
    return Promise.resolve(usage.count);
  }

  private maybeUpdateUsageDays() {
    this.storage.getAndUpdate("usage_days_counter", (usage) => {
        if(!usage) {
          return {
            count: 0,
            timestamp: Date.now(),
          }
        }
        // If it hasn't been more than 24hrs since last usage, ignore update.
        if(Date.now() - usage.timestamp < this.DAY_MS) {
          return usage;
        }

        // Re-run every 24hrs.
        setTimeout(this.maybeUpdateUsageDays, this.DAY_MS);

        return {
          count: usage.count+1,
          timestamp: Date.now()
        }
    });
  }

  private async isEligibleForReissue(): Promise<boolean> {
    if(await this.hasHonoredFeedbackRequest()) {
      return Promise.resolve(false);
    }

    const feedback: FeedbackData = await this.storage.get("feedback_status");
    if(!feedback) {
      // It has not been issued yet.
      return Promise.resolve(true);
    }

    return Promise.resolve(Date.now() - feedback.timestamp > this.MONTH_X2_MS)
  }

  private async hasHonoredFeedbackRequest(): Promise<boolean> {
    const feedback: FeedbackData = await this.storage.get("feedback_status");
    if(!feedback) {
      return Promise.resolve(false);
    }

    return Promise.resolve(feedback.status === "honored");
  }

  private sendMessage(message: any): void {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id!, message, (response) => {
        console.debug('ack:', response);
      });
    });
  }
}
