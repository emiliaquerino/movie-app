import React from 'react';
import Layout from './components/Layout';
import { Outlet } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className='container'>
        <Layout />
        <div className='main'>
          < Outlet/>
        </div>
      </div>
    </MovieProvider>
  );
}

export default App;

