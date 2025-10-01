import type { IItems, IThumbnail } from "./iPersonagem";

export interface IListaEventos {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: IEvento[];
}

export interface IEvento {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: { type: string; url: string }[];
  modified: string;
  start: string;
  end: string;
  thumbnail: IThumbnail;
  comics: IItems;
  stories: IItems;
  series: IItems;
  characters: IItems;
  creators: IItems;
  next: { resourceURI: string; name: string } | null;
  previous: { resourceURI: string; name: string } | null;
}
