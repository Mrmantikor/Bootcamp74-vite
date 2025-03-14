import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as m,b as h}from"./assets/vendor-dg5xAYJ8.js";const b=()=>fetch("https://65d763b227d9a3bc1d7aea8d.mockapi.io/students").then(e=>{if(!e.ok)throw new Error(e.message);return e.json()}),p=e=>fetch("https://65d763b227d9a3bc1d7aea8d.mockapi.io/students",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(t=>{if(!t.ok)throw new Error(t.message);return t.json()}),y=e=>fetch(`https://65d763b227d9a3bc1d7aea8d.mockapi.io/students/${e}`,{method:"DELETE"}).then(t=>{if(!t.ok)throw new Error(t.message);return t.json()}),g=e=>fetch(`https://65d763b227d9a3bc1d7aea8d.mockapi.io/students/${e}`).then(t=>{if(!t.ok)throw new Error(t.message);return t.json()}),n={galleryList:document.querySelector(".gallery"),backdrop:document.querySelector(".backdrop"),errorInfo:document.querySelector(".empty-students"),modalBtn:document.querySelector(".js-modal-btn")},f=({avatar:e,firstName:t,id:r,age:a,country:d,city:i,lastName:c})=>{const o=m(new Date(a),"dd MMMM yy");return`<li class="photo-card" data-id=${r} >
            <img
              src="${e}"
              alt="${t}"
            />
            <button type="button" class="delete-btn js-delete-btn">&#9988;</button>

            <div class="wrapper">
              <div class="info" >
              <b class="student-info">${t}</b>
              <b class="student-info">${c}</b>
              <b class="student-info">${o}</b>
              </div>

              <div class="info">
              <b class="student-info">${d}</b>
              <b class="student-info">${i}</b>
              </div>
            </div>
          </li>`},v=({avatar:e,firstName:t,id:r,age:a,country:d,city:i,lastName:c,rating:o})=>{const u=m(new Date(a),"dd MMMM yy");return`<div class="photo-card" data-id=${r} >
            <img
              src="${e}"
              alt="${t}"
            />

            <div class="wrapper">
              <div class="info" >
              <b class="student-info">${t}</b>
              <b class="student-info">${c}</b>
              <b class="student-info">${u}</b>
              </div>

              <div class="info">
              <b class="student-info">${d}</b>
              <b class="student-info">${i}</b>
              </div>
              <div class="info"><b class="student-info">rating:${o}</b></div>
            </div>
          </div>`},s=h.create("",{onShow:()=>{const e=window.innerWidth-document.documentElement.clientWidth;document.body.style.overflow="hidden",document.body.style.paddingRight=`${e}px`},onClose:()=>{document.body.style.overflow="visible",document.body.style.paddingRight=""},className:"backdrop"}),l={spinner:'<span class="loader"></span>',form:`
	<div class="modal">
    <form class="student-form">
      <input name="firstName" placeholder="firstName*" type="text" value="mango" required />
      <input name="lastName" placeholder="lastName*" type="text" value="mango" required />
      <input name="age" placeholder="Age*" type="text" value="01.01.1990" required />
      <input name="country" placeholder="Country*" type="text" value="Spain" required />
      <input name="city" placeholder="City*" type="text" value="Barcelona" required />

      <button class="add-student-btn">Add Student</button>
    </form>
    </div>
`};s.element().innerHTML=l.spinner;s.show();b().then(e=>{if(!e.length){n.errorInfo.classList.remove("is-hidden");return}const t=e.map(r=>f(r)).join("");n.galleryList.innerHTML=t}).catch(e=>{n.errorInfo.classList.remove("is-hidden"),n.errorInfo.classList.add("error"),n.errorInfo.textContent="something went wrong"}).finally(()=>s.close());n.modalBtn.addEventListener("click",()=>{s.show(),s.element().innerHTML=l.form,s.element().querySelector(".student-form").addEventListener("submit",e=>{e.preventDefault();const{firstName:t,lastName:r,age:a,country:d,city:i}=e.target.elements,c={firstName:t.value,lastName:r.value,age:a.value,country:d.value,city:i.value};s.element().innerHTML=l.spinner,p(c).then(o=>{const u=f(o);n.galleryList.insertAdjacentHTML("beforeend",u),n.errorInfo.classList.contains("is-hidden")||n.errorInfo.classList.add("is-hidden")}).catch(o=>{console.log(o),n.errorInfo.classList.remove("is-hidden"),n.errorInfo.classList.add("error"),n.errorInfo.textContent=`something went wrong. ${o.message}`}).finally(()=>s.close())})});n.galleryList.addEventListener("click",e=>{if(e.target.nodeName==="UL")return;const t=e.target.closest(".photo-card");if(s.element().innerHTML=l.spinner,s.show(),e.target.classList.contains("js-delete-btn")){y(t.dataset.id).then(()=>{t.remove()}).catch(r=>{n.errorInfo.classList.remove("is-hidden"),n.errorInfo.classList.add("error"),n.errorInfo.textContent="something went wrong"}).finally(()=>s.close());return}g(t.dataset.id).then(r=>s.element().innerHTML=v(r)).catch(r=>{s.element().innerHTML=`<p class="empty-students error">
          We cannot receive any info about the student...
        </p>`,setTimeout(()=>s.close(),1500)})});
//# sourceMappingURL=students.js.map
