import radio from "radio";
import UUID from 'uuid-js';

import PollingHttpStore from "./polling-http-store.jsx";

const cache = {

};

class Stores {

  static _getOrElse(name, fn) {
    let store = cache[name];

    if (!store) {
      cache[name] = fn.apply();

      store = cache[name];
    }

    return store;
  }

  static pollHttp(url) {
    return Stores._getOrElse(url, () => new PollingHttpStore(url));
  }
}

export default Stores;
