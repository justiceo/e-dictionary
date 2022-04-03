export class Message {
  type: MessageType;
  value: any;
}

export enum MessageType {
    Install = 1
}

export const loadExtensionFile = (
    fileName: string,
    callback: (fileContents: string) => void) => {
  const readFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = function(e) { // "this" is reader.onloadend.
      callback(this.result as string);
    };
    reader.readAsText(file);
  };
  const readFileEntry = (e: FileEntry) => e.file(readFile);
  const readDirEntry = (dirEntry: DirectoryEntry) => dirEntry.getFile(fileName, {}, readFileEntry);
  chrome.runtime.getPackageDirectoryEntry(readDirEntry);
};

export const getExtensionFile = (
    fileName: string,
    callback: (template: string) => void) => {
  chrome.storage.sync.get(fileName, (data) => {
    if (data[fileName]) {
      callback(data[fileName]);
    } else {
      loadExtensionFile(fileName, (content: string) => {
        const save: any = {};
        save[fileName] = content;
        chrome.storage.sync.set(save, () => callback(content));
      });
    }
  });
};
