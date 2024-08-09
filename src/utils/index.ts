export function debounce(fn: any, ms: number) {
  let timer: any | undefined;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}
