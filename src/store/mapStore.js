import {action, makeObservable, observable} from "mobx";

class MapStore {
  @observable address = "Метро Парк Культуры";
  @observable currentPlace = {
    title:""
  };

  constructor() {
    makeObservable(this); // https://mobx.js.org/enabling-decorators.html
  }

  @action
  setAddress(address) {
    this.address = address;
  }

  @action
  setCurrentPlace(currentPlace) {
    this.currentPlace = currentPlace;
  }
}

export default MapStore;
