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
    expect(somar(2, 3)).toBe(5);
    expect(somar(-2, 5)).toBe(3);
  });

  // Testes da função subtrair
  it("deve subtrair dois números.", () => {
    expect(subtrair(10, 5)).toBe(5);
    expect(subtrair(-4, 4)).toBe(-8);
  });

  // Testes da função dividir
  it("deve dividir dois números.", () => {
    expect(dividir(10, 2)).toBe(5);
    expect(() => dividir(1, 0)).toThrow("Divisão por zero não é permitida.");
    expect(dividir(3, 14, 3)).toBe(0.21428571428571427);
  });

  // Testes da função ehPar
  it("O numero deve ser par.", () => {
    expect(ehPar(9)).toBe(false);
    expect(ehPar(4)).toBe(true);
  });

  // Testes da função elevar
  it("Elevar dois numeros.", () => {
    expect(elevar(3, 2)).toBe(9);
    expect(elevar(8.185, 2)).toBe(66.99422500000001);
  });

  // Testes da função ehPrimo
  it("O numero deve ser primo.", () => {
    expect(ehPrimo(5)).toBe(true);
    expect(ehPrimo(4)).toBe(false);
    expect(ehPrimo(21)).toBe(false);
    expect(ehPrimo(11)).toBe(true); // i=3 → 11 % 3 !== 0 (branch "falso") → loop termina → true
    expect(ehPrimo(2)).toBe(true); // if (numero === 2)
    expect(ehPrimo(1)).toBe(false); // numero <= 1
    expect(ehPrimo(3.5)).toBe(false); // !Number.isInteger(numero)
  });

  // Testes da função fatorial
  it("Fazer o fatorial de um numero.", () => {
    expect(fatorial(10)).toBe(3628800);
    expect(() => fatorial(-90)).toThrow(
      "Fatorial de número negativo não é permitido.",
    );
    expect(fatorial(0)).toBe(1);
    expect(fatorial(999)).toBe(Infinity);
  });

  // Testes da função fibonacci
  it("Resolver a formula de fibonacci", () => {
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(27)).toBe(196418);
    expect(fibonacci(67)).toBe(44945570212853);
  });

  it("Não deve aceitar números negativos na formula de fibonacci", () => {
    expect(() => fibonacci(-1)).toThrow(
      "A posição deve ser um número inteiro não negativo.",
    );
    expect(fibonacci(19)).toBe(4181);
  });

  // Testes da função media
  it("Resolver a média dos numeros.", () => {
    expect(media([5, 4, 3, 2, 1])).toBe(3);
    expect(media([3, 2, 1])).toBe(2);
    expect(() => media([])).toThrow(
      "É necessário informar uma lista de números válida.",
    ); // Lista vazia
    expect(() => media("não é array")).toThrow(
      "É necessário informar uma lista de números válida.",
    ); // Não é array
  });

  // Testes da função multiplicar
  it("Multiplicar dois numeros.", () => {
    expect(multiplicar(2, 3)).toBe(6);
    expect(multiplicar(33.5, 2)).toBe(67);
  });

  // Testes da função limitar
  it("Limitar um numero dentro de um intervalo.", () => {
    expect(limitar(8, 6, 7)).toBe(7);
    expect(limitar(9, 10, 11)).toBe(10);
    expect(() => limitar(5, 10, 2)).toThrow(
      "O valor mínimo não pode ser maior que o máximo.",
    ); // Minimo > Maximo
  });
});
