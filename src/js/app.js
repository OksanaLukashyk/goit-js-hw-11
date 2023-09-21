import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { formEl, galleryEl, loadMoreBtn } from './refs';
import { PixabayAPI } from './pixabay-api';
import { createGalleryCards } from './render-gallery';
import {
  showMoreBtn,
  hideMoreBtn,
  showLoader,
  hideLoader,
  handleSearchError,
  handleSearchSuccess,
  handleEmptyInputError,
  handleLastPageMsg,
  smoothScroll,
} from './utils';

const pixabayApi = new PixabayAPI(40);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  enableKeyboard: true,
});

formEl.addEventListener('submit', handleSearchQuery);
loadMoreBtn.addEventListener('click', handleLoadMore);

async function handleSearchQuery(evt) {
  evt.preventDefault();
  // const searchQuery = evt.currentTarget.elements.searchQuery.value.trim();
  const searchQuery = evt.currentTarget.elements['searchQuery'].value.trim();
  pixabayApi.page = 1;
  pixabayApi.q = searchQuery;
  galleryEl.innerHTML = '';

  if (!searchQuery) {
    hideMoreBtn();
    return handleEmptyInputError();
  }

  showLoader();

  pixabayApi.q = searchQuery;

  try {
    const data = await pixabayApi.getPhotos();
    galleryEl.innerHTML = createGalleryCards(data.hits);

    lightbox.refresh();

    if (!data.totalHits) {
      hideMoreBtn();
      return handleSearchError();
    }

    handleSearchSuccess(data.totalHits);

    if (data.total <= pixabayApi.perPage) {
      hideLoader();
      return hideMoreBtn();
    }

    hideLoader();
    smoothScroll();
    showMoreBtn();
  } catch (err) {
    console.log(err);
  }
}

async function handleLoadMore() {
  pixabayApi.page += 1;
  try {
    const data = await pixabayApi.getPhotos();
    galleryEl.insertAdjacentHTML('beforeend', createGalleryCards(data.hits));
    lightbox.refresh();
    smoothScroll();
    if (pixabayApi.page === Math.ceil(data.totalHits / pixabayApi.perPage)) {
      handleLastPageMsg();
      hideMoreBtn();
    }
  } catch (err) {
    console.log(err);
  }
}
