import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../../actions/posts'
import { likePost } from '../../../actions/posts'

const Post = ({ post, setCurrentId}) => {
  const dispatch=useDispatch()
  const user=JSON.parse(localStorage.getItem('profile'))
  return (
  
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
      }}
    >
      <CardMedia
        component="div"
        image={
          post.selectedFile ||
          'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
        }
        title={post.title}
        sx={{
          height: 0,
          paddingTop: '56.25%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backgroundBlendMode: 'darken',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          color: 'white',
        }}
      >
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          color: 'white',
        }}
      >
        {user?.result?.googleId===post.creator|| user?.result?._id===post.creator && (
           <Button size="small" onClick={() => setCurrentId(post._id)} sx={{ color: 'white' }}>
          <MoreHorizIcon fontSize="default" />
        </Button>
        )}
       
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '20px',
        }}
      >
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        sx={{ padding: '0 16px' }}
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          padding: '0 16px 8px 16px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button size="small" color="primary" 
        disabled={!user?.result} onClick={() => {dispatch(likePost(post._id))}}>
          <ThumbUpAltIcon fontSize="small" /> &nbsp;{ `${post.likes.length}`>1? `LIKES ${post.likes.length}`: `LIKE ${post.likes.length}`}
        </Button>
        {user?.result?.googleId===post?.creator || user?.result?._id===post.creator && (
             <Button size="small" color="primary" disabled={user?.result.name!==post.name} onClick={() =>{dispatch(deletePost(post._id))}}>
          <DeleteIcon fontSize="small" /> &nbsp; Delete
        </Button>
        )}
     
      </CardActions>
    </Card>
  )
}

export default Post