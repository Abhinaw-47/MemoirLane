import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination ,PaginationItem} from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
import { getPosts } from "../actions/posts";
function Paginate({page}) {
const {numberOfPages}=useSelector((state)=>state.posts) 
console.log(numberOfPages)
const dispatch = useDispatch();
  useEffect(()=>{
    
if(page){
  dispatch(getPosts(page))
}
  },[page]);
  return (
    <Pagination
    sx={{ justifyContent: 'space-around',}}
    count={numberOfPages}
    page={Number(page) || 1}
    variant="outlined"
  color="primary"
  renderItem={(item) => (
    <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
  )}

    
    
    />
  )
}

export default Paginate