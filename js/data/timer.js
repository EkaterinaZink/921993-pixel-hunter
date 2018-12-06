const timer = (time) => {
  if (typeof time !== `number`) {
    throw new Error(`timer should be a number`);
  }

  return time > 0 ? time - 1 : `time is over`;
};


export default timer;

