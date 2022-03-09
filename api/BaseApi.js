import axios from 'axios';

export default class BaseApi {
  constructor () {

    this.axios = axios.create({
      baseURL: '//backend.gastrosoft.by/denis/bank/unicredit/',
      headers: {}
    });
  }
}
