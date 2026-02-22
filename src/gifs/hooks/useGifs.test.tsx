import { renderHook } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { useGifs } from './useGifs';
import { act } from 'react';
import * as gifsAction from '../actions/get-gifs-by-query.action';

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

  test( 'should return a list of gifs from cache', async () => {
    
    const { result } = renderHook( () => useGifs() );
    await act( async () => {
      await result.current.handleTermClick('goku');
    });

    vi.spyOn( gifsAction, 'getGifsByQueryAction' )
      .mockRejectedValue( new Error('This is mock error') );
      
    await act( async () => {
      await result.current.handleTermClick('goku');
    });

    expect( result.current.gifts.length ).toBeGreaterThan(0);
  });

  test( 'should return no more than 8 previous terms', async () => {
    const { result } = renderHook( () => useGifs() );
    vi.spyOn( gifsAction, 'getGifsByQueryAction' )
      .mockResolvedValue( [] );
    await act( async () => {
      await result.current.handleSearch('goku');
    });
    await act( async () => {
      await result.current.handleSearch('naruto');
    });
    await act( async () => {
      await result.current.handleSearch('sasuke');
    });
    await act( async () => {
      await result.current.handleSearch('jiraiya');
    });
    await act( async () => {
      await result.current.handleSearch('kakashi');
    });
    await act( async () => {
      await result.current.handleSearch('saitama');
    });
    await act( async () => {
      await result.current.handleSearch('dog');
    });
    await act( async () => {
      await result.current.handleSearch('cat');
    });
    await act( async () => {
      await result.current.handleSearch('auron');
    });

    expect( result.current.previousTerms.length ).toBe(8);
    expect( result.current.previousTerms.at(0) ).toBe('auron');
    expect( result.current.previousTerms.at(-1) ).toBe('naruto');
  });
  test( 'should not add term in previous terms list when term is empty', async () => {
    const { result } = renderHook( () => useGifs()); 
    vi.spyOn( gifsAction, 'getGifsByQueryAction' )
      .mockResolvedValue( [] );
    await act( async () => {
      await result.current.handleSearch('');
    });

    expect( result.current.previousTerms.length ).toBe(0);
  });
  test( 'should not add term if includes in previous terms', async () => {
    const { result } = renderHook( () => useGifs() );
    vi.spyOn( gifsAction, 'getGifsByQueryAction' )
      .mockResolvedValue( [] );
    await act( async () => {
      await result.current.handleSearch('goku');
    });

    await act( async () => {
      await result.current.handleSearch('goku');
    });

    expect( result.current.previousTerms.length ).toBe(1);
    expect( result.current.previousTerms.at(0) ).toBe('goku');
  });
});