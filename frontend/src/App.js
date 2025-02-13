
import './App.css';
import  Map  from './components/Map/Map'

import { EventsList } from './components/EventsList/EventsList';
import { BigEventCard } from './components/EventCards/BigEventCard';
import { useState, useReact, useEffect } from 'react';
import supabase from './supabaseClient';
import { Filter } from './components/FilterBar/FilterBar';
import { EventsContext, EventsProvider, useEvents } from './scripts/Context';



const App = () => {
  


  return (
    <div className = 'flex justify-between relative'>

      <EventsProvider>

        <EventsList/>
        <Map />
        <Filter/>
      </EventsProvider>
      
      


      
      {/* <BigEventCard/> */}

      
    </div>
  );
}

export default App;
