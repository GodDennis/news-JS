import { IDrawNews, IDrawSource } from '../..';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data) => this.view.drawNews(data as IDrawNews))
        );
        this.controller.getSources((data) => this.view.drawSources(data as IDrawSource));
    }
}

export default App;
