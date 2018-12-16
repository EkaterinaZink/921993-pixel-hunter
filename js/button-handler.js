import introScreen from './intro/intro-screen.js';
import renderScreen from './render-screen.js';

const buttonHandler = () => {
  const button = document.querySelector(`.back`);

  if (button) {
    button.addEventListener(`click`, () => {
      renderScreen(introScreen);
    });
  }
};

export default buttonHandler;
