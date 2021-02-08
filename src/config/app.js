/* eslint-disable no-console */
import config from './config';
import CmsLoader from './boot-loaders/cms.loader';

const loadersServer = [CmsLoader];

const loadersClient = [...loadersServer];

class App {
  static boot() {
    this.config = config;
    const isClient = typeof window !== 'undefined';
    const loaders = isClient ? loadersClient : loadersServer;
    try {
      loaders.forEach((loader) => {
        loader.boot(App);
      });
      this.load = true;
      console.info('loaders done');
    } catch (error) {
      console.error('Error while booting the app', error);
    }
  }

  static getInstance() {
    if (this.load) return this;
    this.boot();
    return this;
  }
}

export default App;
