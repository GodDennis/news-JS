import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'a3bf82a453024fe0ade653128c9c3211', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
