import axios from 'axios'
import type { GiphyResponse } from '../interfaces/giphy.response';
import type { Gif } from '../interfaces/gif,interface';

export const getGifsByQueryAction = async ( query: string ): Promise<Gif[]> => {
  const response = await axios.get<GiphyResponse>(
    'https://api.giphy.com/v1/gifs/search',
    {
      params: {
        'q': query,
        limit: 15,
        lang: 'es',
        api_key: 'JYFliq5Q3HMvcD6QLDTYzXDx6EvzlQfN',
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