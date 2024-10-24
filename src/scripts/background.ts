/* This is the background script, also known as the service worker. */
chrome.runtime.onInstalled.addListener(() => {
    console.log('Parcel Chrome extension installed!');
  });