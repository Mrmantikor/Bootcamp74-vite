import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as m,b as f}from"./assets/vendor-dg5xAYJ8.js";const y=()=>fetch("https://65d763b227d9a3bc1d7aea8d.mockapi.io/students").then(t=>{if(!t.ok)throw new Error(t.message);return t.json()}),p=t=>fetch("https://65d763b227d9a3bc1d7aea8d.mockapi.io/students",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then(s=>{if(!s.ok)throw new Error(s.message);return s.json()}),e={galleryList:document.querySelector(".gallery"),backdrop:document.querySelector(".backdrop"),errorInfo:document.querySelector(".empty-students"),modalBtn:document.querySelector(".js-modal-btn")},c=({avatar:t,firstName:s,id:r,age:o,country:a,city:d,lastName:i})=>{const n=m(new Date(o),"dd MMMM yy");return`<li class="photo-card">
            <img
              src="${t}"
              alt="${s}"
            />
            <button data-id=${r} type="button" class="delete-btn js-delete-btn">&#9988;</button>
    
            <div class="wrapper">
              <div class="info" >
              <b class="student-info">${s}</b>
              <b class="student-info">${i}</b>
              <b class="student-info">${n}</b>
              </div>
    
              <div class="info">
              <b class="student-info">${a}</b>
              <b class="student-info">${d}</b>
              </div>
            </div>
          </li>`},l=f.create(`
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
`,{onShow:()=>{document.body.style.overflow="hidden",e.galleryList.style.opacity=.4},onClose:()=>{document.body.style.overflow="visible",e.galleryList.style.opacity=1}});e.backdrop.classList.remove("is-hidden");y().then(t=>{if(!t.length){e.errorInfo.classList.remove("is-hidden");return}const s=t.map(r=>c(r)).join("");e.galleryList.innerHTML=s}).catch(t=>{e.errorInfo.classList.remove("is-hidden"),e.errorInfo.classList.add("error"),e.errorInfo.textContent="something went wrong"}).finally(()=>e.backdrop.classList.add("is-hidden"));e.modalBtn.addEventListener("click",()=>{l.show(),l.element().querySelector(".student-form").addEventListener("submit",t=>{t.preventDefault();const{firstName:s,lastName:r,age:o,country:a,city:d}=t.target.elements,i={firstName:s.value,lastName:r.value,age:o.value,country:a.value,city:d.value};l.close(),e.backdrop.classList.remove("is-hidden"),p(i).then(n=>{const u=c(n);e.galleryList.insertAdjacentHTML("beforeend",u),e.errorInfo.classList.contains("is-hidden")||e.errorInfo.classList.add("is-hidden")}).catch(n=>{e.errorInfo.classList.remove("is-hidden"),e.errorInfo.classList.add("error"),e.errorInfo.textContent="something went wrong"}).finally(()=>e.backdrop.classList.add("is-hidden"))})});e.galleryList.addEventListener("click",t=>{const{target:s}=t;if(!s.classList.contains("js-delete-btn"))return;s.closest(".photo-card").remove(),console.log(s.dataset.id)});
//# sourceMappingURL=students.js.map
