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
      expect( onQuery ).toHaveBeenCalled();
      expect( onQuery ).toHaveBeenCalledWith('goku');
    });

  });
  test( 'should call only once with the last value (debounce)', async () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={ onQuery }/>);
    const input = screen.getByRole('textbox');
    fireEvent.change( input, { target: {value: 'g'} } );
    fireEvent.change( input, { target: {value: 'go'} } );
    fireEvent.change( input, { target: {value: 'gok'} } );
    fireEvent.change( input, { target: {value: 'goku'} } );
    await waitFor( () => {
      expect( onQuery ).toHaveBeenCalledWith('goku');
      expect( onQuery ).toHaveBeenCalledTimes(1);
    });
  });
  test( 'should call onQuery when button clicked with input value', () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={ onQuery }/>);
    const input = screen.getByRole('textbox');
    fireEvent.change( input, { target: {value: 'goku'} } );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect( onQuery ).toHaveBeenCalledWith('goku');
    expect( onQuery ).toHaveBeenCalledTimes(1);
  });

  test( 'should the input has the correct placeholder value', () => {
    const value = 'Search gifs';
    render(<SearchBar placeholder={value} onQuery={() => console.log}/>);
    expect( screen.getByPlaceholderText(value) ).not.toBeNull(); 
  });
});