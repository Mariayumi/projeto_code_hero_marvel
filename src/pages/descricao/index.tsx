import { useParams } from "react-router-dom";
import type { IPersonagem } from "../../types/iPersonagem";
import { useEffect, useState, useCallback } from "react";
import { getPersonagemId } from "../../routes/personagens";
import "./Descricao.css";
import Paginacao from "../../components/Paginacao";
import type { IListaComics } from "../../types/iComic";
import Modal from "../../components/Modal";
import CreatorsContent from "../../components/Modal/content/CreatorsContent";
import StoriesContent from "../../components/Modal/content/StoriesContent";
import SeriesContent from "../../components/Modal/content/SeriesContent";
import { getListarComics } from "../../routes/comics";
import ComicsList from "../../components/ComicLista";
import type { ModalDataArray, ModalState, ModalType } from "../../types/components/IListaComics";

export default function Descricao() {
  const { id } = useParams() as { id: string };
  const [personagem, setPersonagem] = useState<IPersonagem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [Comics, setComics] = useState<IListaComics | null>(null);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const tamanho_pagina = 10;
  const [isLoadingComic, setIsLoadingComic] = useState(true);
  const [errorComic, setErrorComic] = useState<string | null>(null);

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

  const carregarComics = useCallback(
    async (pagina: number) => {
      setIsLoadingComic(true);
      setErrorComic(null);

      try {
        const offset = (pagina - 1) * tamanho_pagina;

        const params: Record<string, string> = {
          limit: tamanho_pagina.toString(),
          offset: offset.toString(),
          characters: id,
        };

        const data = (await getListarComics(params)) as IListaComics;

        setComics(data);
      } catch (e) {
        console.error("Erro ao carregar dados:", e);
        setErrorComic("Não foi possível carregar os dados da API da Marvel.");
      } finally {
        setIsLoadingComic(false);
      }
    },
    [id]
  );


  useEffect(() => {
    setPaginaAtual(1);
  }, [id]);

  useEffect(() => {
    carregarComics(paginaAtual);
  }, [paginaAtual, id, carregarComics]);

  const onOpenModal = (type: ModalType, title: string, data: ModalDataArray) => {
    setModalState({ isOpen: true, type, title, data } as ModalState);
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: null, title: "", data: [] });
  };

  return (
    <div style={{ width: "100%" }}>
      <div>
        <div className="descricao">
          <div className="descricao_content">
            {isLoading ? (
              <div className="skeleton" style={{marginTop: "24px"}}></div>
            ) : error ? (
              <p>{error}</p>
            ) : !personagem ? (
              <p>Personagem não encontrado.</p>
            ) : (
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
            )}

            <div>
              <h2>Comics relacionados</h2>

              <ComicsList
                comics={Comics?.results || []}
                isLoading={isLoadingComic}
                error={errorComic}
                onOpenModal={onOpenModal}
              />

            </div>
          </div>
        </div>
        {Comics && (
          <Paginacao
            totalPaginas={Math.ceil(Comics.total / tamanho_pagina)}
            paginaAtual={paginaAtual}
            setPaginaAtual={setPaginaAtual}
          />
        )}
      </div>

      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        size="lg"
      >
        {modalState.type === "creators" && (
          <CreatorsContent
            creators={modalState.data.map((item) => ({
              resourceURI: item.resourceURI,
              name: item.name,
              role: item.role,
            }))}
          />
        )}

        {modalState.type === 'series' && (
          <SeriesContent series={modalState.data} />
        )}
        {modalState.type === "stories" && (
          <StoriesContent
            stories={modalState.data.map((item) => ({
              resourceURI: item.resourceURI,
              name: item.name,
              type: item.type,
            }))}
          />
        )}
      </Modal>
    </div>
  );
}
