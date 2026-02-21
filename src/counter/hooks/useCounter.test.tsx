import { renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { useCounter } from './useCounter';
import { act } from 'react';
describe('UseCounter.test', () => {
  test( 'Should initialize the counter with the provided value', () => {
    const { result } = renderHook( () => useCounter() ); 
    expect( result.current.count ).toBe(10);
  });
  test( 'Should initialize with value 20', () => {
    const initValue = 20;
    const { result } = renderHook( () => useCounter(initValue) );
    expect( result.current.count ).toBe(initValue);
  });
  test( 'Should increment in 1 when call action handleAdd', () => {
    const { result } = renderHook( () => useCounter() );

    act( () => {
      result.current.handleAdd();
    });  
    expect( result.current.count ).toBe(11);
    act( () => {
      result.current.handleAdd();
    });  
    expect( result.current.count ).toBe(12);
  });
  test( 'should decrement in 1 when call action handleSub', () => {
    const { result } = renderHook( () => useCounter() );
    act( () => {
      result.current.handleSub();
    });
    expect( result.current.count ).toBe(9);
    act( () => {
      result.current.handleSub();
    });
    expect( result.current.count ).toBe(8);
  });

  test( 'should reset value when call action handleReset', () => {
    const { result } = renderHook( () => useCounter() );
    act( () => {
      result.current.handleAdd();
    });
    act( () => {
      result.current.handleAdd();
    });
    expect( result.current.count ).toBe(12);
    act( () => {
      result.current.handleReset();
    });
    expect( result.current.count ).toBe(10);
  });
});