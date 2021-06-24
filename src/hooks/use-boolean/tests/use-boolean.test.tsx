import { act, renderHook } from '@testing-library/react-hooks';
import { useBoolean } from '../index';

describe('useBoolean', () => {
  it('should toggle to true', () => {
    const { result } = renderHook(() => useBoolean(false));

    act(() => result.current[1].toggle());
    expect(result.current[0]).toBe(true);
  });

  it('should toggle to true and next to false', () => {
    const { result } = renderHook(() => useBoolean(false));

    act(() => result.current[1].toggle());
    expect(result.current[0]).toBe(true);
    act(() => result.current[1].toggle());
    expect(result.current[0]).toBe(false);
  });

  it('should set off', () => {
    const { result } = renderHook(() => useBoolean(true));

    act(() => result.current[1].off());
    expect(result.current[0]).toBe(false);
  });

  it('should set off', () => {
    const { result } = renderHook(() => useBoolean(false));

    act(() => result.current[1].on());
    expect(result.current[0]).toBe(true);
  });
});
