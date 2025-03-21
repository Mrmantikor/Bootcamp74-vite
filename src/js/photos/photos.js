import { createMarkup } from './markup';
import { fetchPhotos } from './pexelsAPI';
import { refs } from './refs';
import iziToast from 'izitoast';
import Simplelightbox from 'simplelightbox';

const lightbox = new Simplelightbox('.js-gallery a');
let page = 1;
let query = '';
let totalPages = 0;

const onSubmit = async function (e) {
  e.preventDefault();
  query = e.target.elements['query'].value.trim();
  page = 1;

  e.target.reset();

  if (query === '') {
    showMessage('Input cannot be empty', 'error');
    return;
  }
  refs.loader.classList.remove('is-hidden');
  refs.loadmore.classList.add('is-hidden');
  try {
    const { photos, per_page, total_results } = await fetchPhotos(query, page);

    if (!photos.length) {
      refs.loadmore.classList.add('is-hidden');
      refs.gallery.innerHTML = '';
      showMessage("We don't found photos matching your query", 'error');
      return;
    }

    totalPages = Math.ceil(total_results / per_page);
    if (page < totalPages) {
      refs.loadmore.classList.remove('is-hidden');
    }

    showMessage('We found photos matching your query', 'success');

    const markup = createMarkup(photos);
    refs.gallery.innerHTML = markup;

    lightbox.refresh();
  } catch (error) {
    showMessage(`Something went wrong ${error.message}`, 'error');
  } finally {
    refs.loader.classList.add('is-hidden');
  }
};

refs.form.addEventListener('submit', onSubmit);

const showMessage = function (message, type = 'info') {
  iziToast[type]({
    message,
    position: 'topRight',
  });
};
refs.loadmore.addEventListener('click', async () => {
  page++;

  if (page === totalPages) {
    refs.loadmore.classList.add('is-hidden');
  }

  refs.loader.classList.remove('is-hidden');

  try {
    const { photos } = await fetchPhotos(query, page);
    const markup = createMarkup(photos);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
    const itemHeight = refs.gallery.children[0].getBoundingClientRect().height;

    // window.scrollBy({ top: itemHeight * 2, behavior: 'smooth', });

    smoothScrollBy(itemHeight * 2, 1000);

    lightbox.refresh();
  } catch (error) {
    showMessage(`Something went wrong ${error.message}`, 'error');
  } finally {
    refs.loader.classList.add('is-hidden');
  }
});

const smoothScrollBy = (targetScroll, duration) => {
  const start = window.scrollY;
  const startTime = performance.now();

  const animateScroll = currentTime => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

    const newPosition = start + targetScroll * easeOutCubic(progress);
    window.scrollTo(0, newPosition);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

// const scrollSmoothly = () => {
//   const firstCard = document.querySelector('.gallery-item');
//   if (!firstCard) return;

//   const cardHeight = firstCard.getBoundingClientRect().height;
//   smoothScrollBy(cardHeight * 2, 600);
// };
