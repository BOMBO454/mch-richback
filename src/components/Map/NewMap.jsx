import { useEffect, useRef, useState } from "react";
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { getHeatMap, getPlaces } from "../../api/places";
import { useStore } from "../../store";
import MapGL, { Layer, Source } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { geo } from "../../constants/geo-routers";

function NewMap() {
  const {mapStore} = useStore()
  const [places, setPlaces] = useState([])
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [viewport, setViewport] = useState(
    mapStore.map.viewport
  );
  const [zoom, setZoom] = useState(10);

  const [heat, setHeat] = useState([]);
  const [maxHeatCount, setMaxHeatCount] = useState(0);
  const [maxHeatDuration, setMaxHeatDuration] = useState(0);
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
  }, [])

  /*useEffect(() => {
    getHeatMap({lat: 55.731061, lng: 37.579445, radius: 10}).then(data => {
      setHeat(data.heatmap)
    }).catch(err => {
      alert(err)
      console.log("err", err)
    })
  }, [])*/

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
    </MapGL>
  )
}

export default NewMap