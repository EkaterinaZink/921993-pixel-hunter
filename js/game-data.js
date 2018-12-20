export const INITIAL_STATE = Object.freeze({
  question: 0,
  lifes: 3,
  time: 30
});

export const AnswerTime = {
  MIN: 10,
  NORM: 20,
  MAX: 30
};

const imagesList = {
  paintings: [
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://k42.kn3.net/D2F0370D6.jpg`,
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    `http://i.imgur.com/1KegWPz.jpg`,
    `https://i.imgur.com/DiHM5Zb.jpg`,
    `http://i.imgur.com/DKR1HtB.jpg`
  ]
};
// imagesList.paintings[randomIndex(imagesList.paintings)],
// imagesList.photos[randomIndex(imagesList.photos)]

const randomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
};

export const gameQuestions = [
  {
    type: `1-img`,
    description: `Угадай, фото или рисунок?`,
    answers: [{
      image: imagesList.photos[randomIndex(imagesList.photos)],
      value: `photo`
    }]
  },
  {
    type: `2-img`,
    description: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        image: imagesList.photos[randomIndex(imagesList.photos)],
        value: `photo`
      },
      {
        image: imagesList.photos[randomIndex(imagesList.photos)],
        value: `photo`
      }
    ]
  },
  {
    type: `3-img`,
    description: `Найдите рисунок среди изображений?`,
    soughtFor: `paint`,
    answers: [
      {
        image: imagesList.photos[randomIndex(imagesList.photos)],
        value: `photo`
      },
      {
        image: imagesList.paintings[randomIndex(imagesList.paintings)],
        value: `paint`
      },
      {
        image: imagesList.photos[randomIndex(imagesList.photos)],
        value: `photo`
      }
    ]
  },
  {
    type: `2-img`,
    description: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        image: imagesList.paintings[randomIndex(imagesList.paintings)],
        value: `paint`
      },
      {
        image: imagesList.photos[randomIndex(imagesList.photos)],
        value: `photo`
      }
    ]
  },
  {
    type: `3-img`,
    description: `Найдите рисунок среди изображений?`,
    soughtFor: `paint`,
    answers: [
      {
        image: imagesList.photos[randomIndex(imagesList.photos)],
        value: `photo`
      },
      {
        image: imagesList.paintings[randomIndex(imagesList.paintings)],
        value: `paint`
      },
      {
        image: imagesList.photos[randomIndex(imagesList.photos)],
        value: `photo`
      }
    ]
  },
  {
    type: `1-img`,
    description: `Угадай, фото или рисунок?`,
    answers: [{
      image: imagesList.photos[randomIndex(imagesList.photos)],
      value: `photo`
    }]
  },
  {
    type: `3-img`,
    description: `Найдите рисунок среди изображений?`,
    soughtFor: `paint`,
    answers: [
      {
        image: imagesList.photos[randomIndex(imagesList.photos)],
        value: `photo`
      },
      {
        image: imagesList.paintings[randomIndex(imagesList.paintings)],
        value: `paint`
      },
      {
        image: imagesList.photos[randomIndex(imagesList.photos)],
        value: `photo`
      }
    ]
  },
  {
    type: `2-img`,
    description: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        image: imagesList.photos[randomIndex(imagesList.photos)],
        value: `photo`
      },
      {
        image: imagesList.paintings[randomIndex(imagesList.paintings)],
        value: `paint`
      }
    ]
  },
  {
    type: `1-img`,
    description: `Угадай, фото или рисунок?`,
    answers: [{
      image: imagesList.photos[randomIndex(imagesList.photos)],
      value: `photo`
    }]
  },
  {
    type: `1-img`,
    description: `Угадай, фото или рисунок?`,
    answers: [{
      image: imagesList.photos[randomIndex(imagesList.photos)],
      value: `photo`
    }]
  }
];
