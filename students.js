import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f,b as y}from"./assets/vendor-BjB2DiSq.js";const v=()=>fetch("https://65d763b227d9a3bc1d7aea8d.mockapi.io/students").then(e=>{if(!e.ok)throw new Error(e.message);return e.json()}),g=e=>fetch("https://65d763b227d9a3bc1d7aea8d.mockapi.io/students",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(t=>{if(!t.ok)throw new Error(t.message);return t.json()}),b=e=>fetch(`https://65d763b227d9a3bc1d7aea8d.mockapi.io/students/${e}`,{method:"DELETE"}).then(t=>{if(!t.ok)throw new Error(t.message);return t.json()}),L=e=>fetch(`https://65d763b227d9a3bc1d7aea8d.mockapi.io/students/${e}`).then(t=>{if(!t.ok)throw new Error(t.message);return t.json()}),s={galleryList:document.querySelector(".gallery"),backdrop:document.querySelector(".backdrop"),errorInfo:document.querySelector(".empty-students"),modalBtn:document.querySelector(".js-modal-btn")},h=({avatar:e,firstName:t,id:o,age:r,country:a,city:i,lastName:l})=>{const c=f(new Date(r),"dd MMMM yy");return`<li class="photo-card" data-id=${o} >
            <img
              src="${e}"
              alt="${t}"
            />
            <button type="button" class="delete-btn js-delete-btn">&#9988;</button>

            <div class="wrapper">
              <div class="info" >
              <b class="student-info">${t}</b>
              <b class="student-info">${l}</b>
              <b class="student-info">${c}</b>
              </div>

              <div class="info">
              <b class="student-info">${a}</b>
              <b class="student-info">${i}</b>
              </div>
            </div>
          </li>`},w=({avatar:e,firstName:t,id:o,age:r,country:a,city:i,lastName:l,rating:c})=>{const u=f(new Date(r),"dd MMMM yy");return`<div class="photo-card" data-id=${o} >
            <img
              src="${e}"
              alt="${t}"
            />
             <button type="button" class="delete-btn js-delete-btn">&#9988;</button>

            <div class="wrapper">
              <div class="info" >
              <b class="student-info">${t}</b>
              <b class="student-info">${l}</b>
              <b class="student-info">${u}</b>
              </div>

              <div class="info">
              <b class="student-info">${a}</b>
              <b class="student-info">${i}</b>
              </div>
              <div class="info"><b class="student-info">rating:${c}</b></div>
            </div>
          </div>`},n=y.create("",{onShow:()=>{const e=window.innerWidth-document.documentElement.clientWidth;document.body.style.overflow="hidden",document.body.style.paddingRight=`${e}px`},onClose:()=>{document.body.style.overflow="visible",document.body.style.paddingRight=""},className:"backdrop"}),d={spinner:'<span class="loader"></span>',form:`
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
`,error:`<p class="empty-students error">
          We cannot receive any info about the student...
        </p>`};n.element().innerHTML=d.spinner;n.show();v().then(e=>{if(!e.length){s.errorInfo.classList.remove("is-hidden");return}s.galleryList.innerHTML=e.map(h).join("")}).catch(m).finally(()=>n.close());s.modalBtn.addEventListener("click",()=>{n.show(),n.element().innerHTML=d.form,n.element().querySelector(".student-form").addEventListener("submit",e=>{e.preventDefault();const{firstName:t,lastName:o,age:r,country:a,city:i}=e.target.elements,l={firstName:t.value,lastName:o.value,age:r.value,country:a.value,city:i.value};n.element().innerHTML=d.spinner,g(l).then(c=>{const u=h(c);s.galleryList.insertAdjacentHTML("beforeend",u),s.errorInfo.classList.contains("is-hidden")||s.errorInfo.classList.add("is-hidden")}).catch(m).finally(()=>n.close())})});s.galleryList.addEventListener("click",e=>{if(e.target.nodeName==="UL")return;const t=e.target.closest(".photo-card");if(n.element().innerHTML=d.spinner,n.show(),e.target.classList.contains("js-delete-btn")){b(t.dataset.id).then(()=>{t.remove()}).catch(m).finally(()=>n.close());return}L(t.dataset.id).then(o=>{n.element().innerHTML=w(o),n.element().addEventListener("click",r=>{if(!r.target.classList.contains("js-delete-btn"))return;const a=r.target.closest(".photo-card");n.element().innerHTML=d.spinner,M(a)})}).catch(p)});function M(e){b(e.dataset.id).then(()=>{const t=[...s.galleryList.children].find(o=>o.dataset.id===e.dataset.id);t&&t.remove()}).catch(p).finally(()=>n.close())}function m(e){s.errorInfo.classList.remove("is-hidden"),s.errorInfo.classList.add("error"),s.errorInfo.textContent=`something went wrong. ${e.message}`}function p(e){n.element().innerHTML=d.error,setTimeout(()=>n.close(),1500)}
//# sourceMappingURL=students.js.map
