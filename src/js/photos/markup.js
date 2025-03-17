export const createMarkup = photos => {
  return photos
    .map(
      ({ src, alt }) => `<li class="gallery__item">
   <a href="${src.large}"> <img src="${src.medium}" alt="${alt}" class="gallery-img"></a>
</li>`
    )
    .join('');
};
