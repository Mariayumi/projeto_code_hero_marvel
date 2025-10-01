import React from "react";
import type { IEvento } from "../../types/iEvento";
import "./EventoItem.css";
import { formataData } from "../../utils/formataData";

type ModalType = "creators" | "comics" | "series" | "stories" | null;

interface EventoItemProps {
  evento: IEvento;
  onOpenModal: (type: ModalType, title: string, data: any[]) => void;
}

const EventoItem: React.FC<EventoItemProps> = ({ evento, onOpenModal }) => {
  const handleOpenCreatorsModal = () => {
    if (evento.creators && evento.creators.items.length) {
      onOpenModal(
        "creators",
        `Criadores de '${evento.title}'`,
        evento.creators.items
      );
    }
  };
  const handleOpenComicsModal = () => {
    if (evento.comics && evento.comics.items.length) {
      onOpenModal(
        "comics",
        `Comics de '${evento.title}'`,
        evento.comics.items
      );
    }
  };
  const handleOpenSeriesModal = () => {
    if (evento.series && evento.series.items.length) {
      onOpenModal("series", `Series de '${evento.title}'`, evento.series.items);
    }
  };
  const handleOpenStoriesModal = () => {
    if (evento.stories && evento.stories.items.length) {
      onOpenModal(
        "stories",
        `Stories de '${evento.title}'`,
        evento.stories.items
      );
    }
  };

  return (
    <div className="evento_item">
      <h3>
        {evento.title} ({formataData(evento.start)} - {formataData(evento.end)})
      </h3>
      <p>{evento.description || "Nenhuma descrição disponível."}</p>
      <div>
        {evento.previous && (
          <span>
            <b>Previous:</b> {evento.previous.name}
          </span>
        )}
        {evento.next && (
          <span>
            <b> | Next:</b> {evento.next.name}
          </span>
        )}
      </div>
      <div className="botoes_evento">
        <button
          onClick={handleOpenCreatorsModal}
          disabled={!evento.creators?.available}
        >
          Criadores
        </button>
        <button
          onClick={handleOpenComicsModal}
          disabled={!evento.comics?.available}
        >
          Quadrinhos
        </button>
        <button
          onClick={handleOpenSeriesModal}
          disabled={!evento.series?.available}
        >
          Séries 
        </button>
        <button
          onClick={handleOpenStoriesModal}
          disabled={!evento.stories?.available}
        >
          Histórias 
        </button>
      </div>
    </div>
  );
};

export default EventoItem;
