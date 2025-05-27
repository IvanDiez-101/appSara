import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: 'https://png.pngtree.com/png-vector/20230106/ourmid/pngtree-flat-red-location-sign-png-image_6553065.png', 
  iconSize: [32, 32], 
  iconAnchor: [16, 32], 
  popupAnchor: [0, -32], 
});

const points = [
  { lat: 40.4168, lng: -3.7038, title: 'Madrid, España' },
  { lat: 48.8566, lng: 2.3522, title: 'París, Francia' },
  { lat: 50.8503, lng: 4.3517, title: 'Bruselas, Bélgica' },
  { lat: 52.3676, lng: 4.9041, title: 'Ámsterdam, Países Bajos' },
  { lat: 52.5200, lng: 13.4050, title: 'Berlín, Alemania' },
  { lat: 41.9028, lng: 12.4964, title: 'Roma, Italia' },
  { lat: 48.2082, lng: 16.3738, title: 'Viena, Austria' },
  { lat: 47.3784, lng: 8.5400, title: 'Zürich, Suiza' },
  { lat: 51.5074, lng: -0.1278, title: 'Londres, Reino Unido' }
];

function MapComponent() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '40px',
    }}>
      <div style={{ width: '90%', height: '450px' }}>
        <MapContainer center={[50.8503, 4.3517]} zoom={4} style={{ width: '100%', height: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {points.map((point, index) => (
            <Marker key={index} position={[point.lat, point.lng]} icon={customIcon}>
              <Popup>{point.title}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapComponent;
