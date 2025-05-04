import './App.css';
import { Container, Typography, AppBar, Grow, Grid } from '@mui/material';
import memories from './images/memories.png';
import { useDispatch } from 'react-redux';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { useEffect, useState } from 'react';
import {getPosts} from './actions/posts'
function App() {
  const [currentId,setCurrentId]=useState(null)
const dispatch=useDispatch()

useEffect(()=>{
  dispatch(getPosts())
},[currentId,dispatch])


  return (
    <Container maxWidth="lg">
      <AppBar
        position="static"
        color="inherit"
        sx={{
          borderRadius: 3,
          margin: '30px 0',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px 20px',
        }}
      >
        <Typography
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
      </AppBar>

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
