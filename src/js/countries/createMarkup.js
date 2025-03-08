export const oneCountryMarkup = function (array) {
  return array
    .map(
      el =>
        `<li>
    <div class="previewCard">
        <div class="countryFlag">
        <p class="countryName">${el.name}${el.flag}</p>
    </div>
    <p class="countryCapital"><b>Capital </b> ${el.capital}</p>
    <p class="countryPopulation"><b>Population: </b>${el.population}</p>
    <p class="countryArea"><b>Area: </b>${el.area}</p>
</li> `
    )
    .join('');
};
export const countriesMarkup = function (array) {
  return array
    .map(
      el =>
        `<li>
    <div class="countryFlag"></div>
    <p class="countryName">${el.name}${el.flag}</p>
 </li>`
    )
    .join('');
};
