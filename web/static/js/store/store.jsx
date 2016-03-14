import radio from "radio";
import UUID from 'uuid-js';

class Store {

  constructor() {
    this._topic = UUID.create();
    this._state = [];
  }

  subscribe(handler) {
    radio(this._topic).subscribe(handler);
  }

  unsubscribe(handler) {
    radio(this._topic).unsubscribe(handler);
  }

  updateState(state) {
    this._state = state;
    radio(this._topic).broadcast(this._state);
  }

  getAll() {
    return this._state;
  }

  findOne(fn, context = this) {
    return this._state.find(fn, context);
  }

  find(fn, context = this) {
    return this._state.filter(fn, context);
  }
}

export default Store;
