import React, { useEffect, useState } from 'react'
import { AppBar,Typography,Toolbar,Button, Avatar } from '@mui/material'
import memories from '../../images/memories.png'
import { useDispatch } from 'react-redux'
import { jwtDecode } from 'jwt-decode';
import { Link, useLocation, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const location=useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))) 
    
     useEffect(()=>{
 const token=user?.token
 if(token){
   const decodedToken=jwtDecode(token)
   if(decodedToken.exp*1000<new Date().getTime()) logout()
 }
 setUser(JSON.parse(localStorage.getItem('profile')))
     },[location])


    const logout=()=>{
   
     dispatch({type:'LOGOUT'})
     navigate('/')
     setUser(null)
    }
  return (
    <AppBar
    position="static"
    color="inherit"
    sx={{
      borderRadius: 3,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 50px',
    }}
  >
    <div
    sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
    <Typography
    component={Link}
    to="/"
      
      variant="h2"
      sx={{ color: 'rgba(0,183,255, 1)' }}
    >
      Memories
    </Typography>
    <img
      src={memories}
      alt="icon"
      height="60"
      style={{ marginLeft: '15px' }}
    />
    </div>
    <Toolbar sx={{display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',}}>
        {user?.result ? (
          <div sx={{ display: 'flex',
            justifyContent: 'space-between',
            width: '400px',}}>
            <Avatar sx={{color:"white", backgroundColor:"purple",
}} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography sx={{display: 'flex',
    alignItems: 'center',}} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" sx={{}} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
  </AppBar>
  )
}

export default Navbar