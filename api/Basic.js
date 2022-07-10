import BaseApi from "./BaseApi";

class Basic extends BaseApi {
  sendLead(data) {
    data.token = "gyiucbwyouceiuwhednewiuyd72btydghnulmuhox";
    return this.axios.post("/add-lead", data);
  }
}

export default new Basic();
