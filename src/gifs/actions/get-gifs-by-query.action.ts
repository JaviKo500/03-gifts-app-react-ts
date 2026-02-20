import type { GiphyResponse } from '../interfaces/giphy.response';
import type { Gif } from '../interfaces/gif.interface';
import { giphyApi } from '../api/giphy.api';

export const getGifsByQueryAction = async ( query: string ): Promise<Gif[]> => {
  const response = await giphyApi<GiphyResponse>(
    '/search',
    {
      params: {
        'q': query,
        limit: 10,
      }
    }
  );

  if ( !response.data.data ) return [];
  return response.data.data?.map( (gift) => ({
    id: gift.id ?? '',
    title: gift.title ?? '',
    url: gift.images?.original?.url ?? '',
    width: Number(gift.images?.original?.width ?? '0'),
    height: Number(gift.images?.original?.height ?? '0'),
  }) );
}