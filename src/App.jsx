import React from 'react';
import Layout from './components/Layout';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Layout />
      < Outlet/>
    </div>
  );
}

export default App;
