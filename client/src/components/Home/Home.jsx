import React from 'react'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import { Container, Grid,Grow } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts'
const Home = () => {
  const [currentId,setCurrentId]=useState(null)
  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(getPosts())
  },[currentId,dispatch])
  return (
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
  )
}

export default Home