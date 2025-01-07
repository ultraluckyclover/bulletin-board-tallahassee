import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.css'

const Map = () => {
    return (
        <MapContainer center={[30.455000, -84.253334]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[30.455000, -84.253334]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )    
}

export default Map