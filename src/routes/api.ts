import { getMarvelAuthParams } from "../services/auth";

const MARVEL_BASE_URL = import.meta.env.VITE_MARVEL_URL_API;

export async function marvelApiFetch(
  endpoint: string,
  params: Record<string, string> = {}
) {
  const authParams = getMarvelAuthParams();

  const url = new URL(`${MARVEL_BASE_URL}/${endpoint}`);

  Object.keys(authParams).forEach((key) =>
    url.searchParams.append(key, authParams[key as keyof typeof authParams])
  );

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  try {
    const response = await fetch(url.toString());

    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(
        `Marvel API Error ${response.status}: ${
          errorBody.status || "Erro desconhecido"
        }`
      );
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Erro ao buscar ${endpoint} na Marvel API:`, error);
    throw error;
  }
}
