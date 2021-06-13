import { Map as YMap, YMaps, Placemark } from "react-yandex-maps";

function Map() {
  return (
      <YMaps modules={["geolocation", "geocode","Heatmap"]} query={{apikey: "3a938c7f-953d-484c-9fee-5d2b9c12bb53"}}>
        <YMap width={"600px"} height={"400px"} defaultState={{center: [55.75, 37.57], zoom: 9}}>
          <Placemark
            geometry={[55.75, 37.57]}
            options={{
              iconLayout: "default#image",
              iconImageSize: [30, 30],
              iconImageOffset: [-19, -60],
            }}
          />
        </YMap>
      </YMaps>
  )
}

export default Map