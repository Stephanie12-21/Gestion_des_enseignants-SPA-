import React from 'react'
import './MainEnseignant.css'
import Table from '../../Table/Table'



const MainEnseignant = () => {
  return (
    
    <div className='tableContainer'>
      <div className="header">
          <h1>Tous les enseignants</h1>
          
      </div>
   
     <Table />
  </div>


  )
}

export default MainEnseignant