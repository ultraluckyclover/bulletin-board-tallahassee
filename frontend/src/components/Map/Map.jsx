import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import supabase  from '../../supabaseClient';

function Map () {

    // Fetch locations from database

    const [locations, setLocations] = useState([]);

    async function getLocations() {
        const { data, error }   = await supabase.from('locations').select();
        if (error) {
            console.error("Error fetching data:", error);
        } else{
            setLocations(data);
        }
    }

    useEffect(() => {
        getLocations();
    }, [])

    return (
        <MapContainer center={[30.455000, -84.253334]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Markers for each location */}

            {locations.map((location) => (
                    <Marker key={location.id} position={[location.lat, location.long]}>
                        <Popup>{location.name}</Popup>
                    </Marker>
            ))}

        </MapContainer>
    )    
}

export default Map