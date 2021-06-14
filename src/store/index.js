import React, {createContext, useContext} from "react";
import {observer, useLocalStore} from "mobx-react";
import {configure} from "mobx";

import MapStore from "./mapStore";

configure({
  useProxies: "never", // need for IE, disable Proxy objects :(
});

function createNewStore() {
  const s = {
    mapStore: new MapStore(),
  };

  return s;
}

const storeContext = React.createContext(null)

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(createNewStore)
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = () => {
  const store = React.useContext(storeContext)
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}