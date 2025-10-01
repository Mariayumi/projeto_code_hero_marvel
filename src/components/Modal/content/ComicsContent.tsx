import React from 'react';

interface comicsContentProps {
  comics: { resourceURI: string; name: string }[];
}

const comicsContent: React.FC<comicsContentProps> = ({ comics }) => {
  if (!comics || comics.length === 0) return <p>Nenhum criador encontrado.</p>;

  return (
    <div className='descricao_modal_container'>
      {comics.map((creator) => (
        <div key={creator.resourceURI || Math.random()} >
          <div className="descricao_modal">
            <h4>{creator.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default comicsContent;