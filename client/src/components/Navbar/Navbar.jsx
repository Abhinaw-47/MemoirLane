import React from 'react'
import { AppBar,Typography } from '@mui/material'
import memories from '../../images/memories.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
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
    <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div sx={{ display: 'flex',
            justifyContent: 'space-between',
            width: '400px',}}>
            <Avatar sx={{color: theme.palette.getContrastText(deepPurple[500]), backgroundColor: deepPurple[500],
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