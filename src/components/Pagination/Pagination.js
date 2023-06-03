import React from "react"
import { Link } from "gatsby"
import Pagination from "@mui/material/Pagination"
import PaginationItem from "@mui/material/PaginationItem"

const PaginationBlog = ({ catUri, page, totalPages }) => (
  <>
    <h5>
      Página {page} / {totalPages}
    </h5>
    <Pagination
      showFirstButton
      showLastButton
      shape="rounded"
      count={totalPages}
      page={page}
      renderItem={item => (
        <PaginationItem
          component={Link}
          to={`${catUri}${item.page === 1 ? "" : item.page}`}
          {...item}
        />
      )}
    />
  </>
)

export default PaginationBlog
