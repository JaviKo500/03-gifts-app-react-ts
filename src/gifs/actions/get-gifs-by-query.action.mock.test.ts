import { giphyResponseDataMock } from './../../../test/mock/giphy.response.data.mock';
import { describe, expect, test } from 'vitest';
import AxiosMockAdapter  from 'axios-mock-adapter';
import { giphyApi } from '../api/giphy.api';
import { getGifsByQueryAction } from './get-gifs-by-query.action';




describe('Get-gifs-by-query.action.mock.test', () => {
  const mock = new AxiosMockAdapter(giphyApi);
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
});