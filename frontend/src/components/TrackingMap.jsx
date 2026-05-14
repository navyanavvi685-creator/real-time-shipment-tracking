import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons using CDN links for better reliability
const defaultIcon = new L.Icon({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Truck icon for the shipment
const truckIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
});

// Component to dynamically update map center
function ChangeView({ center }) {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.setView(center, map.getZoom());
        }
    }, [center, map]);
    return null;
}

const TrackingMap = ({ latitude, longitude, locationDesc }) => {
    // Default to India center if no coordinates
    const position = latitude && longitude ? [latitude, longitude] : [20.5937, 78.9629];

    return (
        <MapContainer 
            center={position} 
            zoom={latitude && longitude ? 13 : 5} 
            style={{ height: '100%', width: '100%', borderRadius: '12px', background: '#1e293b' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {latitude && longitude && (
                <>
                    <ChangeView center={position} />
                    <Marker position={position} icon={truckIcon}>
                        <Popup>
                            <strong>Live Location</strong> <br />
                            {locationDesc || 'In Transit'}
                        </Popup>
                    </Marker>
                </>
            )}
        </MapContainer>
    );
};

// Internal useEffect fix for ChangeView
import { useEffect } from 'react';

export default TrackingMap;
