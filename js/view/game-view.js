import AbstractView from "./abstractview.js";
import {resize} from "../utilits.js";

export default class GameView extends AbstractView {
  constructor(state, game) {
    super();
    this.state = state;
    this.game = game;
  }

  resizeImage() {
    this.element.querySelectorAll(`.game__option img`).forEach((img) => {
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
  onNext() {}

  bind() {}
}
