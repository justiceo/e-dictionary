import { Logger } from "../logger";
/*
 * Set up context menu (right-click menu) for different conexts.
 * See reference https://developer.chrome.com/docs/extensions/reference/contextMenus/#method-create.
 * Max number of browser_action menu items: 6 - https://developer.chrome.com/docs/extensions/reference/contextMenus/#property-ACTION_MENU_TOP_LEVEL_LIMIT
 */

const log = new Logger("context-menu");

interface MenuItem {
    menu: chrome.contextMenus.CreateProperties,
    handler:
        (info: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab) => void,
}

const browserActionContextMenu: MenuItem[] = [
  {
    menu: {
      id: "cm-menu-1",
      title: "Menu 1",
      visible: true,
      contexts: ["action"],
    },
    handler: (info, tab) => {
      log.debug("got the data", info, tab);
    },
  },
  {
    menu: {
      id: "cm-menu-2",
      title: "Menu 2",
      visible: true,
      contexts: ["action"],
    },
    handler: (info, tab) => {
      log.debug("got the data", info, tab);
    },
  },
];

chrome.contextMenus.removeAll();
browserActionContextMenu.forEach(
    (item) => chrome.contextMenus.create(item.menu),
);
chrome.contextMenus.onClicked.addListener(
    (info: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab) => {
      browserActionContextMenu
          .find((item) => item.menu.id === info.menuItemId)
          .handler(info, tab);
    },
);
