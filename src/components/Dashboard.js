import React, { useState } from 'react';
import Header from "./header/Header";
import Topinfo from "./Topinfo";
import Datatable from './Datatable';



const Dashboard = () => {

  return (
    <div>

   
   
<div>

   
<div className='rt' style={{backgroundColor: "#f8f8f8"}}>
<Header/>
<Topinfo/>
</div>




<div className='rt' style={{backgroundColor: "#f8f8f8"}}>
<Datatable/>
</div>
</div>
  </div>

  );
};



export default Dashboard;

