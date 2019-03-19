import { createAPI } from "../util";
import config from "../config";

const baseUrl = {
  mock: "https://www.easy-mock.com/mock/5c5318b47e0da549724ecea2/example",
  dev: "",
  pre: "",
  prod: ""
}[config.env || "mock"];

export default createAPI(baseUrl);
