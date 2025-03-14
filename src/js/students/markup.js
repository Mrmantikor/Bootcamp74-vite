import { format } from 'date-fns';

export const getItemMarkUp = ({
  avatar,
  firstName,
  id,
  age,
  country,
  city,
  lastName,
}) => {
  const dateOfBirth = format(new Date(age), 'dd MMMM yy');

  return `<li class="photo-card" data-id=${id} >
            <img
              src="${avatar}"
              alt="${firstName}"
            />
            <button type="button" class="delete-btn js-delete-btn">&#9988;</button>

            <div class="wrapper">
              <div class="info" >
              <b class="student-info">${firstName}</b>
              <b class="student-info">${lastName}</b>
              <b class="student-info">${dateOfBirth}</b>
              </div>

              <div class="info">
              <b class="student-info">${country}</b>
              <b class="student-info">${city}</b>
              </div>
            </div>
          </li>`;
};
export const getItemMarkUpDetails = ({
                                avatar,
                                firstName,
                                id,
                                age,
                                country,
                                city,
                                lastName,
                                rating
                              }) => {
  const dateOfBirth = format(new Date(age), 'dd MMMM yy');

  return `<div class="photo-card" data-id=${id} >
            <img
              src="${avatar}"
              alt="${firstName}"
            />

            <div class="wrapper">
              <div class="info" >
              <b class="student-info">${firstName}</b>
              <b class="student-info">${lastName}</b>
              <b class="student-info">${dateOfBirth}</b>
              </div>

              <div class="info">
              <b class="student-info">${country}</b>
              <b class="student-info">${city}</b>
              </div>
              <div class="info"><b class="student-info">rating:${rating}</b></div>
            </div>
          </div>`;
};
