
import Router from "../router.js";
import CountPointsView from "./count-view.js";

export default class ResultScreen {
  constructor() {
    this.view = new CountPointsView();
    this.view.onBack = () => Router.showGreetings();
  }

  get element() {
    return this.view.element;
  }
}
