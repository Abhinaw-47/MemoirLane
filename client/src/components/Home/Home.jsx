import React from 'react'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import { Container, Grid,Grow,Paper,AppBar,TextField,Button} from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts,getPostsBySearch } from '../../actions/posts'
import Paginate from '../Pagination'
import { useNavigate,useLocation } from 'react-router-dom'


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId,setCurrentId]=useState(null)
  const dispatch=useDispatch()
  const query = useQuery();
const navigate=useNavigate()
  const page=query.get('page')||1
  const searchQuery=query.get('searchQuery')
  
  const [search,setSearch]=useState('')

  const searchPost=()=>{
    if(search.trim()){
      dispatch(getPostsBySearch({search}))
      navigate(`/posts/search?searchQuery=${search || 'none'}`)
    }else{
      navigate('/')
    }
  }
  const handleKeyDown=(e)=>{
    if(e.keyCode===13){
      searchPost()
    }
  }

  return (
    <Grow in>
    <Container maxWidth="xl">
      <Grid
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={3}
        sx={{
    display: 'flex',
    flexDirection: {
      xs: 'column-reverse',
      sm: 'row' 
    },
  }}
      >
        <Grid item xs={12} sm={6} md={9}>
          <Posts setCurrentId={setCurrentId}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AppBar position='static' color='inherit' sx={{ borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',}}>
            <TextField
              name="search"
              variant="outlined"
              label="Search Memories"
              fullWidth
             onKeyDown={handleKeyDown}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              onClick={searchPost}
         sx={{}}
              variant='contained'
              color="primary"
            >
              Search
            </Button>
          </AppBar>
          <Form  currentId={currentId} setCurrentId={setCurrentId}/>
          {(!searchQuery) && (
            <Paper sx={{ borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',}} elevation={6}>
<Paginate page={page}/>
</Paper>
          )}

        </Grid>
      </Grid>
    </Container>
  </Grow>
  )
}

export default Home