import {adaptServerData} from "./data-adapter.js";
import {SERVER_URL} from "./backend-data.js";
import {checkResponseStatus} from "./utilits.js";

export default class QuestionsService {
  constructor() {}
  load() {
    return window
      .fetch(`${SERVER_URL}/questions`)
      .then((response) => checkResponseStatus(response))
      .then((response) => response.json())
      .then((data) => {
        return adaptServerData(data);
      });
  }
}
