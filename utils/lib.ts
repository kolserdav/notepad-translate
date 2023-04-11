export const log = (
  level: "log" | "info" | "warn" | "error",
  message: string,
  data: any,
  forUser = false
) => {
  console[level](level, message, data);
};
