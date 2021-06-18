import { act, renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../index';

describe('Counter', () => {
  it('should increment', () => {
    const { result } = renderHook(() => useCounter({ defaultValue: 0 }));
    act(() => result.current.increment());
    expect(result.current.valueAsNumber).toBe(1);
  });

  it('should decrement', () => {
    const { result } = renderHook(() => useCounter({ defaultValue: 0 }));
    act(() => result.current.decrement());
    expect(result.current.valueAsNumber).toBe(-1);
  });

  it('should increment with step', () => {
    const { result } = renderHook(() =>
      useCounter({ defaultValue: 0, step: 5 })
    );
    act(() => result.current.decrement());
    expect(result.current.valueAsNumber).toBe(-5);
  });

  it('should not exceed max', () => {
    const { result } = renderHook(() =>
      useCounter({ defaultValue: 0, step: 5, max: 4 })
    );
    act(() => result.current.increment());
    expect(result.current.valueAsNumber).toBe(4);
  });

  it('should exceed max but be out-of-range', () => {
    const { result } = renderHook(() =>
      useCounter({ defaultValue: 0, step: 5, max: 4, keepWithinRange: false })
    );
    act(() => result.current.increment());
    expect(result.current.valueAsNumber).toBe(5);
    expect(result.current.isOutOfRange).toBeTruthy();
  });

  it('should increment with small step', () => {
    const { result } = renderHook(() =>
      useCounter({ defaultValue: 0.2, step: 0.1, max: 4 })
    );
    act(() => result.current.increment());
    expect(result.current.valueAsNumber).toBe(0.3);
  });
});
