export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView`);
    }
  }

  get template() {
    throw new Error(`Template is required`);
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }

  render() {
    const markUp = this.template;
    const wrapper = document.createElement(`div`);
    wrapper.innerHTML = markUp.trim();
    return wrapper;
  }

  bind() { }
}
