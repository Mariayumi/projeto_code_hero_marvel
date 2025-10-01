import React from 'react';
import type { StoriesContentProps } from '../../../types/components/IModal';

const StoriesContent: React.FC<StoriesContentProps> = ({ stories }) => {
  if (!stories || stories.length === 0) return <p>Nenhuma storie encontrada.</p>;

  return (
    <div className='descricao_modal_container'>
      {stories.map((creator) => (
        <div key={creator.resourceURI || Math.random()} >
          <div className="descricao_modal">
            <h4>{creator.name}</h4>
            <p>{creator.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoriesContent;