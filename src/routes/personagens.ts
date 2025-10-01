import type { IListaPersonagens, IPersonagem } from "../types/iPersonagem";
import { marvelApiFetch } from "./api";


export async function getListaPersonagens(params: Record<string, string> = {}) {
  try {
    const data = await marvelApiFetch("characters", params);
    return data as IListaPersonagens; 
  } catch (error) {
    console.error("Erro ao buscar personagens:", error);
    return [];
  }
}

export async function getPersonagemId(id: number) {
  try {
    const data = await marvelApiFetch(`characters/${id}`);
    return data.results[0] as IPersonagem | null; 
  } catch (error) {
    console.error("Erro ao buscar personagem:", error);
    return null;
  }
}
