// Створи функціонал пошуку країни за її назвою.
// - Є масив об'єктів, де кожен об'єкт це країна з своїм набором значень.
// - Створи функцію `onInputChange`, яка буде викликатися кожного разу коли користувач вводить щось в інпут.
// - Необхідно застосувати прийом `Debounce` на обробнику події, щоб запускати функцію `onInputChange` не одразу,
// а через 300мс після того, як користувач перестав вводити текст. Використовуй lodash.debounce.
// - Якщо користувач повністю очищає поле пошуку, то розмітка списку країн або інформації про країну зникає.

// - Якщо у масиві країн знайшлося більше однієї країни, під тестовим полем відображається список знайдених країн.
//  Кожен елемент списку складається з прапора та назви країни.

// html
//  <li>
//     <div class="countryFlag"></div>
//     <p class="countryName">Ukraine 🇺🇦</p>
// </li>;

// - Якщо результат запиту - це масив з однією країною, в інтерфейсі відображається розмітка картки з даними про
// країну: прапор, назва, столиця, населення.
// html
{
  /* <li>
    <div class="previewCard">
        <div class="countryFlag">
        <p class="countryName">Ukraine 🇺🇦</p>
    </div>
    <p class="countryCapital"><b>Capital </b> Kyiv</p>
    <p class="countryPopulation"><b>Population: </b>41 342 765</p>
    <p class="countryArea"><b>Area: </b>603.628</p>
</li> */
}

import debounce from 'lodash.debounce';
// - Якщо країни не було знайдено у масиві, то розмітка списку країн або інформації про країну зникає і показується
// повідомлення в `errorTextRef` про те що `""Oops, there is no country with that name"${}"`

import { countries } from './countries-list';
import { countriesMarkup, oneCountryMarkup } from './createMarkup';
const refs = {
  input: document.querySelector('.js-search-input'),
  countriesList: document.querySelector('.js-country-list'),
};

const onInputChange = function (event) {
  if (!event.target.value) {
    refs.countriesList.innerHTML = '';
    return;
  }
  const findCountries = countries.filter(el =>
    el.name.toLowerCase().includes(event.target.value.toLowerCase())
  );
  if (findCountries.length === 1) {
    const markup = oneCountryMarkup(findCountries);
    refs.countriesList.innerHTML = markup;
  } else if (findCountries.length > 1) {
    const markup = countriesMarkup(findCountries);
    refs.countriesList.innerHTML = markup;
  }
};
refs.input.addEventListener('input', debounce(onInputChange, 300));
