export function createGalleryCards(arr) {
  return arr
    .map(
      img => `<div class="photo-card">
          <a class = 'img-link' href = '${img.largeImageURL}'>
        <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" /></a>
        <div class="info">
          <p class="info-item">
            <b>Likes </b>${img.likes}
          </p>
          <p class="info-item">
            <b>Views </b>${img.views}
          </p>
          <p class="info-item">
            <b>Comments </b>${img.comments}
          </p>
          <p class="info-item">
            <b>Downloads </b>${img.downloads}
          </p>
        </div>
      </div>`
    )
    .join('');
}

/* markup for Flip Card, doesn't work well with Simplelightbox */
//       .map(
//         img =>
//           `<div class="photo-card flip-card">
//         <a class="img-link" href="${img.largeImageURL}">
//   <div class="card-inner">
//       <div class="card-front">

//         <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy"
//       />
//     </div>
//     <div class="info card-back">
//       <p class="info-item">
//         <b>Likes </b>${img.likes}
//       </p>
//       <p class="info-item">
//         <b>Views </b>${img.views}
//       </p>
//       <p class="info-item">
//         <b>Comments </b>${img.comments}
//       </p>
//       <p class="info-item">
//         <b>Downloads </b>${img.downloads}
//       </p>
//     </div>
//   </div>
//   </a>
// </div>`
// )
