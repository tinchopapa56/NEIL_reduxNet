export interface IProduct {
    id: number;
    name: string;
    description: string; 
    price: number;
    imgUrl: string;
    type: string;
    brand: string;
    quantityStock: number;
}

// API RESPONSE
export interface IApiResponse {
    data:       IProduct[];
    status:     number;
    statusText: string;
    headers:    NetResHeaders;
    config:     Config;
    request:    Request;
}

export interface Config {
    transitional:      Transitional;
    adapter:           string;
    transformRequest:  null[];
    transformResponse: null[];
    timeout:           number;
    xsrfCookieName:    string;
    xsrfHeaderName:    string;
    maxContentLength:  number;
    maxBodyLength:     number;
    env:               Request;
    headers:           ConfigHeaders;
    method:            string;
    url:               string;
}

export interface Request {
}

export interface ConfigHeaders {
    Accept: string;
}

export interface Transitional {
    silentJSONParsing:   boolean;
    forcedJSONParsing:   boolean;
    clarifyTimeoutError: boolean;
}

export interface NetResHeaders {
    "content-type": string;
}
