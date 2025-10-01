import { useEffect, useState } from "react";
import Input from "../../components/Input";
import Tabela from "../../components/Tabela";
import "./Home.css";
import Paginacao from "../../components/Paginacao";
import type { IListaPersonagens } from "../../types/iPersonagem";
import { getListaPersonagens } from "../../routes/personagens";

export default function Home() {
  const [personagens, setPersonagens] = useState<IListaPersonagens | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [busca, setBusca] = useState("");
  const [debouncedBusca, setDebouncedBusca] = useState("");

  const tamanho_pagina = 10;

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedBusca(busca);
      setPaginaAtual(1);
    }, 500);

    return () => clearTimeout(handler);
  }, [busca]);

  const carregaPersonagens = async (pagina: number, filtro: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const offset = (pagina - 1) * tamanho_pagina;

      const params: Record<string, string> = {
        limit: tamanho_pagina.toString(),
        offset: offset.toString(),
      };

      if (filtro) {
        params.nameStartsWith = filtro;
        params.offset = "0";
      }

      const data = (await getListaPersonagens(params)) as IListaPersonagens;

      setPersonagens(data);
    } catch (e) {
      console.error("Erro ao carregar dados:", e);
      setError("Não foi possível carregar os dados da API da Marvel.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    carregaPersonagens(paginaAtual, debouncedBusca);
  }, [paginaAtual, debouncedBusca]);

  return (
    <div>
      <div className="home">
        <div className="home_content">
          <div className="container_home">
            <h1>Busca de personagens</h1>
            <Input
              placeholder="Search"
              pesquisa={true}
              label="Nome do personagem"
              value={busca}
              onChange={(value) => setBusca(value)}
            />
          </div>
          <Tabela
            data={personagens || { offset: 0, limit: 0, total: 0, count: 0, results: [] }}
            erro={!!error}
            loading={isLoading}
          />
        </div>

      </div>
      {personagens && (
        <Paginacao
          totalPaginas={Math.ceil(personagens.total / tamanho_pagina)}
          paginaAtual={paginaAtual}
          setPaginaAtual={setPaginaAtual}
        />
      )}
    </div>

  );
}
