import { Map as YMap, YMaps, Placemark, Circle } from "react-yandex-maps";
import { formattedMoney } from "../../helpers/money";
import { useEffect, useRef, useState } from "react";
import { getHeatMap, getPlaces } from "../../api/places";
import _ from "lodash"

function Map({places}) {
  const mapRef = useRef();
  const [heat, setHeat] = useState([]);
  const [maxHeatCount, setMaxHeatCount] = useState(0);
  const [maxHeatDuration, setMaxHeatDuration] = useState(0);
  useEffect(() => {
    getHeatMap({lat: 55.731061, lng: 37.579445, radius: 0.01}).then(data => {
      setHeat(data.heatmap)
      console.log("data.heatmap", data.heatmap);
      setMaxHeatCount(_.maxBy(data.heatmap,(o)=>(o.counts)))
      console.log("maxHeatCount", maxHeatCount);
      setMaxHeatDuration(_.maxBy(data.heatmap,(o)=>(o.duration)))
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
              iconCaption: formattedMoney(p.cost/4),
              hintContent: "3",
              balloonContentHeader: `Снять в аренду ${p.area}м^2 за ${formattedMoney(p.cost/4)}`,
              balloonContentBody: `Этаж ${p.floor}`,
              balloonContentFooter: "Плюсы"
            }}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            options={{
              preset: "islands#circleIcon",
              iconImageSize: [30, 30],
            }}
          />
        ))}
        {heat && heat.map(h=>(
          <Circle
            geometry={[[h.lat, h.lng], 100]}
            options={{
              fillColor: '#DB7093',
              opacity: (h.counts / maxHeatCount.counts)*0.75,
              strokeColor: '#990066',
              strokeOpacity: 1,
              strokeWidth: 0,
            }}
          />
        ))}
      </YMap>
    </YMaps>
  )
}

export default Map