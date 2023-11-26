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
    this.perPage = 6;
  }

  async getCategories() {
    try {
      const url = '/products/categories';
      const response = await axios.get(url);
      if (response.status === 200) return response.data;
      return Promise.reject(response.status);
    } catch (error) {
      return Promise.reject(response.status);
    }
  }

  async getProducts({ keyword, category, searchSort, page, limit }) {
    this.keyword = keyword;
    this.category = category;

    // this.byABC = searchSort.slice(6);
    this.page = page;
    this.perPage = limit;
    const PARAMS = new URLSearchParams({
      keyword: this.keyword,
      category: this.category,
      // byABC: this.byABC,
      // byPrice: this.byPrice,
      // byPopularity: this.byPopularity,
      page: this.page,
      limit: this.perPage,
    });

    try {
      const url = '/products' + '?' + PARAMS;
      const response = await axios.get(url);
      if (response.status === 200) {
        this.totalPages = response.data.totalPages;
        return response.data;
      }
      return Promise.reject(response.status);
    } catch (error) {
      return Promise.reject(response.status);
    }
  }

  async getProductId(productId) {
    try {
      const url = '/products' + '/' + productId;
      const response = await axios.get(url);
      if (response.status === 200) {
        return response.data;
      }
      return Promise.reject(response.status);
    } catch (error) {
      return Promise.reject(response.status);
    }
  }

  async getPopular() {
    try {
      const url = '/products/popular';
      const response = await axios.get(url);
      if (response.status === 200) return response.data;
      return Promise.reject(response.status);
    } catch (error) {
      return Promise.reject(response.status);
    }
  }

  async getDiscount() {
    try {
      const url = '/products/discount';
      const response = await axios.get(url);
      if (response.status === 200) return response.data;
      return Promise.reject(response.status);
    } catch (error) {
      return Promise.reject(response.status);
    }
  }

  async subscription(bodyData) {
    const url = '/subscription';
    const response = await axios.post(url, bodyData, {
      validateStatus: function (status) {
        return status < 500;
      },
    });
    return response.data;
  }
}
