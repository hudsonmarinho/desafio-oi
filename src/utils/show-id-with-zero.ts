export const showIdWithZero = (id: number): string => {
  if (id < 10) {
    return `00${id}`;
  } else if (id < 100) {
    return `0${id}`;
  } else {
    return id.toString();
  }
};
