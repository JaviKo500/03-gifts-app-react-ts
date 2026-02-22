import { describe, expect, test } from 'vitest';
import { getGifsByQueryAction } from './get-gifs-by-query.action';
describe('Get-gifs-by-query.action.test', () => {
  test( 'should return a list of gifs', async () => {
    const gifs = await getGifsByQueryAction('goku');
    expect( Array.isArray(gifs) ).toBeTruthy();
    expect( gifs.length ).toBeLessThanOrEqual(10);
    const [ firstGif ] = gifs;
    expect( firstGif ).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
      width: expect.any(Number),
      height: expect.any(Number),
    });
  });
});