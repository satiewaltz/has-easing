import hasEasing from '../src';

describe('hasEasing', () => {
  it('returns "ease"', () => {
    expect(hasEasing('ease')).toBe('ease');
  });

  it('returns "ease-in-out" on empty input without strict mode', () => {
    expect(hasEasing()).toBe('ease-in-out');
  });

  it('returns an error', () => {
    expect(() => hasEasing('a', true)).toThrow();
  });

  it('returns an error on null input. With strict mode on.', () => {
    expect(() => hasEasing(null, true)).toThrow();
  });

  it('returns linear easing', () => {
    expect(hasEasing('linear')).toBe('linear');
  });

  it('returns cubic-bezier easing with no zeros', () => {
    expect(hasEasing('cubic-bezier(.17,.67,.83,.67)', true)).toBe(
      'cubic-bezier(.17,.67,.83,.67)',
    );
  });

  it('returns cubic-bezier easing with some zeros', () => {
    expect(hasEasing('cubic-bezier(.17, 0.67 ,.83,0.62)', true)).toBe(
      'cubic-bezier(.17, 0.67 ,.83,0.62)',
    );
  });

  it('returns an error with incorrect cubic-bezier', () => {
    expect(() => hasEasing('cubic-bezier(.17, 3.67 ,.83,.67)', true)).toThrow();
  });
});
