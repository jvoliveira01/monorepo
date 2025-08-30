import axios from 'axios';
import getProducts from './product.service';
import mockProducts from '../mocks/mockProducts';

// Mock do axios
jest.mock('axios');

describe('productService', () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  afterEach(() => {
    jest.resetAllMocks();
  });

  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
  });

  test('Deve retornar os produtos quando a requisição for bem-sucedida', async () => {
    axios.get.mockResolvedValueOnce({ data: mockProducts });

    const products = await getProducts();

    expect(products).toEqual(mockProducts);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/products`);
  });

  test('Deve lançar erro quando a requisição falhar', async () => {
    const errorMessage = 'Erro de rede';
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    await expect(getProducts()).rejects.toThrow(errorMessage);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/products`);
  });
});
