import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'
import {CircularProgress, Grid} from '@mui/material'

const Posts = ({setCurrentId}) => {

  const posts=useSelector((state)=>state.posts) 
  console.log(posts)
  return (
 
    !posts.length ? (
      <CircularProgress />
    ) : (
      <Grid
        container
        spacing={3}
        alignItems="stretch"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        { posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Posts