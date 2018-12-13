import {renderScreen} from './utilits'; // переписать renderScreen

export default class AbstractView {
  constructor(state) {
    this.state = state;
  }

  get template() {
    throw new Error(`Template is required`);
  }

  get item() {
    if (this._item) {
      return this._item;
    }
    this._item = this.renderScreen();
    this.bind(this._item);
    return this._item;
  }

  render() {
    return renderScreen(this.template);
  }

  bind() { }
}
