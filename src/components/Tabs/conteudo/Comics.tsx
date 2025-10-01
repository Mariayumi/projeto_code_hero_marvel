import type { IPersonagem } from "../../../types/iPersonagem";

interface ComicsTabProps {
  personagem: IPersonagem;
}

export default function ComicsConteudo({ personagem }: ComicsTabProps) {
  return (
    <div>
      <h3>Comics</h3>
      <ul>
        {personagem.comics?.items.map((comic, index) => (
          <li key={index}>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
}