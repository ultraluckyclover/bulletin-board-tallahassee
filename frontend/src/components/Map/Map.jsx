import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import supabase  from '../../supabaseClient';
import { formatTimestamp } from '../../scripts/utils';
import { handleLocationClick } from '../../scripts/eventHandlers';
import {Icon} from 'leaflet';

const customIcon = new Icon ({
    iconUrl : 'https://img.icons8.com/?size=100&id=120665&format=png&color=000000',
    iconSize : [15,15]
});


const Map = ({filter, setFilter}) => {

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

    useEffect( () => {
        console.log("Current filter in Map.jsx:", filter)
    },[filter])
    // console.log("Locations!!: ", locations)

    // CHANGE THESE FOR YOUR CITY
    const coords = [30.455000, -84.253334] // Default: Tallahassee
    

    return (
        <MapContainer center={coords} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                detectRetina = {true}
            />

            {/* Markers for each location */}

            {locations.map((location) => (                    
                
                
                    <Marker key={location.location_id} 
                            position={[location.lat, location.long]}
                            icon ={customIcon}>
                        {console.log(location)}
                        <Popup>
                            <a href = '#'
                            onClick={(e) => {
                                e.preventDefault();
                                console.log("TYPE LOCATION ID", typeof location.location_id);
                                handleLocationClick(setFilter, location.location_id)
                            }}
                            >
                                <h1 className = 'font-bold text-sm'>{location.location_name}</h1>
                            </a>
                        </Popup>
                    </Marker>
            ))}

        </MapContainer>
    )    
}

export default Map


{/* {location.events[0]?.start_time ? (
                                <p>
                                    Next event: <strong>{location.events[0].event_name}</strong>, {formatTimestamp(location.events[0].start_time)}         
                                </p>
                            ) : null}

                            {
                                location.events[1] ? (
                                    <a href = '#'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        console.log("TYPE LOCATION ID", typeof location.location_id);
                                        handleLocationClick(setFilter, location.location_id)
                                    }}>See all events</a>
                                ) : null
                            } */}