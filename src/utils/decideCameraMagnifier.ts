import { decideBreakPoints } from "./decideBreakPoints.ts";
import { Breakpoints } from "./constants/breakpoints.ts";

export const decideCameraMagnifier = () => {
  const deviceType = decideBreakPoints();

  switch (deviceType) {
    case Breakpoints.SMALL_MOBILE:
      return 200;
    case Breakpoints.MOBILE:
      return 150;
    case Breakpoints.TABLET:
    default:
      return 100;
    case Breakpoints.DESKTOP:
    case Breakpoints.LARGE_DESKTOP:
    case Breakpoints.EXTRA_LARGE_DESKTOP:
      return 75;
  }
};
