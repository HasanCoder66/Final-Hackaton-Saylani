import React from 'react'
import DataTable from '../datatable/DataTable'
import ActiveTab from '../ActiveTab/ActiveTab'
import Header from '../Header/Header'
import './Attendence.css'

function Attendance() {
  return (
    <div className='mainDiv'>
      <div className='secDiv'>
        <Header />
      <ActiveTab type='attendance'/>
      <DataTable type='attendance'/>
      </div>
    </div>
  )
}

export default Attendance