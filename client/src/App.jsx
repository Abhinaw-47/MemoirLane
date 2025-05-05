import './App.css';
import { Container, Typography, AppBar, Grow, Grid } from '@mui/material';
import memories from './images/memories.png';
import { useDispatch } from 'react-redux';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { useEffect, useState } from 'react';
import {getPosts} from './actions/posts'
import Navbar from './components/Navbar/Navbar';
function App() {
  const [currentId,setCurrentId]=useState(null)
const dispatch=useDispatch()

useEffect(()=>{
  dispatch(getPosts())
},[currentId,dispatch])


  return (
    <Container maxWidth="lg">
     
     <Navbar/>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form  currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
