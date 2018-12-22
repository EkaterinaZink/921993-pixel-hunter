import {DEFAULT_NAME, SERVER_URL, APP_ID} from "./backend-data.js";
import {checkResponseStatus} from "./utilits.js";

export default class ResultService {
  constructor() {}
  loadResults() {
    return fetch(`${SERVER_URL}/stats/${APP_ID}`)
      .then((response) => {
        return checkResponseStatus(response);
      })
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }
  saveResults(data, name = DEFAULT_NAME) {
    data = Object.assign({name}, data);
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": `application/json`
      },
      method: `POST`
    };
    return fetch(`${SERVER_URL}/stats/${APP_ID}`, requestSettings).then(
        (response) => checkResponseStatus(response)
    )
    .catch((err) => console.error(err));
  }
}
