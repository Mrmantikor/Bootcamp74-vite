import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const l=function(t,e){return Object.keys(t).reduce((o,n)=>({...o,[n]:String(n==="hours"?t[n]+e:t[n]).padStart(2,"0")}),{})};function f(t){const s=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:i,minutes:d,seconds:m}}let u=null;const y=new Date,p=y.getTimezoneOffset()/60*-1,h=Intl.DateTimeFormat().resolvedOptions().timeZone,r={display:document.querySelector(".js-display"),btnWrapper:document.querySelector(".js-btn-wrapper")},C=function(t){if(t.target.nodeName!=="BUTTON")return;clearInterval(u);const{action:e}=t.target.dataset;if(e==="date"){r.display.textContent=c();return}if(e==="time"){u=setInterval(()=>{r.display.textContent=a()},1e3);return}e==="full"&&(u=setInterval(()=>{r.display.textContent=g()},1e3))},D=function(){const{hours:t,minutes:e,seconds:o}=l(f(Date.now()),p);return`${t}:${e}:${o}`},a=function(){return new Intl.DateTimeFormat("uk-UA",{hour:"numeric",minute:"numeric",second:"numeric",timeZone:h}).format(Date.now())},c=function(){return new Intl.DateTimeFormat("uk-UA",{year:"numeric",month:"numeric",day:"numeric"}).format(Date.now())},g=function(){return`${c()} ${a()}`};r.btnWrapper.addEventListener("click",C);const I=function(){u=setInterval(()=>{r.display.textContent=D()},1e3)};I();
//# sourceMappingURL=time.js.map
