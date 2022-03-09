import axios from 'axios';

export default class BaseApi {
  constructor () {

    this.axios = axios.create({
      baseURL: '//localhost:3000/denis/bank/unicredit/',
      headers: {}
    });
  }
}
