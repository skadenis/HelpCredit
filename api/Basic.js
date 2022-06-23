import BaseApi from "./BaseApi";

class Basic extends BaseApi {
  sendLead(data) {
    data.token = "2xwr9egn348f9237fz234fmz023f70";
    return this.axios.post("/add-lead", data);
  }
}

export default new Basic();
