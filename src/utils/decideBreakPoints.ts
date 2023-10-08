import { Breakpoints } from "./constants/breakpoints.ts";

export const decideBreakPoints = () => {
  const deviceInnerWidth = window.innerWidth;

  return [
    Breakpoints.SMALL_MOBILE,
    Breakpoints.MOBILE,
    Breakpoints.TABLET,
    Breakpoints.DESKTOP
  ].filter((breakpoint) => breakpoint <= deviceInnerWidth).at(-1) || Breakpoints.SMALL_MOBILE;

};