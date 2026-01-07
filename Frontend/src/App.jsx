import React from 'react';
import Home from './home/Home';
import Course from './components/Course';
import { Route } from 'react-router-dom';


function App() {
  return (
    <>
     
      <Routes>
        <Route patgh='/' element={<Home />} />
        <Route path='/course' element={<Course />} />
      </Routes>
      
    </>
  );
}

export default App;


