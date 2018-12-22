import {ServerGameType, ImageType, ServerImageType} from "./utilits.js";

const renameOption = (item, oldOption, newOption) => {
  item[newOption] = item[oldOption];
  delete item[oldOption];
};

export const adaptServerData = (data) => {
  return data.map((quest) => {
    console.log(quest);
    renameOption(quest, `question`, `description`);
    renameOption(quest, `answers`, `pictures`);
    switch (quest.type) {
      case ServerGameType.TWO_PICTURE:
        quest.type = 2;
        break;
      case ServerGameType.THREE_PICTURE:
        quest.type = 3;
        break;
      case ServerGameType.ONE_PICTURE:
        quest.type = 1;
        break;
    }
    if (quest.description === `Найдите рисунок среди изображений`) {
      quest.rightType = ImageType.PAINT;
    } else if (quest.description === `Найдите фото среди изображений`) {
      quest.rightType = ImageType.PHOTO;
    }

    quest.pictures.forEach((value, index) => {
      value.number = index + 1;
      if (value.type === ServerImageType.PAINT) {
        value.type = ImageType.PAINT;
      }
      index++;
    });

    return quest;
  });
};
