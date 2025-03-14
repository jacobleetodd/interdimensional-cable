export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const removeFalseyFromArray = <T>(array: T[]) => {
  return array.filter((item) => item !== undefined && item !== null);
};
