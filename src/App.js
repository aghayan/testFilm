import './App.css';
// import { Navigation } from './component/navigation';
import  Login  from './pages/login';
import {Route, Routes, useNavigate } from 'react-router-dom';
import {RegistrationForm} from './pages/registrationForm';
import { useEffect, useState } from 'react';
import movieList from './component/movieList.js';
import MovieListHeading from './component/MovieListHeading.js';
import SearchBox from './component/SearchBox.js';
import RemoveFavourites from './component/RemoveFavourites.js';
import MovieList from './component/movieList.js';
import { Homefilms } from './pages/homeFilms';


function App() {



  return (
    <div className="App">
      {/* <Navigation/> */}
      {/* <Login/> */}
      {/* <RegistrationForm/> */}
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signin" element={<RegistrationForm/>}/>
          <Route path="/movieList" element={<MovieList/>}/>
          <Route path='/homeFilms' element={<Homefilms/>}/>
      </Routes>

    </div>
  );
}

export default App;
