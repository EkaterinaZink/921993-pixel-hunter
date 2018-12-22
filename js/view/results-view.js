import AbstractView from "./abstractview.js";

export default class ResultLoadingView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<section class="result">
      <h2 class="result__title">Загрузка результатов игры</h2>
    </section>`;
  }
}
