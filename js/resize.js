export default (frame, image) => {
  const frameMin = Math.min(frame.height, frame.width);

  if (image.height === image.width) {
    return {
      height: frameMin,
      width: frameMin
    };
  }

  const widthRatio = frame.width / image.width;
  const heightRatio = frame.height / image.height;
  if (widthRatio < heightRatio) {
    return {
      height: widthRatio * image.height,
      width: frame.width
    };
  } else {
    return {
      height: frame.height,
      width: heightRatio * image.width
    };
  }
};
