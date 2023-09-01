import { format, formatDistance } from 'date-fns';

export const formatDateToDDMMYYYY = (timestamp: string) =>
  format(new Date(timestamp), 'dd MMMM yyyy');

export const formatDistanceFromToday = (toDate: string) =>
  formatDistance(new Date(), new Date(toDate));
