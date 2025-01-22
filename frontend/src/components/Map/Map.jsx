import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import supabase  from '../../supabaseClient';
import { formatTimestamp } from '../../utils';

const coords = [30.455000, -84.253334] // Default: Tallahassee

function Map () {

    // Fetch locations from supabase with SQL function 

    const [ locations, setLocations ] = useState([])

    async function getLocations() {
        const { data, error } =  await supabase.rpc('get_location_with_events_list');
        if (error) {
            console.error("Error retrieving locations with events data:", error);
        } else {
            setLocations(data);
            console.log('Successfully retrieved locations with events data');
        }
    }

    useEffect( () => {
        getLocations();
    },[])
    console.log("Locations!!: ", locations)

    // CHANGE THESE FOR YOUR CITY
    

    return (
        <MapContainer center={coords} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Markers for each location */}

            {locations.map((location) => (
                    <Marker key={location.id} position={[location.lat, location.long]}>
                        <Popup>
                            <h1 className = 'font-bold text-lg'>{location.location_name}</h1>

                            {location.events[0]?.start_time ? (
                                <p>
                                    Next event: <strong>{location.events[0].event_name}</strong>, {formatTimestamp(location.events[0].start_time)}         
                                </p>
                            ) : null}

                            {
                                location.events[1] ? (
                                    <a>See all events</a>
                                ) : null
                            }
                        </Popup>
                    </Marker>
            ))}

        </MapContainer>
    )    
}

export default Map