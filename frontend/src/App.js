
import './App.css';
import  Map  from './components/Map/Map'
import { EventCard } from './components/EventCard/EventCard';
import { EventsList } from './components/EventsList/EventsList';
import { useState, useReact, useEffect } from 'react';
import supabase from './supabaseClient';

function App() {

  return (
    <div className = 'flex justify-between'>
      <EventsList/>
      <Map/>
    </div>
  );
}

export default App;
