import type { IListaPersonagens } from "../../types/iPersonagem";
import "./Tabela.css";
import { Link } from "react-router-dom";
import type { IPersonagem } from "../../types/iPersonagem";

interface TabelaProps {
  data: IListaPersonagens;
  erro?: boolean;
  loading?: boolean;
}

export default function Tabela({ data, erro, loading }: TabelaProps) {
  return (
    <div>
      <div className="header_tabela">
        <p className="header_personagem">Personagem</p>
        <p className="header_series">Séries</p>
        <p className="header_eventos">Eventos</p>
      </div>

      {loading ? (
        <div className="lista_tabela">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="skeleton" key={index}></div>
          ))}
        </div>
      ) : erro ? (
        <p>Ocorreu um erro ao carregar os dados.</p>
      ) : data.results.length === 0 ? (
        <p>Nenhum personagem encontrado.</p>
      ) : (
        <div className="lista_tabela">
          {data.results.map((personagem: IPersonagem) => (
            <Link to={`/${personagem.id}`} key={personagem.id}>
              <div className="item_tabela">
                <div className="info_personagem">
                  <img
                    src={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`}
                    alt={personagem.name}
                    className="foto_personagem"
                  />
                  <p>{personagem.name}</p>
                </div>

                <div className="info_serie">
                  {personagem.series.items.slice(0, 3).map((s, i) => (
                    <span key={i}>{s.name}</span>
                  ))}
                </div>

                <div className="info_evento">
                  {personagem.events.items.slice(0, 3).map((e, i) => (
                    <span key={i}>{e.name}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}