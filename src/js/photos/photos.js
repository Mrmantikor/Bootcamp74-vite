import { createMarkup } from './markup';
import { fetchPhotos } from './pexelsAPI';
import { refs } from './refs';
import iziToast from 'izitoast';
import Simplelightbox from 'simplelightbox';

const lightbox = new Simplelightbox('.js-gallery a');

const onSubmit = async function (e) {
  e.preventDefault();
  const query = e.target.elements['query'].value.trim();
  if (query === '') {
    showMessage('Input cannot be empty', 'error');
    return;
  }
  refs.loader.classList.remove('is-hidden');
  try {
    const { photos } = await fetchPhotos(query);
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
