import { marvelApiFetch } from "./api";

export async function getListaEventos(params: Record<string, string> = {}) {
  try {
    const data = await marvelApiFetch("events", params);
    return data; 
  } catch (error) {
    console.error("Erro ao buscar eventos:", error);
    return [];
  }
}