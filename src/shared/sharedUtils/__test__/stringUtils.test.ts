import { describe, it, expect } from 'vitest';
import { toUpperCaseFirstLetter } from '../stringUtils';

describe('toUpperCaseFirstLetter', () => {
  it('should return word with uppercase', () => {
    expect(toUpperCaseFirstLetter('draft')).toBe('Draft');
  });
});
