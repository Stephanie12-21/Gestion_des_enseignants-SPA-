import React from 'react'
import './MainDash.css'
import Cards from '../../components/Cards/Cards'
import Chart from '../../components/BarChart/Chart'


const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Tableau de bord</h1>
        <div className='cardContainer'>
          <Cards/>
        </div>
        <div className='ChartContainer'>
          <Chart />
        </div>
        
       
    </div>
  )
}

export default MainDash