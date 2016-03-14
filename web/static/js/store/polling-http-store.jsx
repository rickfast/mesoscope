import radio from "radio";
import Store from "./store.jsx";
import "whatwg-fetch";

class PollingHttpStore extends Store {

  constructor(url, interval = 1000) {
    super();
    this._url = url;
    this._fetch();
    this._interval = setInterval(this._fetch.bind(this),
      interval);
  }

  _fetch() {
    fetch(this._url)
      .then(response => response.json())
      .then(json => this.updateState(json))
      .catch(ex => console.log('parsing failed', ex));
  }

  stop() {
    clearInterval(this._interval);
  }
}

export default PollingHttpStore;
