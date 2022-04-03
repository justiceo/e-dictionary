/** An enum for quickly identify classes of messages. */
export enum MessageType {
    Install = 1
}

/** Object that is passed between popup, content-script and background-page. */
export class Message {
  type: MessageType;

  value: unknown;
}


export const loadExtensionFile = (
    fileName: string,
    callback: (fileContents: string) => void,
) => {
  const readFile = (file: File) => {
    const reader = new FileReader();
    // eslint-disable-next-line func-names
    reader.onloadend = function() { // "this" is reader.onloadend.
      callback(this.result as string);
    };
    reader.readAsText(file);
  };
  const readFileEntry = (e /* FileEntry */) => e.file(readFile);
  const readDirEntry = (dirEntry /* DirectoryEntry */) => {
    dirEntry.getFile(fileName, {}, readFileEntry);
  };
  chrome.runtime.getPackageDirectoryEntry(readDirEntry);
};

export const getExtensionFile = (
    fileName: string,
    callback: (template: string) => void,
) => {
  chrome.storage.sync.get(fileName, (data) => {
    if (data[fileName]) {
      callback(data[fileName]);
    } else {
      loadExtensionFile(fileName, (content: string) => {
        const save = {};
        save[fileName] = content;
        chrome.storage.sync.set(save, () => callback(content));
      });
    }
  });
};
