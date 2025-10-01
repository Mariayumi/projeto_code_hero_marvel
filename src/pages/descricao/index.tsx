import { useParams } from "react-router-dom";
import type { IItems, IPersonagem } from "../../types/iPersonagem";
import { useEffect, useState } from "react";
import { getPersonagemId } from "../../routes/personagens";
import "./Descricao.css";
import Paginacao from "../../components/Paginacao";
import { getListaEventos } from "../../routes/eventos";
import type { IListaEventos } from "../../types/iEvento";
import EventoItem from "../../components/EventoItem";
import Modal from "../../components/Modal";
import CreatorsContent from "../../components/Modal/content/CreatorsContent";
import ComicsContent from "../../components/Modal/content/ComicsContent";
import StoriesContent from "../../components/Modal/content/StoriesContent";
import SeriesContent from "../../components/Modal/content/SeriesContent";

type EventModalType = "creators" | "comics" | "series" | "stories";

type ModalState = {
  isOpen: boolean;
  type: EventModalType | null;
  title: string;
  data: { resourceURI: string; name: string; type?: string; role?: string }[];
};
export default function Descricao() {
  const { id } = useParams() as { id: string };
  const [personagem, setPersonagem] = useState<IPersonagem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [eventos, setEventos] = useState<IListaEventos | null>(null);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const tamanho_pagina = 10;
  const [isLoadingEvento, setIsLoadingEvento] = useState(true);
  const [errorEvento, setErrorEvento] = useState<string | null>(null);

  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    type: null,
    title: "",
    data: [],
  });

  useEffect(() => {
    const getPersonagem = async () => {
      if (!id) return;

      setIsLoading(true);
      setError(null);

      try {
        const data: IPersonagem | null = await getPersonagemId(Number(id));
        setPersonagem(data);
      } catch (error) {
        console.error("Erro ao carregar personagem:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getPersonagem();
  }, [id]);

  const carregarEventos = async (pagina: number) => {
    setIsLoadingEvento(true);
    setErrorEvento(null);

    try {
      const offset = (pagina - 1) * tamanho_pagina;

      const params: Record<string, string> = {
        limit: tamanho_pagina.toString(),
        offset: offset.toString(),
        characters: id,
      };

      const data = (await getListaEventos(params)) as IListaEventos;

      setEventos(data);
    } catch (e) {
      console.error("Erro ao carregar dados:", e);
      setErrorEvento("Não foi possível carregar os dados da API da Marvel.");
    } finally {
      setIsLoadingEvento(false);
    }
  };

  useEffect(() => {
    setPaginaAtual(1);
  }, [id]);

  useEffect(() => {
    carregarEventos(paginaAtual);
  }, [paginaAtual]);

  const onOpenModal = (type: EventModalType, title: string, data: IItems[]) => {
    setModalState({ isOpen: true, type, title, data });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: null, title: "", data: [] });
  };

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {isLoading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p>Erro ao carregar personagem: {error}</p>
      ) : (
        <div className="descricao">
          <div className="descricao_header">
            <img
              src={`${personagem?.thumbnail.path}.${personagem?.thumbnail.extension}`}
              className="img_personagem"
            />
            <div className="descricao_texto">
              <h1>{personagem?.name}</h1>
              <h4>{personagem?.descripton}</h4>
            </div>
          </div>
          <div>
            <h2>Eventos relacionados</h2>
            {isLoadingEvento ? (
              <p>Carregando...</p>
            ) : errorEvento ? (
              <p>Erro ao carregar eventos: {errorEvento}</p>
            ) : eventos && eventos.results.length === 0 ? (
              <p>Nenhum evento encontrado para este personagem.</p>
            ) : (
              eventos?.results.map((evento, key) => (
                <EventoItem
                  key={evento.id || Math.random()}
                  evento={evento}
                  onOpenModal={onOpenModal}
                />
              ))
            )}
          </div>
          {eventos && (
            <Paginacao
              totalPaginas={Math.ceil(eventos.total / tamanho_pagina)}
              paginaAtual={paginaAtual}
              setPaginaAtual={setPaginaAtual}
            />
          )}
        </div>
      )}
      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        size="lg"
      >
        {/* Renderiza o conteúdo com os dados já presentes em modalState.data */}
        {modalState.type === "creators" && (
          <CreatorsContent
            creators={modalState.data.map((item) => ({
              resourceURI: item.resourceURI,
              name: item.name,
              role: item.role ?? "",
            }))}
          />
        )}
        {modalState.type === "comics" && (
          <ComicsContent comics={modalState.data} />
        )}
        {modalState.type === 'series' && (
          <SeriesContent series={modalState.data} />
        )}
        {modalState.type === "stories" && (
          <StoriesContent
            stories={modalState.data.map((item) => ({
              resourceURI: item.resourceURI,
              name: item.name,
              type: item.type ?? "",
            }))}
          />
        )}
      </Modal>
    </div>
  );
}
