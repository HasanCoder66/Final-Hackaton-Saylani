import React from 'react'
import DataTable from '../datatable/DataTable'
import ActiveTab from '../ActiveTab/ActiveTab'
import Header from '../Header/Header'

function Center() {
  return (
    <div className='mainDiv'>
      <div className='secDiv'>
        <Header />
      <ActiveTab />
      <DataTable />
      </div>
    </div>
  )
}

export default Center