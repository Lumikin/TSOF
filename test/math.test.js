import { describe, expect, it } from "vitest";
import {
  somar,
  ehPar,
  ehPrimo,
  dividir,
  elevar,
  fatorial,
  fibonacci,
  limitar,
  media,
  multiplicar,
  subtrair,
} from "../src/math.js";

describe("Biblioteca matemática.", () => {
  // Testes da função somar
  it("deve somar dois números.", () => {
    expect(somar(2, 3)).toBe(5); // Soma de dois positivos
    expect(somar(-2, 5)).toBe(3); // Soma com negativo e positivo
  });

  // Testes da função subtrair
  it("deve subtrair dois números.", () => {
    expect(subtrair(10, 5)).toBe(5); // Subtração entre positivos
    expect(subtrair(-4, 4)).toBe(-8); // Subtração com negativo e positivo
  });

  // Testes da função dividir
  it("deve dividir dois números.", () => {
    expect(dividir(10, 2)).toBe(5); // Divisão exata
    expect(dividir(3, 14, 3)).toBe(0.21428571428571427); // Divisão com resultado decimal
  });

  // Testes da função ehPar
  it("O numero deve ser par.", () => {
    expect(ehPar(9)).toBe(false); // Número ímpar retorna false
    expect(ehPar(4)).toBe(true); // Número par retorna true
  });

  // Testes da função elevar
  it("Elevar dois numeros.", () => {
    expect(elevar(3, 2)).toBe(9); // Potência de inteiro
    expect(elevar(8.185, 2)).toBe(66.99422500000001); // Potência de decimal
  });

  // Testes da função ehPrimo
  it("O numero deve ser primo.", () => {
    expect(ehPrimo(5)).toBe(true); // Número primo retorna true
    expect(ehPrimo(4)).toBe(false); // Número não primo retorna false
  });

  // Testes da função fatorial
  it("Fazer o fatorial de um numero.", () => {
    expect(fatorial(10)).toBe(3628800); // Fatorial de 10
    expect(fatorial(999)).toBe(Infinity); // Fatorial muito grande retorna Infinity
  });

  // Testes da função fibonacci
  it("Resolver a formula de fibonacci", () => {
    expect(fibonacci(27)).toBe(196418); // 27º termo de fibonacci
    expect(fibonacci(67)).toBe(44945570212853); // 67º termo de fibonacci
  });

  // Testes da função media
  it("Resolver a média dos numeros.", () => {
    expect(media([5, 4, 3, 2, 1])).toBe(3); // Média de 5 elementos
    expect(media([3, 2, 1])).toBe(2); // Média de 3 elementos
  });

  // Testes da função multiplicar
  it("Multiplicar dois numeros.", () => {
    expect(multiplicar(2, 3)).toBe(6); // Multiplicação de inteiros
    expect(multiplicar(33.5, 2)).toBe(67); // Multiplicação com decimal
  });

  // Testes da função limitar
  it("Limitar um numero dentro de um intervalo.", () => {
    expect(limitar(8, 6, 7)).toBe(7); // Valor acima do limite superior
    expect(limitar(9, 10, 11)).toBe(10); // Valor dentro do intervalo
  });
});
