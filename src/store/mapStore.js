import { action, computed, makeObservable, observable } from "mobx";
import { getPlaces } from "../api/places";

class MapStore {
  @observable address = "Метро Парк Культуры";
  @observable type = "cafe";
  @observable map = {
    viewport:{
      longitude:37.579445,
      latitude:55.731061,
      zoom: 11
    }
  }
  @observable currentPlace = {
    address: "Россия, Москва, улица Тимура Фрунзе, 11, стр. 7",
    title: "Кулинарная лавка братьев Караваевых",
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

  @action
  setType(type) {
    this.type = type;
  }
}

export default MapStore;
