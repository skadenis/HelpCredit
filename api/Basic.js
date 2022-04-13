import BaseApi from "./BaseApi";

class Basic extends BaseApi {

  sendLead (data) {
    data.token = 'fejkbcksnacpewmcnjknbhjfdbvncsd';
    return this.axios.post('/add-lead', data);
  }

}

export default new Basic();
