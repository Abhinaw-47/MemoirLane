import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../contants/actionTypes'
import * as api from '../api'

export const getPosts=()=>async(dispatch)=>{
    try {
        const {data}=await api.fetchPosts()
        dispatch({type:FETCH_ALL,payload:data})
    } catch (error) {
        console.log(error.message)
    }   
}
export const createPost=(post)=>async(dispatch)=>{
    try {
        const {data}=await api.createPost(post)
        dispatch({type:CREATE,payload:data})
    } catch (error) {
        console.log(error.message)
    }  
}

export const updatePost=(id,post)=>async(dispatch)=>{
    try{
        const {data}=await api.updatePost(id,post)
        dispatch({type:UPDATE,payload:data})
    }catch(error){
       console.log(error) 
    }
    
}
export const deletePost=(id)=>async(dispatch)=>{
    try{
        await api.deletePost(id)
        dispatch({type:DELETE,payload:id})
    }catch(error){
       console.log(error) 
    }
}
export const likePost=(id)=>async(dispatch)=>{
    try{
        const {data}=await api.likePost(id)
        dispatch({type:UPDATE,payload:data})
    }catch(error){
       console.log(error) 
    }
}







// import axios from 'axios';

// const url = 'http://localhost:5000/posts';

// // GET all posts
// export const getPosts = () => async (dispatch) => {
//   try {
//     const { data } = await axios.get(url);
//     dispatch({ type: 'FETCH_ALL', payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// // CREATE a new post
// export const createPost = (post) => async (dispatch) => {
//   try {
//     const { data } = await axios.post(url, post);
//     dispatch({ type: 'CREATE', payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
