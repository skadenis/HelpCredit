import axios from "axios";

export default class BaseApi {
  constructor() {
    this.axios = axios.create({
      baseURL: "https://lidgenbanki.gastrosoft.by/api/",
      // baseURL: '//localhost:3000/denis/bank/unicredit/',
      headers: {},
    });
  }
}
