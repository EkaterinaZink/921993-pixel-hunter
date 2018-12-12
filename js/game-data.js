const Points = {
  RIGHT_ANSWER: 100,
  LIFES: 50,
  FAST: 50,
  SLOW: 50,
};

const AnswerTime = {
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

const SCREEN_COUNT = 10;

const randomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
};

const gameType = () => {
  return [
    {
      description: `Угадай, фото или рисунок?`,
      type: 1,
      image: [
        {
          number: 1,
          type: `paint`,
          src: imagesList.paintings[randomIndex(imagesList.paintings)]
        }
      ]
    },
    {
      description: `Угадайте для каждого изображения фото или рисунок?`,
      type: 2,
      image: [
        {
          number: 1,
          type: `paint`,
          src: imagesList.paintings[randomIndex(imagesList.paintings)]
        },
        {
          number: 2,
          type: `photo`,
          src: imagesList.photos[randomIndex(imagesList.photos)]
        }
      ]
    },
    {
      description: `Найдите рисунок среди изображений?`,
      type: 3,
      rightType: `paint`,
      image: [
        {
          number: 1,
          type: `photo`,
          src: imagesList.photos[randomIndex(imagesList.photos)]
        },
        {
          number: 2,
          type: `photo`,
          src: imagesList.photos[randomIndex(imagesList.photos)]
        },
        {
          number: 3,
          type: `paint`,
          src: imagesList.paintings[randomIndex(imagesList.paintings)]
        }
      ]
    }
  ];
};

const getGameScreens = () => {
  const game = [];
  for (let i = 0; i < SCREEN_COUNT; i++) {
    const gameItem = gameType();
    game.push(gameItem[randomIndex(gameItem)]);
  }
  return game;
};

const gameList = getGameScreens();
export {Points, AnswerTime, SCREEN_COUNT, gameList};

