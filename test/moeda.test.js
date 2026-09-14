import { describe, expect, it, vi } from "vitest";
import axios from "axios";
import { buscarCotacao, converterMoeda } from "../src/moeda";

vi.mock("axios", () => ({
  default: {
    get: vi.fn(),
  },
}));

describe("Biblioteca de moedas", () => {
  it("Deve buscar a cotação atual com sucesso", async () => {
    axios.get.mockResolvedValue({
      data: {
        rates: { BRL: 5.36 },
      },
    });

    const cotacao = await buscarCotacao("USD", "BRL");
    expect(cotacao).toBe(5.36);
  });

  it("Deve lançar erro quando a moeda destino não for encontrada", async () => {
    axios.get.mockResolvedValue({
      data: {
        rates: {},
      },
    });

    expect(buscarCotacao("USD", "BRL")).rejects.toThrow(
      "Moeda destino não encontrada na resposta da API.",
    );
  });

  it("Deve converter a moeda", async () => {
    axios.get.mockResolvedValue({
      data: {
        rates: { BRL: 5.36 },
      },
    });

    const cotacao = await converterMoeda(6, "USD", "BRL");
    expect(cotacao).toBe(32.16);
  });
  it("Deve lançar erro quando o valor for menor que zero", async () => {
    axios.get.mockResolvedValue({
      data: {
        rates: { BRL: 5.36 },
      },
    });

    expect(converterMoeda(0, "USD", "YEN")).rejects.toThrow(
      "O valor deve ser maior que zero.",
    );
  });
});
