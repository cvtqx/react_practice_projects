import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import rabbitMarkerImage from './images/rabbit_marker.png';
const L = require('leaflet');


const MapAPI = () => {
  const [loading, setLoading] = useState(false)
  const [locations, setLocations] = useState([])

  const fetchLocations = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://menus-api.vercel.app/');
      const result = await response.json();
      
      if (result) {
        console.log(result.bbqs);
        const coordinatesList = result.bbqs.map(bbq => [bbq.latitude, bbq.longitude]);
        console.log(coordinatesList)
        setLocations(coordinatesList);
        setLoading(false)
      }   
    }
    catch (error) {
      console.log(error)
      setLoading(false)
    }    
  }

  useEffect(() => {
    fetchLocations()
  }, [])
  
  if (loading) {
  return <p>Loading... Please wait...</p>
  }
 
  let rabbitMarker = new L.icon({
    iconUrl: rabbitMarkerImage,
    iconRetinaUrl: rabbitMarkerImage,
    iconSize: [55, 55],
  });
  
  function MultipleMarkers() {
    return locations.map((coordinata, index) => {
      return (
        <Marker position={coordinata} icon={rabbitMarker} key={index}>
          <Popup>This is a marker</Popup>
        </Marker>
      )
    })
  }
  
  return (
    <div>
      <h1>MAP</h1>
      <MapContainer
        style={{ height: '100vh' }}
        center={[0,0]}
        zoom={2}
        scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MultipleMarkers/>
      </MapContainer>
    </div>
  );
}

export default MapAPI