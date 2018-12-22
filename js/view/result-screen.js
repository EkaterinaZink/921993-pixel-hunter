
import Router from "../router.js";
import ResultLoadingView from "./results-view.js";

export default class ResultScreen {
  constructor() {
    this.view = new ResultLoadingView();
    this.view.onBack = () => Router.showGreetings();
  }
  get element() {
    return this.view.element;
  }
}
