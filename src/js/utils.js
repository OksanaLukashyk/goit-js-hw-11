import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { loaderEl, loadMoreBtn } from './refs';

export function showMoreBtn() {
  loadMoreBtn.classList.remove('is-hidden');
}

export function hideMoreBtn() {
  loadMoreBtn.classList.add('is-hidden');
}

export function showLoader() {
  loaderEl.classList.add('active');
}

export function hideLoader() {
  loaderEl.classList.remove('active');
}

export function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

// Notify messages

const options = {
  clickToClose: true,
  timeout: 5000,
  cssAnimationStyle: 'zoom',
  position: 'right-top',
};

export function handleSearchError() {
  loaderEl.classList.remove('active');
  loaderEl.classList.add('is-hidden');
  return Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.',
    options
  );
}

export function handleSearchSuccess(itemsNum) {
  return Notify.success(`Hooray! We found ${itemsNum} images.`, options);
}

export function handleEmptyInputError() {
  loaderEl.classList.remove('active');
  return Notify.warning('Please enter a valid search query!', options);
}

export function handleLastPageMsg() {
  loadMoreBtn.classList.add('is-hidden');
  return Notify.failure(
    "We're sorry, but you've reached the end of search results.",
    options
  );
}
