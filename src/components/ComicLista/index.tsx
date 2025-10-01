import React from 'react';
import ComicItem from './ComicItem';
import type { ComicsListProps } from '../../types/components/IListaComics';

const ComicsList: React.FC<ComicsListProps> = ({
    comics,
    isLoading,
    error,
    onOpenModal
}) => {

    if (isLoading) {
        return (
            <div style={{display: "grid", gap: "16px", marginBottom: "16px"}}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <div className="skeleton" key={index}></div>
                ))}
            </div>
        );
    }

    if (error) {
        return <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Erro ao carregar quadrinhos: {error}</div>;
    }

    if (comics.length === 0) {
        return <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Nenhum quadrinho encontrado.</div>;
    }

    return (
        <div className="comics_list">
            {comics.map((comic) => (
                <ComicItem
                    key={comic.id}
                    comic={comic}
                    onOpenModal={onOpenModal}
                />
            ))}
        </div>
    );
};

export default ComicsList;