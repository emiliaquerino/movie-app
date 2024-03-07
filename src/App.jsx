import React from 'react';
import Layout from './components/Layout';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Layout />
      <div className='main'>
        < Outlet/>
      </div>
    </div>
  );
}

export default App;
