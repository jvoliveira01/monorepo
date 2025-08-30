import { render, screen, fireEvent } from '@testing-library/react';
import Toast from './Toast';

describe('Toast', () => {
  const mockClose = jest.fn();

  const toasts = [
    { id: 1, message: 'Sucesso', type: 'success' },
    { id: 2, message: 'Erro', type: 'error' },
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Deve renderizar todos os toasts', () => {
    render(<Toast toasts={toasts} handleCloseToast={mockClose} />);

    expect(
      screen.getByText((content, _) => content === 'Sucesso')
    ).toBeInTheDocument();
    expect(
      screen.getByText((content, _) => content === 'Erro')
    ).toBeInTheDocument();
  });

  test('Deve exibir os ícones corretos conforme o tipo', () => {
    render(<Toast toasts={toasts} handleCloseToast={mockClose} />);

    const successIcon = screen.getByTestId('toast-success-icon');
    expect(successIcon).toBeInTheDocument();

    const errorIcon = screen.getByTestId('toast-error-icon');
    expect(errorIcon).toBeInTheDocument();
  });

  test('Deve chamar handleCloseToast com o id correto ao clicar no close', () => {
    render(<Toast toasts={toasts} handleCloseToast={mockClose} />);

    const closeIcon = screen.getAllByTestId('toast-close-icon');
    expect(closeIcon).toHaveLength(2);

    fireEvent.click(closeIcon[0]);
    expect(mockClose).toHaveBeenCalledWith(1);

    fireEvent.click(closeIcon[1]);
    expect(mockClose).toHaveBeenCalledWith(2);
  });
});
