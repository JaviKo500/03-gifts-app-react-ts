import { useRef, useState } from 'react';

import { getGifsByQueryAction } from '../actions/get-gifs-by-query.action';
import type { Gif } from '../interfaces/gif.interface';
// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifts, setPreviousGifts] = useState<Gif[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClick = async (term: string) => {
    if (gifsCache.current[term]) {
      setPreviousGifts(gifsCache.current[term]);
      return;
    }
    const listGifts = await getGifsByQueryAction(term);
    setPreviousGifts(listGifts);
    gifsCache.current[term] = listGifts;
  };

  const handleAddPreviousTerm = (query: string) => {
    query = query.toLowerCase().replaceAll(' ', '-');
    if (previousTerms.includes(query)) return;
    if (previousTerms.length === 8) previousTerms.pop();
    setPreviousTerms([query, ...previousTerms]);
  }

  const handleSearch = async (query: string = '') => {
    query = query.trim().toLowerCase();
    if (!query) return;
    handleAddPreviousTerm(query);
    const listGifts = await getGifsByQueryAction(query);
    setPreviousGifts(listGifts);
    if (!gifsCache.current[query]) {
      gifsCache.current[query] = listGifts;
    }
  }

  return {
    // props
    gifts,
    previousTerms,

    // actions
    handleSearch,
    handleTermClick,
  };
}