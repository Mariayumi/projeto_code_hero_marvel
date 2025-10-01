import type { IComics } from "../iComic";
import type {
  IItem,
  ISerieItem,
  IStorieItem,
  ICreatorItem,
} from "../iPersonagem";

export type ModalType = "creators" | "series" | "stories";

export type ModalDataArray =
  | IItem[]
  | ISerieItem[]
  | IStorieItem[]
  | ICreatorItem[];

export interface ComicsListProps {
  comics: IComics[];
  isLoading: boolean;
  error: string | null;
  onOpenModal: (type: ModalType, title: string, data: ModalDataArray) => void;
}

export type ModalState =
  | {
      isOpen: true;
      type: "creators";
      title: string;
      data: ICreatorItem[];
    }
  | {
      isOpen: true;
      type: "stories";
      title: string;
      data: IStorieItem[];
    }
  | {
      isOpen: true;
      type: "series";
      title: string;
      data: ISerieItem[];
    }
  | {
      isOpen: false;
      type: null;
      title: "";
      data: [];
    };
