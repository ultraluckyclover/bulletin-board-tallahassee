
import './App.css';
import  Map  from './components/Map/Map'
import { EventsList } from './components/EventsList/EventsList';
import { FilterBar } from './components/FilterBar/FilterBar';
import {  EventsProvider } from './scripts/Context';



const App = () => {
  


  return (
    <div className = 'flex justify-between relative'>

      <EventsProvider>
        <EventsList/>
        <Map />
        <FilterBar />
      </EventsProvider>
      
      


      
      {/* <BigEventCard/> */}

      
    </div>
  );
}

export default App;
