import { describe, it, expect } from 'vitest';
import { formatDateToDDMMYYYY, formatDistanceFromToday } from '../dateUtils';

describe('formatDateToDDMMYYYY', () => {
  it('should return correct date format', () => {
    const timestamp = '2023-09-01 16:35:04.326305 +0000 +0000';
    const result = formatDateToDDMMYYYY(timestamp);
    expect(result).toBe('01 September 2023');
  });
});

describe('formatDistanceFromToday', () => {
  it('should return correct date format', () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 2);
    const result = formatDistanceFromToday(currentDate.toString());
    expect(result).toContain('2 days');
  });
});
