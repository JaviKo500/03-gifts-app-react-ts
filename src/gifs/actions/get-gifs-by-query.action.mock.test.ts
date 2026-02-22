import { giphyResponseDataMock } from './../../../test/mock/giphy.response.data.mock';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import AxiosMockAdapter  from 'axios-mock-adapter';
import { giphyApi } from '../api/giphy.api';
import { getGifsByQueryAction } from './get-gifs-by-query.action';




describe('Get-gifs-by-query.action.mock.test', () => {
  let mock = new AxiosMockAdapter(giphyApi);

  beforeEach(() => {
    mock = new AxiosMockAdapter(giphyApi);
  });
  
  test( 'should return a list of gifs', async () => {
    mock.onGet('/search',).reply(
      200,
      giphyResponseDataMock
    );
    const gifs = await getGifsByQueryAction('goku');
    expect( Array.isArray(gifs) ).toBeTruthy();
    expect( gifs.length ).toBeLessThanOrEqual(10);
    gifs.forEach( (gif) => {
      expect( typeof gif.id ).toBe('string');
      expect( typeof gif.title ).toBe('string');
      expect( typeof gif.url ).toBe('string');
      expect( typeof gif.width ).toBe('number');
      expect( typeof gif.height ).toBe('number');
    });
  });

  test( 'should return an empty list of gifs if query iis empty', async () => {
    mock.restore();
    const gifs = await getGifsByQueryAction('');
    expect( Array.isArray(gifs) ).toBeTruthy();
    expect( gifs.length ).toBe(0);
  });

  test( 'should handle error when the api return an error',async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error')
      .mockImplementation( () => {} );
    mock.onGet('/search',).reply(
      400,
      {
        data: {
          message: 'Bad request',
        }
      }
    );
    const gifs = await getGifsByQueryAction('goku');
    expect( gifs.length ).toBe(0);
    expect( consoleErrorSpy ).toHaveBeenCalled();
    expect( consoleErrorSpy ).toHaveBeenCalledTimes(2);
    expect( consoleErrorSpy ).toHaveBeenCalledWith( expect.anything() );
  });

  test( 'should return an empty list of gifs when the api not return a correct data value', async () => {
    mock.onGet('/search').reply(
      200,
      {
      }
    );
    const gifs = await getGifsByQueryAction('goku');
    expect( gifs.length ).toBe(0);
  });

  test( 'should a return gift list with default values when not exist data valid', async () => {
    mock.onGet('/search').reply(
      200,
      {
        data:[
          {}
        ]
      }
    );

    const gifs = await getGifsByQueryAction('goku');
    expect( gifs.length ).toBe(1);
    for (const gif of gifs) {
      expect( gif.id ).toBe('');
      expect( gif.title ).toBe('');
      expect( gif.url ).toBe('');
      expect( gif.width ).toBe(0);
      expect( gif.height ).toBe(0);
    }

  });
});