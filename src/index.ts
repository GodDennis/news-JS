import App from './components/app/app';
import './global.css';

type Source = {
    id: string;
    name: string;
};

export interface INews {
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    source: Source;
}

export interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface IDrawSource {
    status: string;
    sources: ISource[];
}
export interface IDrawNews {
    status: string;
    totalResults: number;
    articles: INews[];
}

const app = new App();
app.start();
