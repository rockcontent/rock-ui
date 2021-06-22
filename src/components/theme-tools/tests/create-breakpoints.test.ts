import { createBreakpoints } from '../index';

describe('createBreakpoints', () => {
  test('return de default custom breakpoints', () => {
    const defaultBrakpoints = {
      sm: '320px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    };
    const breakpoints = createBreakpoints({
      sm: '320px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    });

    expect(breakpoints).toMatchObject(defaultBrakpoints);
  });
  test('should not return de default custom breakpoints', () => {
    const defaultBrakpoints = {
      sm: '200px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    };
    const breakpoints = createBreakpoints({
      base: '100px',
      sm: '320px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    });

    expect(breakpoints).not.toMatchObject(defaultBrakpoints);
  });
});
