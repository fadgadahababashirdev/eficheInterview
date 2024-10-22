import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import DataNumber from './DataNumber'
import Stats from './Stats'


const NurseDashboard = () => {
  return (
    <div className='flex'> 
    <Sidebar/>
  <div className='w-full'>
     <Navbar/>  
       <DataNumber/> 
      
     </div> 
    
   
  
        
    </div>
  )
}

export default NurseDashboard