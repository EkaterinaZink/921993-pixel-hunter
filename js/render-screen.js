import buttonHandler from './button-handler.js';

const screenContainer = document.querySelector(`#main`);

const renderScreen = (screenContent) => {
  const formElement = screenContent.querySelector(`form`);
  screenContainer.innerHTML = ``;
  if (formElement) {
    formElement.reset();
  }
  screenContainer.appendChild(screenContent);
  buttonHandler();
};

export default renderScreen;
