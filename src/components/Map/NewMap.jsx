import { useEffect, useRef, useState } from "react";
import { useStore } from "../../store";
import MapGL, { Layer, Marker, Source } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { geo } from "../../constants/geo-routers";
import { observer } from "mobx-react";
import { Icon } from "./styled";

function NewMap() {
  const {mapStore} = useStore()
  const [viewport, setViewport] = useState(
    mapStore.map.viewport
  );

  useEffect(() => {
    mapStore.getPlacesAction()
  }, []);


  useEffect(() => {
    console.log(mapStore.places);
  })

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
      {mapStore.places && mapStore.places.map((v,key)=>(
        <Marker
          key={key}
          longitude={v.lng}
          latitude={v.lat}
        >
          <Icon/>
        </Marker>
      ))}
    </MapGL>
  )
}

export default observer(NewMap)