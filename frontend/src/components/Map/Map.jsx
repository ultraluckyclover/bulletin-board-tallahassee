import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';

import { Icon } from 'leaflet';
import { useEvents } from '../../scripts/Context';
import { handleLocationClick } from '../../scripts/eventHandlers';

const customIcon = new Icon ({
    iconUrl : 'https://img.icons8.com/?size=100&id=120665&format=png&color=000000',
    iconSize : [15,15]
});


const Map = () => {

    /**
     * React component for the main map, 
     * displays a marker for each location
     * 
     * Coordinates are configured for Tallahassee
     * 
     */


    const { events, setLocationId } = useEvents();

    
    // CHANGE THESE FOR YOUR CITY
    const coords = [30.455000, -84.253334] // Default: Tallahassee
    
    return (
        <MapContainer center={coords} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                detectRetina = {true}
            />

            {/* Markers for each event */}

            {events.map((event) => (                    
                    <Marker key={event.event_id} 
                            position={[event.lat, event.long]}
                            icon ={customIcon}>
                        {console.log(event)}
                        <Popup>
                            <a href = '#'
                            onClick={(e) => {
                                e.preventDefault();
                                console.log("TYPE event ID", typeof event.location_id);
                                handleLocationClick(setLocationId, event.location_id)
                            }}
                            >
                                <h1 className = 'font-bold text-sm'>{event.location_name}</h1>
                            </a>
                        </Popup>
                    </Marker>
            ))}
        </MapContainer>
    )    
}

export default Map
