import BaseApi from "./BaseApi";

class Basic extends BaseApi {

  sendLead (data) {
    return this.axios.post('/', {
      secret: '*JHrLR27PDfrvgmzZpAaicR@',
      method: 'crm.lead.add',
      fields: {
        fields: {
          NAME: '',
          LAST_NAME: '',
          SOURCE_ID: '31',
          PHONE: data.phone,
          VALUE_TYPE: 'WORK'
        }
      }
    });
  }

}

export default new Basic();
