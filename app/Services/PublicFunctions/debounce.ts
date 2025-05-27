function debounce(cb: any, delay: any) {
  let timeoutId: NodeJS.Timeout;
  return function (...args: any) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(async () => {
      await cb(...args);
    }, delay);
  };
}

export default debounce;
