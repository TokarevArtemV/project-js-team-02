import axios from 'axios';
axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api';

export class GetProduct {
  constructor(perPage) {
    this.searchParams = {};
    this.keyword = '';
    this.category = '';
    this.page = 1;
    this.sort = '';
    this.perPage = perPage;
    this.currentPage = 1;
    this.totalPages = 1;
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

  async getProducts({ keyword, category, sort, page, limit }) {
    this.keyword = keyword ? `keyword=${keyword}&` : '';
    this.category = category ? `category=${category}&` : '';
    this.sort = sort ? `${sort}&` : '';
    this.page = page ? `page=${page}&` : '';
    this.perPage = limit ? `limit=${limit}` : '';

    const PARAMS = `${this.keyword}${this.category}${this.sort}${this.page}${this.perPage}`;

    try {
      const url = '/products' + '?' + PARAMS;
      const response = await axios.get(url);
      if (response.status === 200) {
        this.currentPage = response.data.page;
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

  async sendOrder(bodyData) {
    const url = '/orders';
    const response = await axios.post(url, bodyData);
    return response.data;
  }
}
