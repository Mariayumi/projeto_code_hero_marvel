import type { CreatorsContentProps } from '../../../types/components/IModal';

export default function CreatorsContent({ creators }: CreatorsContentProps){
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

