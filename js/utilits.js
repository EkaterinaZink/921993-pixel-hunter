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
  const calculatedHeight = container.width / initImgRatio;
  const calculatedWidth = container.height * initImgRatio;
  const imageIsWider = image.width > container.width;
  const imageVsContainerWidth = image.width - container.width;
  const imageVsContainerHeight = image.height - container.height;
  const imageIsHigher = image.height > container.height;
  const containerIsHigher = container.height > image.height;

  if (imageIsWider && (imageVsContainerWidth) > (imageVsContainerHeight)) {
    image.width = container.width;
    image.height = calculatedHeight;
  } else if (imageIsWider && (imageVsContainerWidth) < (imageVsContainerHeight)) {
    image.height = container.height;
    image.width = calculatedWidth;
  } else if (imageIsHigher) {
    image.height = container.height;
    image.width = calculatedWidth;
  } else if (containerIsHigher) {
    image.width = container.width;
    image.height = calculatedHeight;
  }
  const newDimensions = Object.assign({}, image);
  return newDimensions;
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
  styleRight: `style="border: 1px solid green;"`,
  styleWrong: `style="border: 1px solid red;"`
};


