import AbstractView from "./abstractview.js";
import {hidePopup} from "../utilits.js";

export default class ConfirmView extends AbstractView {
  constructor() {
    super();
  }
  get template() {
    return `
    <section class="modal">
      <form class="modal__inner">
        <button class="modal__close" type="button">
          <span class="visually-hidden">Закрыть</span>
        </button>
        <h2 class="modal__title">Подтверждение</h2>
        <p class="modal__text">Вы уверены что хотите начать игру заново?</p>
        <div class="modal__button-wrapper">
         <button class="modal__btn modal__btn--ok">Ок</button>
          <button class="modal__btn modal__btn--cancel">Отмена</button>
        </div>
      </form>
    </section>`;
  }

  onClose() {
    hidePopup(this.element);
  }
  onConfirm() {}
  bind(element) {
    element.querySelector(`.modal__close`).addEventListener(`click`, () => {
      this.onClose();
    });
    element
      .querySelector(`.modal__btn--ok`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this.onConfirm();
      });
    element
      .querySelector(`.modal__btn--cancel`)
      .addEventListener(`click`, () => {
        this.onClose();
      });
  }
}

