import * as basicLightbox from 'basiclightbox';

export const instance = basicLightbox.create(
  '',
  {
    onShow: () => {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';

      document.body.style.paddingRight = `${scrollBarWidth}px`
    },
    onClose: () => {
      document.body.style.overflow = 'visible';
      document.body.style.paddingRight = '';
    },
    className: 'backdrop',
  }
);


