import IntroScreen from './screens/intro/intro-screen.js';
import GreetingsScreen from './screens/intro/greetings-screen.js';
import RulesScreen from './screens/intro/rules-screen.js';
import GameScreen from './game-screen.js';
import GameModel from './game-model.js';
import Stats from './stats.js';


const main = document.querySelector(`#main`);
const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

export default class Router {
  static showIntro() {
    const intro = new IntroScreen();
    changeView(intro.element);
  }

  static showGreetings() {
    const greetings = new GreetingsScreen();
    changeView(greetings.element);
  }

  static showRules() {
    const rules = new RulesScreen();
    changeView(rules.element);
  }

  static showGame(player) {
    const gamePresenter = new GameScreen(new GameModel(player));
    changeView(gamePresenter.element);
    gamePresenter.startGame();
  }

  static showStats(isWinner, model) {
    const statistics = new Stats(isWinner, model);
    changeView(statistics.element);
  }
}
