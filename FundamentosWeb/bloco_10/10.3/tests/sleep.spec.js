const { TestWatcher } = require("jest");
const sleep = require("../src/sleep");

describe("testando as operações", () => {
  sleep.subtrair = jest.fn();
  test("se subtrair foi chamada", () => {
    sleep.subtrair();
    expect(sleep.subtrair).toHaveBeenCalled();
  });

  test("valor da multiplicação", () => {
    sleep.multiplicar = jest.fn().mockReturnValue(10);
    sleep.multiplicar();
    expect(sleep.multiplicar).toHaveBeenCalled();
    expect(sleep.multiplicar(2, 5)).toBe(10);
  });

  test("Testa chamada, retorno e parâmetros passados para soma com entrada de dois valores", async () => {
    const mockSomar = jest.spyOn(sleep, "somar");
    mockSomar.mockResolvedValue(5);
  
    mockSomar(2, 3);
    expect(mockSomar).toHaveBeenCalled();
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar).toHaveBeenCalledWith(2, 3);
    await expect(mockSomar(2, 3)).resolves.toBe(5);
  });

  test("Testa a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.", () => {
    const mockDividir = jest.spyOn(sleep, "dividir");
    mockDividir.mockReturnValue(15);
    mockDividir.mockReturnValueOnce(2);
    mockDividir.mockReturnValueOnce(5);

    expect(mockDividir(4, 2)).toBe(2);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(1);
    expect(mockDividir).toHaveBeenCalledWith(4, 2);

    expect(mockDividir(10, 2)).toBe(5);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(2);
    expect(mockDividir).toHaveBeenCalledWith(10, 2);

    expect(mockDividir(30, 2)).toBe(15);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(3);
    expect(mockDividir).toHaveBeenCalledWith(30, 2);
  });

  test('Mock da função subtrair de modo que possa restaurar sua implementação original', () => {
    const mockSubtrair = jest.spyOn(sleep, "subtrair");
    mockSubtrair.mockImplementation((a, b) => a + b);
    mockSubtrair.mockReturnValue(10);
  
    expect(mockSubtrair(5, 5)).toBe(10);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(5, 5);
  
    mockSubtrair.mockRestore();
    mockSubtrair.mockReturnValue(8);
  
    expect(mockSubtrair(10, 2)).toBe(8);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
  });
});
