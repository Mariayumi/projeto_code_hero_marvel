import "./ComicItem.css";
import type { ComicItemProps } from "../../../types/components/IListaComics";

export default function ComicItem({comic, onOpenModal}: ComicItemProps) {
  const handleOpenCreatorsModal = () => {
    if (comic.creators && comic.creators.items.length) {
      onOpenModal("creators", `Creators de '${comic.title}'`, comic.creators.items);
    }
  };

  const handleOpenSeriesModal = () => {
    if (comic.series) {
      onOpenModal("series", `Series de '${comic.title}'`, [comic.series]);
    }
  };

  const handleOpenStoriesModal = () => {
    if (comic.stories && comic.stories.items.length) {
      onOpenModal("stories", `Stories de '${comic.title}'`, comic.stories.items);
    }
  };

  return (
    <div className="comic_item">
      <h3>
        {comic.title} (#{comic.issueNumber})
      </h3>
      <p>{comic.description || "Nenhuma descrição disponível."}</p>

      <div className="comic_info">
        <span><b>Formato:</b> {comic.format}</span>
        <span><b>Páginas:</b> {comic.pageCount}</span>
        <span><b>ISBN:</b> {comic.isbn || "N/A"}</span>
      </div>

      <div className="botoes_comic">
        <button
          onClick={handleOpenCreatorsModal}
          disabled={!comic.creators?.available}
        >
          Creators
        </button>
        <button
          onClick={handleOpenSeriesModal}
          disabled={!comic.series}
        >
          Series
        </button>
        <button
          onClick={handleOpenStoriesModal}
          disabled={!comic.stories?.available}
        >
          Stories
        </button>
      </div>
    </div>
  );
};

