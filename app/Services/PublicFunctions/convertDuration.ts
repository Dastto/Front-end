const convertDuration = (duration: number): string => {
  const [minutes, seconds] = duration.toString().split(".");
  const paddedSeconds = seconds?.length < 2 ? `0${seconds}` : seconds;

  return `${minutes}:${paddedSeconds}`;
};

export default convertDuration;
