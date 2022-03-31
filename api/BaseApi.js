import axios from 'axios';

export default class BaseApi {
  constructor () {

    this.axios = axios.create({
      baseURL: 'https://backend.gastrosoft.by/denis/bank/unicredit/',
      // baseURL: '//localhost:3000/denis/bank/unicredit/',
      headers: {}
    });
  }
}
