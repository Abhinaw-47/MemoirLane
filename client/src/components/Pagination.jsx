import React from "react";
import { Link } from "react-router-dom";
import { Pagination ,PaginationItem} from "@mui/material";

function Paginate() {
  return (
    <Pagination
    sx={{ justifyContent: 'space-around',}}
    count={5}
    page={1}
    variant="outlined"
  color="primary"
  renderItem={(item) => (
    <PaginationItem {...item} component={Link} to={`/posts?page=${1}`} />
  )}

    
    
    />
  )
}

export default Paginate