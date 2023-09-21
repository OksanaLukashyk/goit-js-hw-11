export function createGalleryCards(arr) {
  return arr
    .map(
      img => `<div class="photo-card">
    <a class = 'img-link' href = '${img.largeImageURL}'>
  <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes ${img.likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${img.views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${img.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${img.downloads}</b>
    </p>
  </div>
</div>`
    )
    .join('');
}
