import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f,b as h}from"./assets/vendor-dg5xAYJ8.js";const p=()=>fetch("https://65d763b227d9a3bc1d7aea8d.mockapi.io/students").then(e=>{if(!e.ok)throw new Error(e.message);return e.json()}),b=e=>fetch("https://65d763b227d9a3bc1d7aea8d.mockapi.io/students",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(t=>{if(!t.ok)throw new Error(t.message);return t.json()}),y=e=>fetch(`https://65d763b227d9a3bc1d7aea8d.mockapi.io/students/${e}`,{method:"DELETE"}).then(t=>{if(!t.ok)throw new Error(t.message);return t.json()}),n={galleryList:document.querySelector(".gallery"),backdrop:document.querySelector(".backdrop"),errorInfo:document.querySelector(".empty-students"),modalBtn:document.querySelector(".js-modal-btn")},m=({avatar:e,firstName:t,id:r,age:a,country:d,city:i,lastName:c})=>{const s=f(new Date(a),"dd MMMM yy");return`<li class="photo-card">
            <img
              src="${e}"
              alt="${t}"
            />
            <button data-id=${r} type="button" class="delete-btn js-delete-btn">&#9988;</button>
    
            <div class="wrapper">
              <div class="info" >
              <b class="student-info">${t}</b>
              <b class="student-info">${c}</b>
              <b class="student-info">${s}</b>
              </div>
    
              <div class="info">
              <b class="student-info">${d}</b>
              <b class="student-info">${i}</b>
              </div>
            </div>
          </li>`},o=h.create("",{onShow:()=>{const e=window.innerWidth-document.documentElement.clientWidth;document.body.style.overflow="hidden",console.log(e),document.body.style.paddingRight=`${e}px`},onClose:()=>{document.body.style.overflow="visible",document.body.style.paddingRight=""},className:"backdrop"}),l={spinner:'<span class="loader"></span>',form:`
	<div class="modal">
    <form class="student-form">
      <input name="firstName" placeholder="firstName*" type="text" required />
      <input name="lastName" placeholder="lastName*" type="text" required />
      <input name="age" placeholder="Age*" type="text" required />
      <input name="country" placeholder="Country*" type="text" required />
      <input name="city" placeholder="City*" type="text" required />

      <button class="add-student-btn">Add Student</button>
    </form>
    </div>
`};o.element().innerHTML=l.spinner;o.show();p().then(e=>{if(!e.length){n.errorInfo.classList.remove("is-hidden");return}const t=e.map(r=>m(r)).join("");n.galleryList.innerHTML=t}).catch(e=>{n.errorInfo.classList.remove("is-hidden"),n.errorInfo.classList.add("error"),n.errorInfo.textContent="something went wrong"}).finally(()=>o.close());n.modalBtn.addEventListener("click",()=>{o.show(),o.element().innerHTML=l.form,o.element().querySelector(".student-form").addEventListener("submit",e=>{e.preventDefault();const{firstName:t,lastName:r,age:a,country:d,city:i}=e.target.elements,c={firstName:t.value,lastName:r.value,age:a.value,country:d.value,city:i.value};o.element().innerHTML=l.spinner,b(c).then(s=>{const u=m(s);n.galleryList.insertAdjacentHTML("beforeend",u),n.errorInfo.classList.contains("is-hidden")||n.errorInfo.classList.add("is-hidden")}).catch(s=>{console.log(s),n.errorInfo.classList.remove("is-hidden"),n.errorInfo.classList.add("error"),n.errorInfo.textContent=`something went wrong. ${s.message}`}).finally(()=>o.close())})});n.galleryList.addEventListener("click",e=>{const{target:t}=e;if(!t.classList.contains("js-delete-btn"))return;const r=t.closest(".photo-card");y(t.dataset.id).then(()=>{r.remove()}).catch(a=>{n.errorInfo.classList.remove("is-hidden"),n.errorInfo.classList.add("error"),n.errorInfo.textContent="something went wrong"})});
//# sourceMappingURL=students.js.map
