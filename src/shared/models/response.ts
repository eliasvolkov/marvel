export interface IResponse {
  code?: number;
  status?: string;
  copyright?: string;
  attributionText?: string;
  attributionHTML?: string;
  data?: IData;
  etag?: string;
}

export interface IData {
  offset?: number;
  limit?: number;
  total?: number;
  count?: number;
  results?: Array<IResults>;
}

export interface IResults {
  id?: number;
  name?: string;
  description: string;
  modified?: Date;
  resourceURI?: string;
  urls?: Array<IUrls>;
  thumbnail?: Array<IThumbnail>;
  comics?: Array<IComics>;
  stories?: Array<IComics>;
  events?: Array<IComics>;
  series?: Array<IComics>;
}

interface IUrls {
  type?: string;
  url?: string;
}

interface IThumbnail {
  path?: string;
  extension?: string;
}

interface IComics {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Array<IComicsItems> | Array<IStoriesItems>;
}

interface IComicsItems {
  resourceURI?: string;
  name?: string;
}

interface IStoriesItems extends IComicsItems {
  type?: string;
}
