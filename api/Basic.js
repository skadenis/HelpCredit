import BaseApi from "./BaseApi";

class Basic extends BaseApi {

  sendLead (data) {
    return this.axios.post('/', data);
  }

}

export default new Basic();
