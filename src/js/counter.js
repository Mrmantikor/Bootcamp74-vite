// - Використовуй html з файлу [counter.html](./counter.html)
// - Отримай всі кнопки з атрибутом data-action
// - До відповідної кнопки, з відповідним data-action застосовувуй свій функціонал:
// - При кліку на кнопку data-action="save" зберігай значення counter у local storage
// - При кліку на кнопку data-action="clear-save" видаляй збережене значення counter з local storage
// - При кліку на кнопку data-action="decrease" зменшуй counter на 1
// - При кліку на кнопку data-action="increase" збільшуй counter на 1

import { getItemLS, removeItemLS, saveLS } from './helpers/localStorage';

// - При кліку на кнопку data-action="reset" роби counter = 0
const refs = {
  buttons: document.querySelectorAll('[data-action]'),
  value: document.querySelector('.js-counter-value'),
  controls: document.querySelector('.js-counter-controls'),
  saveClear: document.querySelector('.js-save'),
};

const LOCAL_STORAGE_KEY = 'counterValue';
let counterValue = 0;

const loadPage = function (event) {
  const persistedValue = getItemLS(LOCAL_STORAGE_KEY) || 0;
  counterValue = persistedValue;
  refs.value.textContent = persistedValue;
};

loadPage();
const onDataActionBtn = function (event) {
  if (event.target.dataset.action === 'increase') {
    counterValue += 1;
    refs.value.textContent = counterValue;
  } else if (event.target.dataset.action === 'decrease') {
    counterValue -= 1;
    refs.value.textContent = counterValue;
  } else if (event.target.dataset.action === 'reset') {
    counterValue = 0;
    refs.value.textContent = counterValue;
  }
};
const onSaveClearBtn = function (event) {
  if (event.target.dataset.action === 'save') {
    saveLS(LOCAL_STORAGE_KEY, counterValue);
  } else if (event.target.dataset.action === 'clear-save') {
    removeItemLS(LOCAL_STORAGE_KEY);
  }
};

refs.controls.addEventListener('click', onDataActionBtn);
refs.saveClear.addEventListener('click', onSaveClearBtn);
