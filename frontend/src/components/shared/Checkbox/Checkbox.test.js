import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  test('Deve renderizar com o texto do label', () => {
    render(<Checkbox>Personalização de funis de vendas</Checkbox>);
    const label = screen.getByText('Personalização de funis de vendas');
    expect(label).toBeInTheDocument();
  });

  test('Deve ser possível marcar e desmarcar', () => {
    render(<Checkbox>Personalização de funis de vendas</Checkbox>);
    const input = screen.getByRole('checkbox');

    expect(input).not.toBeChecked();

    fireEvent.click(input);
    expect(input).toBeChecked();

    fireEvent.click(input);
    expect(input).not.toBeChecked();
  });

  test('Deve chamar a função onChange ao clicar', () => {
    const handleChange = jest.fn();
    render(
      <Checkbox onChange={handleChange}>
        Personalização de funis de vendas
      </Checkbox>
    );
    const input = screen.getByRole('checkbox');

    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
