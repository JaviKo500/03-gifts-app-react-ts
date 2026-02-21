import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { GifsApp } from './GifsApp';
describe('GifsApp.test', () => {
  test( 'Should render components properly', () => {
    const { container } = render(<GifsApp />);
    expect(container).toMatchSnapshot();
  });
});