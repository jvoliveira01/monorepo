import { render, screen } from '@testing-library/react';
import CustomText from './CustomText';

describe('CustomText', () => {
  test('Deve renderizar o texto passado via children', () => {
    render(<CustomText>Texto de teste</CustomText>);
    expect(screen.getByText('Texto de teste')).toBeInTheDocument();
  });

  test("Deve renderizar como h1 quando type='h1'", () => {
    render(<CustomText type="h1">Título H1</CustomText>);
    const element = screen.getByText('Título H1');
    expect(element.tagName).toBe('H1');
    expect(element).toHaveClass('text-2xl');
  });

  test("Deve renderizar como h3 quando type='h3'", () => {
    render(<CustomText type="h3">Título H3</CustomText>);
    const element = screen.getByText('Título H3');
    expect(element.tagName).toBe('H3');
    expect(element).toHaveClass('text-lg');
  });

  test("Deve renderizar como p quando type='p'", () => {
    render(<CustomText type="p">Parágrafo</CustomText>);
    const element = screen.getByText('Parágrafo');
    expect(element.tagName).toBe('P');
    expect(element).toHaveClass('text-base');
  });

  test("Deve renderizar como span quando type='caption'", () => {
    render(<CustomText type="caption">Legenda</CustomText>);
    const element = screen.getByText('Legenda');
    expect(element.tagName).toBe('SPAN');
    expect(element).toHaveClass('text-xs');
  });

  test('Deve renderizar como p quando type não informado', () => {
    render(<CustomText>Texto padrão</CustomText>);
    const element = screen.getByText('Texto padrão');
    expect(element.tagName).toBe('P');
    expect(element).toHaveClass('text-base');
  });

  test('Deve aplicar className customizada passada via prop', () => {
    render(
      <CustomText type="h1" className="classe_customizada">
        Título
      </CustomText>
    );
    const element = screen.getByText('Título');
    expect(element).toHaveClass('classe_customizada');
  });
});
