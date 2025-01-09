
import './App.css';
import  Map  from './components/Map/Map'
import { EventCard } from './components/EventCard/EventCard';
import { EventsList } from './components/EventsList/EventsList';
import { useState } from 'react';

const events = [
  {
      locationName: "The Bark",
      lat: 30.43391530894842,
      long: -84.28893872023866,
      eventName: "Rock concert" ,
      dateTime: ["2025-1-1", '22:00']
  },
  {
      locationName: "Common Grounds",
      lat: 30.43391530894842,
      long: -84.28893872023866,
      eventName: "Spoken Word Poetry Night" ,
      dateTime: ["2025-1-9", "18:00"]
  },
  {
      locationName: "926 Bar & Grill",
      lat: 30.43391530894842,
      long: -84.28893872023866,
      eventName: "Brunch" ,
      dateTime: ["2025-1-8", "10:00"]
  },
  {
      locationName: "Cascades Park",
      lat: 30.43391530894842,
      long: -84.28893872023866,
      eventName: "T-Pain Concert" ,
      dateTime: ["2025-8-30", "20:00"]
  }
]

function App() {
  
  return (
    <div class = 'flex justify-between'>
      <EventsList/>
      <Map/>
    </div>
    
    
  );
}

export default App;
