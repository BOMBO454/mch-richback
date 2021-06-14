import { useEffect, useRef, useState } from "react";
import { useStore } from "../../store";
import MapGL, { Layer, Marker, Popup, Source } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { geo } from "../../constants/geo-routers";
import { observer } from "mobx-react";
import { Icon, Pop } from "./styled";
import { getPlaces } from "../../api/places";
import { formattedMoney } from "../../helpers/money";

function NewMap() {
  const {mapStore} = useStore()
  const [places, setPlaces] = useState([]);
  const [viewport, setViewport] = useState(
    mapStore.map.viewport
  );
  const [showPopup, setShowPopup] = useState(-1);

  useEffect(() => {
    getPlaces({address: mapStore.address, type: mapStore.type}).then(data => {
      setPlaces(data.places)
    }).catch(err => {
      console.error(err)
    })
  }, [mapStore.address, mapStore.type]);

  const closeMarker = (e)=>{
    e.stopPropagation()
    setTimeout(() => setShowPopup(-1), 0)
  }

  const onMarkerClick = (event,key,data) => {
    event.stopPropagation();
    if (showPopup === key) {
      setTimeout(() => setShowPopup(-1), 0)
    } else {
      setShowPopup(key)
      mapStore.setCurrentPlace(data);
    }
  };

  return (
    <MapGL
      style={{flexGrow: "1", height: 'calc(100vh - 60px)'}}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      accessToken={"pk.eyJ1IjoiYm9tYm80NTQiLCJhIjoiY2twdzZ0bThqMjN0ODJuczQ0aXVnMzl3bSJ9.E1BawLB43d-KHeCyFxuNIg"}
      latitude={viewport.latitude}
      longitude={viewport.longitude}
      zoom={viewport.zoom}
      onViewportChange={setViewport}
    >
      <Source id='heatmaps' type='geojson' data={geo}/>
      <Layer
        id='heatmap'
        type='heatmap'
        source='heatmaps'
        paint={{
          'heatmap-weight': [
            'interpolate',
            ['linear'],
            ['get', 'mag'],
            0,
            0,
            6,
            1
          ],
          'heatmap-intensity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0,
            1,
            20,
            3
          ],
          'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0,
            'rgba(33,102,172,0)',
            0.2,
            'rgb(103,169,207)',
            0.4,
            'rgb(209,229,240)',
            0.6,
            'rgb(253,219,199)',
            0.8,
            'rgb(239,138,98)',
            1,
            'rgb(178,24,43)'
          ],
          'heatmap-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0,
            10,
            20,
            20
          ],
          'heatmap-opacity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            1,
            1,
            20,
            0
          ]
        }}
      />
      {places && places.map((v, key) => (
        <Marker
          onClick={(e)=>{onMarkerClick(e,key,v)}}
          key={key}
          longitude={v.lng}
          latitude={v.lat}
        >
          {showPopup === key ?
            <Pop onClick={closeMarker}>
              <h4>Сдача {v.area}м^2 за {formattedMoney(v.cost)}р</h4>
              <li>Хороших компаний рядом {v.biz_count}</li>
              <li>До метро {v.metro_station} {formattedMoney(v.metro_dist)}км</li>
              <li>поток {v.usertime}/м длительность</li>
              <li>поток {v.counts}/ч человек</li>
              <li>этаж {v.floor}</li>
              <li>конкурентов рядом {v.comp_count}</li>
            </Pop>:<Icon className={showPopup >= 0 ? 'hidden' : ''}/>
          }
        </Marker>
      ))}
    </MapGL>
  )
};

export default observer(NewMap)