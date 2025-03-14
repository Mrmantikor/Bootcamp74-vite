// https://65d763b227d9a3bc1d7aea8d.mockapi.io/students

import { getStudents, setStudent, deleteStudent, getStudentByID } from './studentsApi';
import { refs } from './refs';
import { getItemMarkUp, getItemMarkUpDetails } from './markup';
import { instance } from './basicLightbox';
import { modalTextContent } from './modalTextContent'

instance.element().innerHTML = modalTextContent['spinner'];
instance.show();
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
  .finally(() => instance.close());

refs.modalBtn.addEventListener('click', () => {
  instance.show();
  instance.element().innerHTML = modalTextContent['form'];
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

      instance.element().innerHTML = modalTextContent['spinner'];

      setStudent(student)
        .then(student => {
          const markup = getItemMarkUp(student);
          refs.galleryList.insertAdjacentHTML('beforeend', markup);

          if (!refs.errorInfo.classList.contains('is-hidden')) {
            refs.errorInfo.classList.add('is-hidden');
          }
        })
        .catch(err => {
          console.log(err);
          refs.errorInfo.classList.remove('is-hidden');
          refs.errorInfo.classList.add('error');
          refs.errorInfo.textContent = `something went wrong. ${err.message}`;
        })
        .finally(() => instance.close());
    });
});

refs.galleryList.addEventListener('click', e => {
  if(e.target.nodeName === "UL") return;
  const item = e.target.closest('.photo-card');

  instance.element().innerHTML = modalTextContent['spinner'];
  instance.show()

  if (e.target.classList.contains('js-delete-btn')) {
    deleteStudent(item.dataset.id)
      .then(() => {
        item.remove();
      })
      .catch(err => {
        refs.errorInfo.classList.remove('is-hidden');
        refs.errorInfo.classList.add('error');
        refs.errorInfo.textContent = 'something went wrong';
      })
      .finally(()=> instance.close());
    return;
  }

  getStudentByID(item.dataset.id).then(data => instance.element().innerHTML = getItemMarkUpDetails(data))
    .catch(err => {
      instance.element().innerHTML = `<p class="empty-students error">
          We cannot receive any info about the student...
        </p>`
      setTimeout(() => instance.close(), 1500)
    })
});
