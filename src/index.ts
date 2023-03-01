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

const app = new App();
app.start();
