'use strict';

function setAlarm(event) {
  let minutes = parseFloat(event.target.value);
  chrome.browserAction.setBadgeText({text: 'ON'});
  chrome.alarms.create("timer", {delayInMinutes: minutes});
  chrome.storage.sync.set({minutes: minutes});
  chrome.notifications.create({type: 'basic', iconUrl: 'icon32.png', title: 'Mindflow', message: 'Timer Started'});
  window.close();
}

function clearAlarm() {
  chrome.browserAction.setBadgeText({text: ''});
  chrome.alarms.clearAll();
  window.close();
}

// document.getElementById('timeRemaining').innerHTML = chrome.alarms.get("timer", (alarm) => delayInMinutes);

document.getElementById('sampleMinute').addEventListener('click', setAlarm);
document.getElementById('quickFocus').addEventListener('click', setAlarm);
document.getElementById('deepFocus').addEventListener('click', setAlarm);
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);