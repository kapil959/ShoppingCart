import axios from "axios";
window.axios = axios;

var baseURLDQ = "";

if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
  baseURLDQ = "http://localhost:8080/apischeduler/";
} else {
  baseURLDQ = "http://localhost:8080/apischeduler/";
}

// var requestParam = {
//   "customer": "",
//   "application": "",
//   "channel": "",
//   "userName": "",
// };

export default class RestApi {

  // static getAPI(url) {
  //   return axios.post(baseURLDQ + url, requestParam);
  // }

  static postAPI(url, param) {
    return axios.post(baseURLDQ + url, param);
  }

}