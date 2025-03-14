import * as basicLightbox from 'basiclightbox';

export const instance = basicLightbox.create(
  '',
  {
    onShow: () => {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      console.log(scrollBarWidth);
      document.body.style.paddingRight = `${scrollBarWidth}px`
    },
    onClose: () => {
      document.body.style.overflow = 'visible';
      document.body.style.paddingRight = '';
    },
    className: 'backdrop',
  }
);


// `
// 	<div class="modal">
//     <form class="student-form">
//       <input name="firstName" placeholder="firstName*" type="text" required />
//       <input name="lastName" placeholder="lastName*" type="text" required />
//       <input name="age" placeholder="Age*" type="text" required />
//       <input name="country" placeholder="Country*" type="text" required />
//       <input name="city" placeholder="City*" type="text" required />

//       <button class="add-student-btn">Add Student</button>
//     </form>
//     </div>
// `