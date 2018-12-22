import ErrorView from "./error-view.js";

export default class ErrorScreen {
  constructor(errMessage) {
    this.view = new ErrorView(errMessage);
  }
  get element() {
    return this.view.element;
  }
  bind() {}
}
