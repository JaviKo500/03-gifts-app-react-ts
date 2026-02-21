import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { MyCounterApp } from './MyCounterApp';

describe('MyCounterApp.test', () => {
  test( 'should render the counter', () => {
    render(<MyCounterApp />);
    expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain(
      'Counter: 2'
    );

    expect( screen.getByRole('button', { name: '+' }).innerHTML ).toContain('+');
    expect( screen.getByRole('button', { name: '+' }) ).toBeDefined();
    expect( screen.getByRole('button', { name: '-' }).innerHTML ).toContain('-');
    expect( screen.getByRole('button', { name: '-' }) ).toBeDefined();
    expect( screen.getByRole('button', { name: 'Reset' }).innerHTML ).toContain('Reset');
    expect( screen.getByRole('button', { name: 'Reset' }) ).toBeDefined();
  });

  test( 'should increment the counter', () => {
    render(<MyCounterApp />);
    const labelH1 = screen.getByRole('heading', { level: 1 });
    const button = screen.getByRole('button', { name: '+' });
    fireEvent.click(button);
    expect( labelH1.innerHTML ).toContain('Counter: 3');
  });

  test( 'should decrement the counter', () => {
    render(<MyCounterApp />);
    const labelH1 = screen.getByRole('heading', { level: 1 });
    const button = screen.getByRole('button', { name: '-' });
    fireEvent.click(button);
    expect( labelH1.innerHTML ).toContain('Counter: 1');
  });

  test( 'should reset the counter', () => {
    render(<MyCounterApp />);
    const labelH1 = screen.getByRole('heading', { level: 1 });
    const button = screen.getByRole('button', { name: '-' });
    fireEvent.click(button);
    expect( labelH1.innerHTML ).toContain('Counter: 1');
    const buttonReset = screen.getByRole('button', { name: 'Reset' });
    fireEvent.click(buttonReset);
    expect( labelH1.innerHTML ).toContain('Counter: 2');
  });
});