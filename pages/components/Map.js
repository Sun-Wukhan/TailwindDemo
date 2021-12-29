import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibmF2aWRraGFuIiwiYSI6ImNreG1jbmg1MjZ6YjczMXEzZ2N6Ynh0bnMifQ.s_D8U372bdBhzzjwJL-vnw";

const Map = (props) => {
  
  console.log('props', props)
  console.log('pick ups', props.pickUpCoordinates)
  console.log('drop off', props.dropOffCoordinates)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });

if(props.pickUpCoordinates) {
  addToMap(map, props.pickUpCoordinates)
  console.log('Pick up Exists')
}

if(props.dropOffCoordinates) {
  addToMap(map, props.dropOffCoordinates)
}

if(props.pickUpCoordinates && props.dropOffCoordinates) {
  map.fitBounds([
    props.dropOffCoordinates,
    props.pickUpCoordinates
  ], {
    padding: 60
  })
}

  }, [props.pickUpCoordinates, props.dropOffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
  flex-1
  h-1/2
`;
