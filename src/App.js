import React from 'react'
import './app.css'
import Navbar from "./components/Navbar/navbar";
import Banner from "./components/Banner/Banner";
import RowPost from './components/RowPost/RowPost';
import {originals,action, horror, romance, trending, documents} from './urls'




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Orginals'/>
      <RowPost url={trending}title='Trending' isSmall />
      <RowPost url={action}title='Action' isSmall />
      <RowPost url={horror}title='Horror'isSmall />
      <RowPost url={romance}title='Romance' isSmall />
      <RowPost url={documents}title='Documents' isSmall />
      
    </div>
  );
}

export default App;
