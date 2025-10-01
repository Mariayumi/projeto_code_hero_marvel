import React from 'react';
import type { seriesContentProps } from '../../../types/components/IModal';

const seriesContent: React.FC<seriesContentProps> = ({ series }) => {
  if (!series || series.length === 0) return <p>Nenhuma série encontrada.</p>;

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