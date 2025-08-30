import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner', () => {
  test('Deve renderizar o Spinner', () => {
    render(<Spinner />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });

  test('Deve ter as classes CSS padrão', () => {
    render(<Spinner />);
    const spinner = screen.getByTestId('spinner');

    expect(spinner).toHaveClass('w-5');
    expect(spinner).toHaveClass('h-5');
    expect(spinner).toHaveClass('border-4');
    expect(spinner).toHaveClass('border-t-transparent');
    expect(spinner).toHaveClass('border-white');
    expect(spinner).toHaveClass('rounded-full');
    expect(spinner).toHaveClass('animate-spin');
  });

  test('Deve aplicar className extra passada via prop', () => {
    render(<Spinner className="custom-class" />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('custom-class');
  });
});
