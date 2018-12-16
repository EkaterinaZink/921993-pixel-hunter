export const resize = (frame, image) => {
  const img = {};
  const widthRatio = frame.width / image.width;
  const heightRatio = frame.height / image.height;

  if (widthRatio === heightRatio) {

    img.width = image.width * widthRatio;
    img.height = image.height * heightRatio;
  } else if (widthRatio > heightRatio) {
    img.width = image.width * heightRatio;
    img.height = image.height * heightRatio;
  } else if (widthRatio < heightRatio) {
    img.width = image.width * widthRatio;
    img.height = image.height * widthRatio;
  }
  return img;
};
