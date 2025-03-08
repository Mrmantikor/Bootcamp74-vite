import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{d as o}from"./assets/vendor-BH5Oeftf.js";const r=[{name:"Ukraine",capital:"Kyiv",population:"41 342 465",area:"603.628",flag:"🇺🇦"},{name:"Spain",capital:"Madrid",population:"47 450 795",area:"505.990",flag:"🇪🇸"},{name:"Philippines",capital:"Manila",population:"109 035 343",area:"300.000",flag:"🇵🇭"},{name:"Angola",capital:"Luanda",population:"31 127 674",area:"1.246.700",flag:"🇦🇴"},{name:"Gibraltar",capital:"Gibraltar",population:"34 003",area:"6.8",flag:"🇬🇮"}],e=function(n){return n.map(a=>`<li>
    <div class="previewCard">
        <div class="countryFlag">
        <p class="countryName">${a.name}${a.flag}</p>
    </div>
    <p class="countryCapital"><b>Capital </b> ${a.capital}</p>
    <p class="countryPopulation"><b>Population: </b>${a.population}</p>
    <p class="countryArea"><b>Area: </b>${a.area}</p>
</li> `).join("")},p=function(n){return n.map(a=>`<li>
    <div class="countryFlag"></div>
    <p class="countryName">${a.name}${a.flag}</p>
 </li>`).join("")},i={input:document.querySelector(".js-search-input"),countriesList:document.querySelector(".js-country-list")},u=function(n){if(!n.target.value){i.countriesList.innerHTML="";return}const a=r.filter(t=>t.name.toLowerCase().includes(n.target.value.toLowerCase()));if(a.length===1){const t=e(a);i.countriesList.innerHTML=t}else if(a.length>1){const t=p(a);i.countriesList.innerHTML=t}};i.input.addEventListener("input",o(u,300));
//# sourceMappingURL=counters-list.js.map
