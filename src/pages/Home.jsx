import Map from "../components/Map/Map";
import {useEffect, useState} from "react";
import {getPlaces} from "../api/places";
import {useStore} from "../store";
import {observer} from "mobx-react";

function Home() {
  const [places, setPlaces] = useState([])
  const {mapStore} = useStore()

  useEffect(() => {
    if (mapStore.address) {
      getPlaces({address: mapStore.address}).then(data => {
        console.log("data", data)
        setPlaces(data.places)
      }).catch(err => {
        alert(err)
        console.log("err", err)
      })
    }
  }, [mapStore.address])
  return (
    <Map places={places}/>
  )
}

export default observer(Home)