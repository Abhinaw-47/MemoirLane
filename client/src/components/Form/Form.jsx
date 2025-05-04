import React, { useEffect, useState } from 'react'
import { TextField, Button, Typography, Paper } from '@mui/material'
import { useDispatch } from 'react-redux'
import {createPost,updatePost} from '../../actions/posts'
import { useSelector } from 'react-redux'

const Form = ({ currentId, setCurrentId}) => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  })
  const post=useSelector((state)=>currentId?state.posts.find((p)=>p._id===currentId):null)
  const dispatch = useDispatch()
  useEffect(()=>{
    if(post) setPostData(post)
  }, [post])
  const handleSubmit = (e) => {
    e.preventDefault()
    if(currentId){
      console.log(currentId)
      dispatch(updatePost(currentId,postData))
    }else{
      dispatch(createPost(postData))
    }
    clear()
  
  }
  const clear = () => {
    setCurrentId(null)
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    })
  }

  return (
    <Paper
    elevation={3}
    sx={{
      padding: 2,
    }}
  >
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      <Typography variant="h6" gutterBottom>
        {currentId ? `Editing "${post.title}"` : 'Creating a Memory'}
      </Typography>

      <TextField
        name="creator"
        variant="outlined"
        label="Creator"
        fullWidth
        value={postData.creator}
        onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
        sx={{ m: 1 }}
      />
      <TextField
        name="title"
        variant="outlined"
        label="Title"
        fullWidth
        value={postData.title}
        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        sx={{ m: 1 }}
      />
      <TextField
        name="message"
        variant="outlined"
        label="Message"
        fullWidth
        multiline
        rows={4}
        value={postData.message}
        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        sx={{ m: 1 }}
      />
      <TextField
        name="tags"
        variant="outlined"
        label="Tags (comma separated)"
        fullWidth
        value={postData.tags}
        onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
        sx={{ m: 1 }}
      />

      <div style={{ width: '97%', margin: '10px 0' }}>
      <input
    type="file"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPostData({ ...postData, selectedFile: reader.result });
        };
        reader.readAsDataURL(file);
      }
    }}
    style={{ width: '100%' }}
  />
      </div>

      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        fullWidth
        sx={{ mb: 1 }}
      >
        Submit
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="small"
     onClick={clear}
        fullWidth
      >
        Clear
      </Button>
    </form>
  </Paper>
  )
}

export default Form

