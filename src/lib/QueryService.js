import { axiosPath } from "./axios.js";

export class QueryService {
  constructor(basePath, headers = {}) {
    this.http = axiosPath(headers);
    this.basePath = basePath;
  }

  post = async (data) => {
    return this.http.post(this.basePath, data).then(res => res.data);
  };
}
