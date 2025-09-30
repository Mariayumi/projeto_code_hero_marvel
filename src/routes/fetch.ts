import { getMarvelAuthParams } from "../services/auth";

const BASE_URL = "https://gateway.marvel.com/v1/public";

export async function fetchPersonagens() {
  const authParams = getMarvelAuthParams();

  // Cria a URL com os parâmetros de autenticação e outros filtros
  const url = new URL(`${BASE_URL}/characters`);

  // Anexa todos os parâmetros de autenticação na URL
  Object.keys(authParams).forEach((key) =>
    url.searchParams.append(key, authParams[key as keyof typeof authParams])
  );

  // Exemplo de filtro: ordenar pelo nome
  url.searchParams.append("orderBy", "name");

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data.results; // Retorna a lista de personagens
  } catch (error) {
    console.error("Erro ao buscar personagens da Marvel:", error);
    return [];
  }
}
