import AbstractView from "./abstractview.js";

export default class ErrorView extends AbstractView {
  constructor(message) {
    super();
    this.message = message;
  }

  get template() {
    return `
  <section class="modal">
    <div class="modal__inner">
      <h2 class="modal__title">Произошла ошибка!</h2>
      <p class="modal__text modal__text--error">
      Пожалуйста, перезагрузите страницу.
      </p>
    </div>
  </section>`;
  }
}
