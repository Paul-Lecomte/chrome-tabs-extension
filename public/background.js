chrome.runtime.onInstalled.addListener(() => {
    console.log("Tab Organizer Extension Installed");
});

chrome.action.onClicked.addListener(() => {
    console.log("Extension icon clicked");
});