import { render, screen, fireEvent } from '@testing-library/react';
import { CustomButton } from '..';

jest.mock('../Spinner/Spinner', () => ({
  __esModule: true,
  default: () => <div data-testid="spinner" />,
}));

describe('CustomButton', () => {
  test('Deve renderizar o botão com o texto passado', () => {
    render(<CustomButton text="Enviar" />);
    const button = screen.getByRole('button', { name: /Enviar/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Enviar');
  });

  test('Deve renderizar o Spinner quando isLoading for true', () => {
    render(<CustomButton text="Enviar" isLoading />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();

    const buttonTexto = screen.queryByText('Enviar');
    expect(buttonTexto).toBeNull();
  });

  test('Deve chamar onClick quando o botão for clicado', () => {
    const handleClick = jest.fn();
    render(<CustomButton text="Enviar" onClick={handleClick} />);
    const button = screen.getByRole('button', { name: /Enviar/i });

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('Deve aplicar classes corretas quando isLoading for true', () => {
    render(<CustomButton text="Enviar" isLoading />);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('bg-primary-900');
    expect(button).toHaveClass('cursor-not-allowed');
  });

  test('Deve aplicar classes corretas quando isLoading for false', () => {
    render(<CustomButton text="Enviar" />);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('bg-primary-500');
    expect(button).toHaveClass('hover:bg-primary-900');
  });
});
