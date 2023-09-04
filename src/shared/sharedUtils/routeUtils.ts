import { DRAFT, PUBLISHED } from '../constants/globalConstants';

export const getCurrentRouteFromLocation = (pathname: string) => {
  switch (true) {
    case pathname.includes(PUBLISHED):
      return PUBLISHED;
    case pathname.includes(DRAFT):
      return DRAFT;
    default:
      return DRAFT;
  }
};
