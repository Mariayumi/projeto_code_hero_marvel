import React from 'react';

interface CreatorsContentProps {
  creators: { resourceURI: string; name: string, role: string }[];
}

const CreatorsContent: React.FC<CreatorsContentProps> = ({ creators }) => {
  if (!creators || creators.length === 0) return <p>Nenhum criador encontrado.</p>;

  return (
    <div className='descricao_modal_container'>
      {creators.map((creator) => (
        <div key={creator.resourceURI || Math.random()} >
          <div className="descricao_modal">
            <h4 className="subtitulo_modal">{creator.name}</h4>
            <p>{creator.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CreatorsContent;