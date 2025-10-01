import type { ICreators, IEvents, IItem, IStories, IThumbnail } from "./iPersonagem";

export interface IListaComics {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: IComics[];
}

export interface IComics {
  id: string;
  digitalId: number;
  title: string;
  issueNumber: number;
  description: string | null;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: { type: string; language: string; text: string }[];
  resourceURI: string;
  urls: { type: string; url: string }[];
  series: IItem;
  variants: IItem[];
  thumbnail: IThumbnail;
  creators: ICreators;
  stories: IStories;
  events: IEvents;
}
