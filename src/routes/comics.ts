import { marvelApiFetch } from "./api";

export async function getListarComics(params: Record<string, string> = {}) {
  try {
    const data = await marvelApiFetch(`comics`, params);
    return data;
  } catch (error) {
    console.error("Erro ao buscar comics:", error);
    return [];
  }
}
