import BaseApi from "./BaseApi";

class Basic extends BaseApi {
  sendLead(data) {
    data.token = "gyujkbjluygtfudresrwaesycuvibonpui7yt6ury55476ed";
    return this.axios.post("/add-lead", data);
  }
}

export default new Basic();
