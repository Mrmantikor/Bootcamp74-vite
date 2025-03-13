// https://65d763b227d9a3bc1d7aea8d.mockapi.io/students

import { getStudents, setStudent } from './studentsApi';
import { refs } from './refs';
import { getItemMarkUp } from './markup';
import { instance } from './basicLightbox';

refs.backdrop.classList.remove('is-hidden');
getStudents()
  .then(students => {
    if (!students.length) {
      refs.errorInfo.classList.remove('is-hidden');
      return;
    }

    const markup = students.map(student => getItemMarkUp(student)).join('');
    refs.galleryList.innerHTML = markup;
  })
  .catch(err => {
    refs.errorInfo.classList.remove('is-hidden');
    refs.errorInfo.classList.add('error');
    refs.errorInfo.textContent = 'something went wrong';
  })
  .finally(() => refs.backdrop.classList.add('is-hidden'));

refs.modalBtn.addEventListener('click', () => {
  instance.show();

  instance
    .element()
    .querySelector('.student-form')
    .addEventListener('submit', e => {
      e.preventDefault();

      const { firstName, lastName, age, country, city } = e.target.elements;

      const student = {
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
        country: country.value,
        city: city.value,
      };

      instance.close();
      refs.backdrop.classList.remove('is-hidden');

      setStudent(student)
        .then(student => {
          const markup = getItemMarkUp(student);
          refs.galleryList.insertAdjacentHTML('beforeend', markup);

          if (!refs.errorInfo.classList.contains('is-hidden')) {
            refs.errorInfo.classList.add('is-hidden');
          }
        })
        .catch(err => {
          refs.errorInfo.classList.remove('is-hidden');
          refs.errorInfo.classList.add('error');
          refs.errorInfo.textContent = 'something went wrong';
        })
        .finally(() => refs.backdrop.classList.add('is-hidden'));
    });
});

refs.galleryList.addEventListener('click', e => {
  const { target } = e;
  if (!target.classList.contains('js-delete-btn')) {
    return;
  }

  const item = target.closest('.photo-card');
  item.remove();

  console.log(target.dataset.id);
});
