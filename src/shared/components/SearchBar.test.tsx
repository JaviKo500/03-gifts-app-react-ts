import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import{ describe, expect, test, vi } from 'vitest';
import { SearchBar } from './SearchBar';
describe('SearchBar.test', () => {
  test( 'should render a search bar correctly', () => {
    const {container } = render(<SearchBar onQuery={() => console.log}/>);
    expect( container ).toMatchSnapshot();
    expect( screen.getByRole('button') ).not.toBeNull();
  });
  test( 'should call onQuery with the correct value after 700ms', async  () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={ onQuery }/>);

    const input = screen.getByRole('textbox');
    fireEvent.change( input, { target: {value: 'goku'} } );

    await waitFor( () => {
      expect( onQuery ).toHaveBeenCalled()
      expect( onQuery ).toHaveBeenCalledWith('goku');
    });

  });
});