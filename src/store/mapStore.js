import { action, computed, makeObservable, observable } from "mobx";
import { getPlaces } from "../api/places";

class MapStore {
  @observable address = "Метро Парк Культуры";
  @observable map = {
    viewport:{
      longitude:37.579445,
      latitude:55.731061,
      zoom: 11
    }
  }
  @observable currentPlace = {
    title:"",
  };
  @observable places = undefined;

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
