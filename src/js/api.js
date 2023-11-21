import axios from 'axios';
axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api';

export class GetProduct {
  constructor() {
    this.keyword = '';
    this.category = '';
    this.byABC = false;
    this.byPrice = false;
    this.byPopularity = false;
    this.page = 1;
    this.totalPages = 1;
    this.limit = 9;
  }

  async getCategories() {
    const url = '/products/categories';
    try {
      const response = await axios.get(url);
      if (response.status === 200 && response.data.length !== 0)
        return response.data;
      return Promise.reject(response.status);
    } catch (error) {
      return Promise.reject(response.status);
    }
  }

  async getProducts(endPoint) {
    const PARAMS = new URLSearchParams({
      keyword: this.query,

      page: this.page,
      per_page: this.perPage,
    });
    const url = this.endPoint + '?' + PARAMS;

    try {
      const response = await axios.get(url);
      // if (response.status === 200 && response.hits !== []) return response;
      // return Promise.reject(response.status);
    } catch (error) {
      return Promise.reject(response.status);
    }
  }
  async searchProducts(query) {
    query = query.replace(/ +/g, ' ').trim();

    if (!query) return;

    this.query = query;
    this.page = 1;

    try {
      const {
        data,
        data: { totalHits },
      } = await this.getImages();

      if (totalHits === 0) {
        notifyStr(
          'Sorry, there are no products matching your search query. Please try again.'
        );
        loadOff();
        return;
      }

      this.totalPages = Math.ceil(totalHits / this.perPage);
      return data;
    } catch (error) {
      return Promise.reject(response.status);
    }
  }

  async loadMoreProducts() {
    this.page++;

    try {
      const { data } = await this.getImages();
      loadOff();
      return data;
    } catch (error) {
      return Promise.reject(response.status);
    }
  }
}
