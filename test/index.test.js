import hasEasing from '../src';

describe('hasEasing', () => {
  it('returns true with "ease"', () => {
    expect(hasEasing('ease')).toBe(true);
  });

  it('returns false empty input without strict mode', () => {
    expect(hasEasing()).toBe(false);
  });

  it('returns false with "a"', () => {
    expect(hasEasing('a')).toBe(false);
  });

  it('returns an false on null input.', () => {
    expect(hasEasing(null)).toBe(false);
  });

  it('returns linear easing', () => {
    expect(hasEasing('linear')).toBe(true);
  });

  // ////////////////////////////////////////
  // Cubic-Bezier
  it('returns true with cubic-bezier easing with no zeros', () => {
    expect(hasEasing('cubic-bezier(.17,.67,.83,.67)')).toBe(true);
  });

  it('returns true with cubic-bezier easing with some zeros', () => {
    expect(hasEasing('cubic-bezier(.17, 0.67 ,.83,0.62)')).toBe(true);
  });

  it('returns false with incorrect cubic-bezier input', () => {
    expect(hasEasing('cubic-bezier(.17, 3.67 ,.83,.67)')).toBe(false);
  });

  // ////////////////////////////////////////
  // Frames
  it('returns false with incorrect frames input', () => {
    expect(hasEasing('frames(2,1)')).toBe(false);
  });

  it('returns true with incorrect frames input', () => {
    expect(hasEasing('frames(-13)')).toBe(false);
  });

  it('returns true with correct frames input', () => {
    expect(hasEasing('frames(30)')).toBe(true);
  });

  // ////////////////////////////////////////
  // Steps
  it('returns false with incorrect steps input', () => {
    expect(hasEasing('steps(2,1)')).toBe(true);
  });

  it('returns true with incorrect steps input', () => {
    expect(hasEasing('steps(-39)')).toBe(false);
  });

  it('returns true with correct steps input', () => {
    expect(hasEasing('steps(30)')).toBe(true);
  });
  // ///////////////////////////////

  it('returns true with on step-end', () => {
    expect(hasEasing('step-end')).toBe(true);
  });

  it('returns true with on step-start', () => {
    expect(hasEasing('step-start')).toBe(true);
  });
});
