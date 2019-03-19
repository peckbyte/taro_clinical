import Request from "@/utils/request";

export const getData = data =>
  Request({
    url: "/mock",
    method: "GET",
    data
  });
