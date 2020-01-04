'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.removeAll();
  chrome.contextMenus.create({
    title: "Add to MyData",
    contexts: ["selection"],
    onclick: function(selectedObject) {
      const urlParts = selectedObject.pageUrl.split('/');
      const url = urlParts[0] + '//' + urlParts[2];
      chrome.tabs.create({url: 'https://mydata.webtree.org/data/' + selectedObject.selectionText + '/add-usage?url=' + url});
    }
  });
});
