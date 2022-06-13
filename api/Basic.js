import BaseApi from "./BaseApi";

class Basic extends BaseApi {

  sendLead (data) {
    data.token = '1279t7ehduohwe1udh10d0yge9792';
    return this.axios.post('/add-lead', data);
  }

}

export default new Basic();
