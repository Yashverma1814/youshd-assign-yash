import React from 'react'
import { Link } from 'react-router-dom'

export const SideBar = ({sidebarclass}) => {
  return (
    <div className={sidebarclass?'sidebar sidebar--open':'sidebar'}>
        <div style={{marginTop:'2rem', marginBottom:'1rem'}}>
            <img src="https://app-staging.youshd.com/images/dashboardLogo.svg" alt="" />
        </div>
        <li>Dashboard</li>
        <li>Payments</li>
        <li>Profile</li>
        <li>Settings</li>
        <Link to='/enter-number' style={{textDecoration:'none'}}>
            <li>SignOut</li>
        </Link>
    </div>
  )
}
