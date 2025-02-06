
import './App.css';
import  Map  from './components/Map/Map'

import { EventsList } from './components/EventsList/EventsList';
import { BigEventCard } from './components/EventCards/BigEventCard';
import { useState, useReact, useEffect } from 'react';
import supabase from './supabaseClient';
import { Filter } from './components/FilterBar/FilterBar';

const App = () => {
  const [filter,setFilter] = useState(null);

  return (
    <div className = 'flex justify-between relative'>
      
      <EventsList filter ={filter} setFilter = {setFilter}/>
      <Filter/>
      {/* <BigEventCard/> */}

      <Map filter ={filter} setFilter = {setFilter}/>
    </div>
  );
}

export default App;
