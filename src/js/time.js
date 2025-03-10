/*
Відображення поточної дати та часу з можливістю перемикання режимів.
Потрібно реалізувати інтерфейс, що дозволяє користувачеві перемикати між трьома режимами відображення: 
повний формат (дата + час), лише дата, лише час.

"full" – показує поточну дату і час.
"date" – показує лише дату.
"time" – показує лише час.

Час оновлюється щосекунди у режимах "time" та "full".
При виборі режиму "date", оновлення зупиняється, і показується тільки дата.


Для форматування дати використай цю функцію 
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
*/

import { convertMs, updateTime } from './helpers/updateTime';

let intervalId = null;
const currentDate = new Date();
const timeZone = (currentDate.getTimezoneOffset() / 60) * -1;
const timeZoneIntl = Intl.DateTimeFormat().resolvedOptions().timeZone;
const refs = {
  display: document.querySelector('.js-display'),
  btnWrapper: document.querySelector('.js-btn-wrapper'),
};

const handleClick = function (event) {
  if (event.target.nodeName !== 'BUTTON') return;
  clearInterval(intervalId);
  const { action } = event.target.dataset;
  if (action === 'date') {
    refs.display.textContent = getCurrentDate();
    return;
  }
  if (action === 'time') {
    intervalId = setInterval(() => {
      refs.display.textContent = getCurrentTime();
    }, 1000);
    return;
  }
  if (action === 'full') {
    intervalId = setInterval(() => {
      refs.display.textContent = getCurrentFullDate();
    }, 1000);
  }
};

const getCustomCurrentTime = function () {
  const { hours, minutes, seconds } = updateTime(
    convertMs(Date.now()),
    timeZone
  );
  return `${hours}:${minutes}:${seconds}`;
};

const getCurrentTime = function () {
  return new Intl.DateTimeFormat('uk-UA', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: timeZoneIntl,
  }).format(Date.now());
};

const getCurrentDate = function () {
  return new Intl.DateTimeFormat('uk-UA', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(Date.now());
};

const getCurrentFullDate = function () {
  return `${getCurrentDate()} ${getCurrentTime()}`;
};

refs.btnWrapper.addEventListener('click', handleClick);

const loadPage = function () {
  intervalId = setInterval(() => {
    refs.display.textContent = getCustomCurrentTime();
  }, 1000);
};
loadPage();
