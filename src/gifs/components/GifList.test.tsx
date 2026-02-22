import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest'
import { GifList } from './GifList';
import { gifsDataMock } from '../../../test/mock/gifs.data.mock';
describe('GifList.test', () => {
  test( 'should not render a list of gifs when gifs is empty', () => {
    const { container } =  render(<GifList gifs={[]}/>);
    const gifs = container.querySelectorAll('.gif-card');
    expect( gifs?.length ).toBe(0);
  });
  test( 'should render a list of gifs when gifs is not empty', () => {
    render(<GifList gifs={gifsDataMock}/>);
    const titles = screen.getAllByRole('heading', { level: 3 });
    expect( titles.length ).toBe(gifsDataMock.length);
  });
});