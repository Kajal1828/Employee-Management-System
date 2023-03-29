import React from 'react'
import Navbar from './Navbar'
import Dashboard from './Dashboardpage'
import EmployeeLogin from './EmployeeLogin'
import EmployeeList from './CreateEmployeeList'


const App = () => {
  return (
    <>
    <EmployeeLogin/>
    <Navbar/>
    <Dashboard/>
    <EmployeeList/>
    
    </>
  )
}

export default App