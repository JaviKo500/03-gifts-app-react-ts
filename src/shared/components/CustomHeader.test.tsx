import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { CustomHeader } from './CustomHeader';
describe('CustomHeader.test', () => {
  const title = 'My title';
  const description = 'My description';
  test( 'Should render the title correctly ', () => {
    render( <CustomHeader title={title} /> );
    const titleRole = screen.getByRole('heading');
    expect( titleRole.textContent ).toBe(title);
  });
  test( 'should render the description when provided', () => {
    render(<CustomHeader title={title} description={description}/>)
    const descriptionRole = screen.getByText(description);
    expect( descriptionRole ).toBeDefined();
    expect( screen.getByRole('paragraph').textContent ).toBe(description);
    expect( descriptionRole.textContent ).toBe(description);
  });
  test( 'should not render description when not provider', () => {
    render(<CustomHeader title={title}/>)
    const descriptionRole = screen.queryByText(description);
    expect( descriptionRole ).toBeNull();
    expect( screen.queryByRole('paragraph') ).toBeNull();
  });
  test( 'should not render description when not provider - case 2', () => {
    const { container } =render(<CustomHeader title={title}/>)
    const divElement = container.querySelector('.content-center');
    const h1Element = divElement?.querySelector('h1');

    expect( h1Element?.textContent ).toBe(title);

    const paragraphElement = divElement?.querySelector('p');
    expect( paragraphElement ).toBeNull();
  });
});