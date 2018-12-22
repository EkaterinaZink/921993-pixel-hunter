export const Points = {
  RIGHT_ANSWER: 100,
  LIFES: 50,
  FAST: 50,
  SLOW: 50,
};

export const AnswerTime = {
  MIN: 10,
  NORM: 20,
  MAX: 30
};

const bodyElement = document.querySelector(`body`);

export const continueGame = (state) => state.lifes - 1 > 0;

export const reduceLifes = (state) => {
  if (typeof state.lifes !== `number`) {
    throw new Error(`lifes should be a number`);
  }

  const lifes = state.lifes - 1;
  const newGame = Object.assign({}, state, {lifes});
  return newGame;
};

export const changeQuestion = (state, question) => {
  if (question < 0) {
    throw new Error(`Question should not have negative value`);
  }
  if (typeof (question) !== `number`) {
    throw new Error(`Question should be a number`);
  }
  const newGame = Object.assign({}, state, {question});
  return newGame;
};

export const renderElement = (template = ``, tagName = `div`) => {
  const wrapper = document.createElement(tagName);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

export const resize = (container, image) => {
  const initImgRatio = image.width / image.height;
  const resizeImage = {};
  const containerRatio = container.width / container.height;
  if (initImgRatio > containerRatio) {
    resizeImage.height = container.width / initImgRatio;
    resizeImage.width = container.width;
  } else {
    resizeImage.height = container.height;
    resizeImage.width = initImgRatio * container.height;
  }
  return resizeImage;
};

export const getCountChecked = (inputList) => {
  return Array.from(inputList).reduce((prev, current) => {
    if (prev.checked !== undefined) {
      prev = prev.checked ? 1 : 0;
    }
    return prev + (current.checked ? 1 : 0);
  });
};

export const showPopup = (element) => {
  bodyElement.appendChild(element);
};
export const hidePopup = (element) => {
  bodyElement.removeChild(element);
};

export const timer = (state) => {
  let time = 0;
  if (state.time > 0) {
    time = state.time - 1;
  }
  const newState = Object.assign({}, state, {time});
  return newState;
};

export const restartTimer = (state) => {
  const newState = Object.assign({}, state, {
    time: AnswerTime.MAX
  });
  return newState;
};

export const debug = {
  enable: true,
  styleRight: `style="border: 1px solid green;"`
};

export const ServerGameType = {
  ONE_PICTURE: `tinder-like`,
  TWO_PICTURE: `two-of-two`,
  THREE_PICTURE: `one-of-three`
};

export const ServerImageType = {
  PHOTO: `photo`,
  PAINT: `paint`
};

export const ImageType = {
  PHOTO: `photo`,
  PAINT: `paint`
};

export const checkResponseStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`Статус: ${response.status}`);
  }
};
