import {resize} from "../utilits.js";

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView`);
    }
  }

  get template() {
    throw new Error(`Template is required`);
  }

  resizeImage() {
    this._element.querySelectorAll(`.game__option img`).forEach((img) => {
      img.addEventListener(`load`, () => {
        const containerImage = {
          width: img.parentElement.clientWidth,
          height: img.parentElement.clientHeight
        };
        const image = {
          width: img.naturalWidth,
          height: img.naturalHeight
        };
        const imageBox = resize(containerImage, image);
        img.style.width = imageBox.width + `px`;
        img.style.height = imageBox.height + `px`;
      });
    });
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element);
    this.resizeImage();
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
