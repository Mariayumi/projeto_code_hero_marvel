import type { IListaPersonagens } from "../iPersonagem";

export interface TabelaProps {
  data: IListaPersonagens;
  erro?: boolean;
  loading?: boolean;
}
