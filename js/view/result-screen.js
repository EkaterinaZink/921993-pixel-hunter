
import Router from "../router.js";
import CountPointsView from "./count-view.js";

export default class ResultScreen {
  constructor(data, player) {
    this.view = new CountPointsView(data);
    this.view.onBack = () => Router.showGreetings();
  }

  get element() {
    return this.view.element;
  }
}
