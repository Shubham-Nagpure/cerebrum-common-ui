import { describe, it, expect } from 'vitest';
import { getCurrentRouteFromLocation } from '../routeUtils';

describe('getCurrentRouteFromLocation', () => {
  it('should return PUBLISHED when pathname includes PUBLISHED', () => {
    const pathname = '/projects/published';
    const result = getCurrentRouteFromLocation(pathname);
    expect(result).toBe('published');
  });

  it('should return DRAFT when pathname includes DRAFT', () => {
    const pathname = '/projects/draft';
    const result = getCurrentRouteFromLocation(pathname);
    expect(result).toBe('draft');
  });

  it('should return DRAFT by default when pathname does not include PUBLISHED or DRAFT', () => {
    const pathname = '/projects';
    const result = getCurrentRouteFromLocation(pathname);
    expect(result).toBe('draft');
  });
});
