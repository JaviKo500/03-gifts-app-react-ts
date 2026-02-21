import { useState } from 'react';

import { getGifsByQueryAction } from '../actions/get-gifs-by-query.action';
import type { Gif } from '../interfaces/gif.interface';
const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifts, setPreviousGifts] = useState<Gif[]>([]);


  const handleTermClick = async (term: string) => {
    if (gifsCache[term]) {
      setPreviousGifts(gifsCache[term]);
      return;
    }
    const listGifts = await getGifsByQueryAction(term);
    setPreviousGifts(listGifts);
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
    if (!gifsCache[query]) {
      gifsCache[query] = listGifts;
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