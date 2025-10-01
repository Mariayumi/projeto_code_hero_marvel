export interface IListaPersonagens{
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: IPersonagem[];
}

export interface IPersonagem{
    id: number;
    name: string;
    descripton: string;
    modified: string;
    thumbnail: IThumbnail;
    resourceURI: string;
    comics: IComics;
    series: ISeries;
    stories: IStories;
    events: IEvents;
    urls: { type: string; url: string }[];
}

export interface IThumbnail{
    path: string;
    extension: string;
}

export interface IStories extends IDadosItems{
    items: IStorieItem[];
}

export interface IComics extends IDadosItems{
    items: IItem[]
}

export interface ISeries extends IDadosItems{
    items: ISerieItem[]
}

export interface ICreators extends IDadosItems{
    items: ICreatorItem[]
}

export interface ICharacters extends IDadosItems{
    items: IItem[]
}

export interface IEvents extends IDadosItems{
    items: IItem[]
}

export interface IDadosItems{
    available: number;
    collectionURI: string;
    returned: number;
}

export interface IItem{
    resourceURI: string;
    name: string;
}

export interface ISerieItem extends IItem{
    type: string;
}

export interface IStorieItem extends IItem{
    type: string;
}

export interface ICreatorItem extends IItem{
    role: string;
}