import { useMemo, useState } from "react";
import "./Tabela.css";
import Paginacao from "../Paginacao/Paginacao";
import { Link } from "react-router-dom";

export interface Personagem {
  id: number;
  nome: string;
  fotoUrl: string;
  series: string[];
  eventos: string[];
}

export interface TabelaProps {
  data: Personagem[];
}

const ITENS_POR_PAGINA = 10;

export default function Tabela({ data }: TabelaProps) {
  const [paginaAtual, setPaginaAtual] = useState(1);

  const totalPaginas = Math.ceil(data.length / ITENS_POR_PAGINA);
  const temPaginacao = data.length > ITENS_POR_PAGINA;

  const itensExibidos = useMemo(() => {
    const indiceInicial = (paginaAtual - 1) * ITENS_POR_PAGINA;
    const indiceFinal = indiceInicial + ITENS_POR_PAGINA;
    return data.slice(indiceInicial, indiceFinal);
  }, [data, paginaAtual]);

  const irParaPagina = (pagina: number) => {
    if (pagina >= 1 && pagina <= totalPaginas) {
      setPaginaAtual(pagina);
    }
  };

  const irParaPrimeira = () => setPaginaAtual(1);
  const irParaUltima = () => setPaginaAtual(totalPaginas);
  const irParaAnterior = () => irParaPagina(paginaAtual - 1);
  const irParaProxima = () => irParaPagina(paginaAtual + 1);

  return (
    <div>
      <div className="header_tabela">
        <p>Personagem</p>
        <p>Séries</p>
        <p>Eventos</p>
      </div>
      <div className="lista_tabela">
        {itensExibidos.map((personagem) => (
          <Link to={`/${personagem.id}`} key={personagem.id}>
            <div className="item_tabela">
              <div className="info_personagem">
                <img
                  src={personagem.fotoUrl}
                  alt={personagem.nome}
                  className="foto_personagem"
                />
                <p>{personagem.nome}</p>
              </div>
              <div className="info_serie">
                {personagem.series.slice(0, 3).map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <div className="info_evento">
                {personagem.eventos.slice(0, 3).map((e, i) => (
                  <span key={i}>{e}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {temPaginacao && (
        <Paginacao
          paginaAtual={paginaAtual}
          totalPaginas={totalPaginas}
          irParaPagina={irParaPagina}
          irParaPrimeira={irParaPrimeira}
          irParaUltima={irParaUltima}
          irParaAnterior={irParaAnterior}
          irParaProxima={irParaProxima}
        />
      )}
    </div>
  );
}
