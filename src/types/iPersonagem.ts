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
    comics: IItems;
    series: IItems;
    stories: IItems;
    events: IItems;
    urls: { type: string; url: string }[];
}

export interface IThumbnail{
    path: string;
    extension: string;
}

export interface IItems{
    available: number;
    collectionURI: string;
    items: { resourceURI: string; name: string, type?: string, role?: string }[];
    returned: number;
}