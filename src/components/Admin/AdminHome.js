import React from 'react'
import Myimage from '../image/mine.jpg'
import { Group } from '@mui/icons-material'
import { Home } from '@mui/icons-material'
import { HomeMax } from '@mui/icons-material'
import PetsIcon from '@mui/icons-material/Pets';
import { Outlet, useNavigate } from 'react-router-dom'
import './AdminHome.css'

function AdminHome() {
    const navigation = useNavigate()
  return (
    <div className='adminHomeContainer' style={{margin:'5px'}}>
        <div className='adminHomeSidebar'>
          <div style={{position : 'fixed'}}>
            <img alt='admin' className='myImage' src={Myimage} style={{borderRadius: '10px'}}/>
            <h1 style={{color : 'black' , overflow:'hidden'}}>Anshid</h1>
            <div className='adminHomeSideBarsLinks'>
            <h3 onClick={() => navigation('/admin-home')} className='theAdminLoginSideNavs' style={{cursor:"pointer"}} > <Home className='AdminLoginIcons' /> Home</h3>
            <h3 onClick={() => navigation('/admin-user')} className='theAdminLoginSideNavs' style={{cursor:"pointer"}}><Group className='AdminLoginIcons' /> Users</h3>
            <h3 onClick={() => navigation('/admin-product')} className='theAdminLoginSideNavs' style={{cursor:"pointer"}}> <PetsIcon className='AdminLoginIcons'/> Product</h3>
            <h3 onClick={() => navigation('/')} className='theAdminLoginSideNavs'style={{cursor:"pointer"}}> <HomeMax className='AdminLoginIcons' /> Web</h3>
            </div>
            </div>
            <Outlet/>
        </div>
    </div>
  )
}

export default AdminHome