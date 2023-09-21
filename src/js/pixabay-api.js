import axios from 'axios';

export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '39545103-a9059eda7bd717a63fbbb174b';

  constructor(perPage) {
    this.page = 1;
    this.q = null;
    this.perPage = perPage;
  }

  async getPhotos() {
    // const searchParams = new URLSearchParams({
    //   q: this.query,
    //   page: this.page,
    //   per_page: this.perPage,
    //   key: this.#API_KEY,
    //   image_type: 'photo',
    //   orientation: 'horizontal',
    //   safesearch: 'true',
    // });

    try {
      // const resp = await axios.get(`${this.#BASE_URL}?${searchParams}`);

      const resp = await axios.get(`${this.#BASE_URL}`, {
        params: {
          q: this.q,
          page: this.page,
          per_page: this.perPage,
          key: this.#API_KEY,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: 'true',
        },
      });

      return resp.data;
    } catch (err) {
      console.log(err);
    }
  }
}
