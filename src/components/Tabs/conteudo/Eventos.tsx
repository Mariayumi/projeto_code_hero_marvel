import type { IPersonagem } from "../../../types/iPersonagem";

interface EventosTabProps {
  personagem: IPersonagem;
}

export default function EventosConteudo({ personagem }: EventosTabProps) {
  return (
    <div>
      <h3>Eventos</h3>
      <ul>
        {personagem.events?.items.map((evento, index) => (
          <li key={index}>{evento.name}</li>
        ))}
      </ul>
    </div>
  );
}