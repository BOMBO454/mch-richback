import {Map as YMap, YMaps, Placemark} from "react-yandex-maps";
import {formattedMoney} from "../../helpers/money";
import { useEffect, useRef } from "react";
import { getHeatMap, getPlaces } from "../../api/places";

function Map({places}) {
  const mapRef = useRef();
  useEffect(() => {
      getHeatMap({lat:55.731061,lng:37.579445,radius:0.005}).then(data => {
        console.log("data", data)
        console.log("window.ymaps", window.ymaps)
        window.ymaps.modules.require(['Heatmap'], function (Heatmap) {
          console.log("Heatmap", Heatmap)
          let mapData = data.heatmap.map(h=>([h.lng,h.lat])),
            heatmap = new Heatmap(mapData);
          heatmap.setMap(mapRef.current);
        });

      }).catch(err => {
        alert(err)
        console.log("err", err)
      })
  }, [])
  return (
    <YMaps modules={["Heatmap"]} query={{apikey: "3a938c7f-953d-484c-9fee-5d2b9c12bb53"}}>
      <YMap instanceRef={mapRef} style={{flexGrow: 1}} width={"100%"} height={"100%"} defaultState={{
        center: [55.75, 37.57], zoom: 9,
        modules: ["geoObject.addon.balloon", "geoObject.addon.hint"]
      }}>
        {places && places.map(p => (
          <Placemark
            geometry={[p.lat, p.lng]}
            properties={{
              iconContent: p.usertime,
              iconCaption: formattedMoney(p.cost),
              hintContent: "3",
              balloonContentHeader: `Снять в аренду ${p.area}м^2 за ${formattedMoney(p.cost)}`,
              balloonContentBody: `Этаж ${p.floor}`,
              // balloonContentFooter: "footer"
            }}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            options={{
              preset: "islands#circleIcon",
              iconImageSize: [30, 30],
            }}
          />
        ))}
      </YMap>
    </YMaps>
  )
}

export default Map