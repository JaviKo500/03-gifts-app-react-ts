import { renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { useGifs } from './useGifs';
import { act } from 'react';
describe('UseGifs.test', () => {
  test( 'should return default values and methods/actions', () => {
    const { result } = renderHook( () => useGifs() );
    expect( result.current.gifts.length ).toBe(0);
    expect( result.current.previousTerms.length ).toBe(0);
    expect( typeof result.current.handleSearch ).toBe('function');
    expect( typeof result.current.handleTermClick ).toBe('function');
  });
  test( 'should return a list of gifs', async () => {
    const { result } = renderHook( ()=> useGifs());
    await act( async () => {
      await result.current.handleSearch('goku');
    });
    expect( result.current.gifts.length ).toBeGreaterThan(0);
    expect( result.current.previousTerms.length ).toBeGreaterThan(0);
  });

  test( 'should return a list of gifs when handleTermClicked is Called', async () => {
    const { result } = renderHook( () => useGifs()); 
    await act( async () => {
      await result.current.handleSearch('goku');
      await result.current.handleSearch('naruto');
    });

    await act( async () => {
      await result.current.handleTermClick('goku');
    });

    expect( result.current.gifts.length ).toBeGreaterThan(0);
    expect( result.current.previousTerms.length ).toBeGreaterThan(0);
  });
});