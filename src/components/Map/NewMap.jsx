import { useEffect, useRef, useState } from "react";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { getHeatMap } from "../../api/places";
import _ from "lodash";

mapboxgl.accessToken = 'pk.eyJ1IjoiYm9tYm80NTQiLCJhIjoiY2twdzZ0bThqMjN0ODJuczQ0aXVnMzl3bSJ9.E1BawLB43d-KHeCyFxuNIg';

function NewMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(37.579445);
  const [lat, setLat] = useState(55.731061);
  const [zoom, setZoom] = useState(9);

  const [heat, setHeat] = useState([]);
  const [maxHeatCount, setMaxHeatCount] = useState(0);
  const [maxHeatDuration, setMaxHeatDuration] = useState(0);

  useEffect(() => {
    getHeatMap({lat: 55.731061, lng: 37.579445, radius: 0.01}).then(data => {
      setHeat(data.heatmap)
      console.log("data.heatmap", data.heatmap);
      setMaxHeatCount(_.maxBy(data.heatmap,(o)=>(o.counts)))
      setMaxHeatDuration(_.maxBy(data.heatmap,(o)=>(o.duration)))
    }).catch(err => {
      alert(err)
      console.log("err", err)
    })
  }, [])

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
    map.current.on('load', function () {
      map.current.addSource('earthquakes', {
        'type': 'geojson',
        'data': "public/geoRouters.geojson"});

      map.current.addLayer(
        {
          'id': 'earthquakes-heat',
          'type': 'heatmap',
          'source': 'earthquakes',
          'maxzoom': 9,
          'paint': {
// Increase the heatmap weight based on frequency and property magnitude
            'heatmap-weight': [
              'interpolate',
              ['linear'],
              ['get', 'mag'],
              0,
              0,
              6,
              1
            ],
// Increase the heatmap color weight weight by zoom level
// heatmap-intensity is a multiplier on top of heatmap-weight
            'heatmap-intensity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0,
              1,
              9,
              3
            ],
// Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
// Begin color ramp at 0-stop with a 0-transparancy color
// to create a blur-like effect.
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
// Adjust the heatmap radius by zoom level
            'heatmap-radius': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0,
              2,
              9,
              20
            ],
// Transition from heatmap to circle layer by zoom level
            'heatmap-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              7,
              1,
              9,
              0
            ]
          }
        },
        'waterway-label'
      );

      map.current.addLayer(
        {
          'id': 'earthquakes-point',
          'type': 'circle',
          'source': 'earthquakes',
          'minzoom': 7,
          'paint': {
// Size circle radius by earthquake magnitude and zoom level
            'circle-radius': [
              'interpolate',
              ['linear'],
              ['zoom'],
              7,
              ['interpolate', ['linear'], ['get', 'mag'], 1, 1, 6, 4],
              16,
              ['interpolate', ['linear'], ['get', 'mag'], 1, 5, 6, 50]
            ],
// Color circle by earthquake magnitude
            'circle-color': [
              'interpolate',
              ['linear'],
              ['get', 'mag'],
              1,
              'rgba(33,102,172,0)',
              2,
              'rgb(103,169,207)',
              3,
              'rgb(209,229,240)',
              4,
              'rgb(253,219,199)',
              5,
              'rgb(239,138,98)',
              6,
              'rgb(178,24,43)'
            ],
            'circle-stroke-color': 'white',
            'circle-stroke-width': 1,
// Transition from heatmap to circle layer by zoom level
            'circle-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              7,
              0,
              8,
              1
            ]
          }
        },
        'waterway-label'
      );
    });
  },[heat]);

  return (
    <div ref={mapContainer} style={{flexGrow:"1",height:"calc(100vh - 60px)"}}/>
  )
}

export default NewMap