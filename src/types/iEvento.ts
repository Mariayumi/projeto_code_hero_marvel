import type { ICharacters, IComics, ICreators, ISeries, IStories, IThumbnail } from "./iPersonagem";

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
  comics: IComics;
  series: ISeries;
  stories: IStories;
  characters: ICharacters;
  creators: ICreators;
  next: { resourceURI: string; name: string } | null;
  previous: { resourceURI: string; name: string } | null;
}
