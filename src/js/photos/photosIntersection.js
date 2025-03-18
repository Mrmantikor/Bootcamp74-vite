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

  try {
    const { photos, per_page, total_results } = await fetchPhotos(query, page);

    if (!photos.length) {
      refs.gallery.innerHTML = '';
      showMessage("We don't found photos matching your query", 'error');
      return;
    }

    totalPages = Math.ceil(total_results / per_page);

    showMessage('We found photos matching your query', 'success');

    const markup = createMarkup(photos);
    refs.gallery.innerHTML = markup;

    if (page < totalPages) {
      const lastItem = refs.gallery.children[refs.gallery.children.length - 1];
      observer.observe(lastItem);
    }

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

const options = {
  root: null,
  rootMargin: '100px',
  threshold: 1.0,
};

const callback = (entries, observer) => {
  entries.forEach(async entry => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);

      page++;

      refs.loader.classList.remove('is-hidden');

      try {
        const { photos } = await fetchPhotos(query, page);
        const markup = createMarkup(photos);
        refs.gallery.insertAdjacentHTML('beforeend', markup);
        lightbox.refresh();

        if (page < totalPages) {
          const lastItem =
            refs.gallery.children[refs.gallery.children.length - 1];
          observer.observe(lastItem);
        }
      } catch (error) {
        showMessage(`Something went wrong ${error.message}`, 'error');
      } finally {
        refs.loader.classList.add('is-hidden');
      }
    }
  });
};

const observer = new IntersectionObserver(callback, options);

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
    lightbox.refresh();
  } catch (error) {
    showMessage(`Something went wrong ${error.message}`, 'error');
  } finally {
    refs.loader.classList.add('is-hidden');
  }
});
