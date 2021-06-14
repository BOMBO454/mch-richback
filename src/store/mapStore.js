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
    address: "Россия, Москва, улица Тимура Фрунзе, 11, стр. 7",
    title: "Кулинарная лавка братьев Караваевых",
  };
  @observable places = undefined;

  constructor() {
    makeObservable(this); // https://mobx.js.org/enabling-decorators.html
    this.getPlacesAction()
  }

  @action
  getPlacesAction(){
    getPlaces({address: this.address}).then(data => {
      this.places = data.places
      return data.places
    }).catch(err => {
      this.places = []
    })
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
