import React from 'react';

interface seriesContentProps {
  series: { resourceURI: string; name: string }[];
}

const seriesContent: React.FC<seriesContentProps> = ({ series }) => {
  if (!series || series.length === 0) return <p>Nenhum criador encontrado.</p>;

  return (
    <div className='descricao_modal_container'>
      {series.map((creator) => (
        <div key={creator.resourceURI || Math.random()} >
          <div className="descricao_modal">
            <h4>{creator.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default seriesContent;