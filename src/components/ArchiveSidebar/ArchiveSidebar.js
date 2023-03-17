import React from "react"
import { Link } from "gatsby"

import { Wrapper, Menu } from "./ArchiveSidebar.styles"
import FolderOpenIcon from '@mui/icons-material/FolderOpen';



const ArchiveSidebar = ({ catId, categories }) => {

    // funcion para que all-posts siempre este encima
    const sortedCategories =[...categories].sort((x,y)=>{
        if(x.node.slug === "todos-articulos") return -1
        if(y.node.slug === "todos-articulos") return 1
        return 0
    })

    return(

        <Wrapper>
            <Menu>
                <li className="sidebar-menu-header">
                <FolderOpenIcon/>
                <p>Artículos</p>
                </li>
                {sortedCategories.map(cat => {
          if (cat.node.count !== 0) {
            return cat.node.slug !== 'sin-categoria-es'  ? (
              <li key={cat.node.id}>
                <span className="count">{cat.node.count}</span>
                <Link
                  to={`${cat.node.uri}`}
                  activeClassName="sidebar-highlighted"
                >
                 <span dangerouslySetInnerHTML={{ __html: cat.node.name }} />   
                </Link>
              </li>
            ) : null
        }
        return null;
      })}
            </Menu>
        </Wrapper>
    )
}

export default ArchiveSidebar