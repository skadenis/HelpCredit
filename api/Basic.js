import BaseApi from "./BaseApi";

class Basic extends BaseApi {
  sendLead(data) {
    data.token = "youwiebndfxwo4hf7cw4fpumw40fmzweof";
    return this.axios.post("/add-lead", data);
  }
}

export default new Basic();
