import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { MyCounterApp } from './MyCounterApp';

const handleAddMock = vi.fn();
const handleSubMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
  useCounter: () => ({
    count: 5,
    handleAdd: handleAddMock,
    handleSub: handleSubMock,
    handleReset: handleResetMock,
  })
}))
describe('MyCounterApp2.test', () => {
  beforeEach(() => {
    handleAddMock.mockClear();
    handleSubMock.mockClear();
    handleResetMock.mockClear();
  });
  test( 'should render the counter component', () => {
    render(<MyCounterApp />);
    expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain(
      'Counter: 5'
    );
    expect( screen.getByRole('button', { name: '+' }).innerHTML ).toContain('+');
    expect( screen.getByRole('button', { name: '+' }) ).toBeDefined();
    expect( screen.getByRole('button', { name: '-' }).innerHTML ).toContain('-');
    expect( screen.getByRole('button', { name: '-' }) ).toBeDefined();
    expect( screen.getByRole('button', { name: 'Reset' }).innerHTML ).toContain('Reset');
    expect( screen.getByRole('button', { name: 'Reset' }) ).toBeDefined();
  });

  test( 'should call handleAdd when button is clicked', () => {
    render(<MyCounterApp />);
    const button = screen.getByRole('button', { name: '+' });
    fireEvent.click(button);
    expect( handleAddMock ).toHaveBeenCalled();
    expect( handleAddMock ).toHaveBeenCalledTimes(1);
    expect( handleSubMock ).not.toHaveBeenCalled();
    expect( handleResetMock ).not.toHaveBeenCalled();
  });

  test( 'should call handleSub when button us clicked', () => {
    render(<MyCounterApp />);
    const button = screen.getByRole('button', { name: '-' });
    fireEvent.click(button);
    expect( handleSubMock ).toHaveBeenCalled();
    expect( handleSubMock ).toHaveBeenCalledTimes(1);
    expect( handleAddMock ).not.toHaveBeenCalled();
    expect( handleResetMock ).not.toHaveBeenCalled();
  });

  test( 'should call handleReset when button us clicked', () => {
    render(<MyCounterApp />);
    const button = screen.getByRole('button', { name: 'Reset' });
    fireEvent.click(button);
    expect( handleResetMock ).toHaveBeenCalled();
    expect( handleResetMock ).toHaveBeenCalledTimes(1);
    expect( handleAddMock ).not.toHaveBeenCalled();
    expect( handleSubMock ).not.toHaveBeenCalled();
  });
});