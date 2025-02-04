export const getTimeStamp = (plusSeconds: number = 0) => {
  const currentTimestamp = new Date();
  currentTimestamp.setSeconds(currentTimestamp.getSeconds() + plusSeconds);
  return currentTimestamp.getTime();
};
