import React, { useState } from 'react'
import { Avatar,Button,Paper,Grid,Typography,Container } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Input from './Input'
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'

const Auth = () => {
  const [showPassword, setShowPassword] =useState(false);  
     const [isSignup, setIsSignup] = useState(false);
const dispatch=useDispatch()
const navigate=useNavigate()
  const handleShowPassword=()=>setShowPassword((prevShowPassword)=>!prevShowPassword)
  
    const handleSubmit=(e)=>{
        
    }
    const handleChange=(e)=>{
      
    }
    const switchMode=()=>{
      setIsSignup((prevIsSignup)=>!prevIsSignup)
    
    }
    const handleGoogleSuccess=async(res)=>{
      const credential = res.credential;

      // Decode the JWT to get user info
      const decoded = jwtDecode(credential); // { email, name, picture, sub, ... }
    
      try {
        dispatch({ type: "AUTH", data: { result: decoded, token: credential } });
    
      navigate("/");
      } catch (error) {
        console.log(error);
      }
     
    }
    const handleGoogleError=(error)=>{
      console.log(error)
      console.log('Google Sign In was unsuccessful. Try again later')
    }
  return (
    <Container component="main" maxWidth="xs">
    <Paper sx={{  marginTop: "64px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "16px",}} elevation={3}>
      <Avatar sx={{   margin: "8px",
    backgroundColor: "red",}}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
      <form style={{ width: '100%', marginTop:"57px"}} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          { isSignup && (
          <>
            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
            <Input name="lastName" label="Last Name" handleChange={handleChange} half />
          </>
          )}
          <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
          <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
          { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
        </Grid>
        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ margin:'24px 0 16px'}}>
          { isSignup ? 'Sign Up' : 'Sign In' }
        </Button>
        {/* <GoogleLogin
          clientId="564033717568-e5p23rhvcs4i6kffgsbci1d64r8hp6fn.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button sx={{  marginBottom: theme.spacing(2)}} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
              Google Sign In
            </Button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleError}
          cookiePolicy="single_host_origin"
        />*/}
        <GoogleOAuthProvider clientId="617690069663-113uttoehvggjrotclm40peqv3gl9s6c.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
        useOneTap
      />
    </GoogleOAuthProvider>
        <Grid container justify="flex-end">
          <Grid item>
            <Button onClick={switchMode}>
              { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
            </Button>
          </Grid>
        </Grid> 
      </form>
    </Paper>
  </Container>
  )
}

export default Auth