import ConfirmView from "./confirm-view.js";

export default class ConfirmScreen {
  constructor() {
    this.view = new ConfirmView();
    this.view.onConfirm = () => {
      this.confirm();
    };
  }
  get element() {
    return this.view.element;
  }

  confirm() {}
  close() {
    this.view.onClose();
  }
}
