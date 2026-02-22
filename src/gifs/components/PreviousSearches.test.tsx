import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { PreviousSearches } from './PreviousSearches';
describe('PreviousSearches.test', () => {
  test( 'should render a list of searches', () => {
    const searches = ['goku', 'naruto', 'sasuke'];
    render(<PreviousSearches searches={searches} onLabelClick={() => console.log}/>);
    const list = screen.getAllByRole('listitem');
    expect( list.length ).toBe(searches.length);
  });
  test( 'should call onLabelClick when click on a list item', () => {
    const searches = ['goku', 'naruto', 'sasuke'];
    const onLabelClick = vi.fn();
    render(<PreviousSearches searches={searches} onLabelClick={onLabelClick}/>);
    const list = screen.getAllByRole('listitem');
    expect( list.length ).toBe(searches.length);
    fireEvent.click(list.at(0)!, searches.at(0));
    expect( onLabelClick ).toBeCalled();
    expect(onLabelClick).toBeCalledWith(searches.at(0));
  });
  test( 'should not a render list when searches is empty', () => {
    render(<PreviousSearches searches={[]} onLabelClick={() => console.log}/>);
    const list = screen.queryAllByRole('listitem');
    expect( list.length ).toBe(0);
  });
});