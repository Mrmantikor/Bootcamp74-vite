/* empty css                      */(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const i=[{category:"Їжа",amount:100},{category:"Їжа",amount:25},{category:"Транспорт",amount:50},{category:"Їжа",amount:75},{category:"Розваги",amount:25},{category:"Розваги",amount:75},{category:"Аптека",amount:95}],l=o=>o.reduce((e,r)=>e+=r.amount,0),p=(o,e)=>o.filter(r=>r.category===e),d=o=>o.map(e=>e.category).filter((e,r,s)=>s.indexOf(e)===r),c={select:document.querySelector(".js-expenses"),paragraphResult:document.querySelector(".js-result")},f=(o,e)=>{const r=o.map(s=>`<option value="${s}">${s}</option>`).join("");e.innerHTML=r},g=d(i);f(g,c.select);const u=(o,e)=>{const r=p(o,e),s=l(r);c.paragraphResult.textContent=`total Expenses by Categorie ${e}: ${s}`},y=o=>{u(i,o.target.value)};c.select.addEventListener("change",y);u(i,c.select.value);
//# sourceMappingURL=module-09-02-vite.js.map
