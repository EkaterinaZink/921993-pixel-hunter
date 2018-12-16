import IntroScreen from './intro/intro-screen.js';
import GreetingsScreen from './intro/greetings-screen.js';
import RulesScreen from './intro/rules-screen.js';

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
}
