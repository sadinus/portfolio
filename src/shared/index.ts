export const capitalize = (s: string) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const setPageY = (top: number) => {
  window.scrollTo({
    top: top,
    behavior: "smooth"
  });
};
