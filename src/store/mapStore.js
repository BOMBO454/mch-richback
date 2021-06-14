import {action, makeObservable, observable} from "mobx";

class MapStore {
  @observable address = "Метро Парк Культуры";

  constructor() {
    makeObservable(this); // https://mobx.js.org/enabling-decorators.html
  }

  @action
  setAddress(address) {
    this.address = address;
  }
}

export default MapStore;
