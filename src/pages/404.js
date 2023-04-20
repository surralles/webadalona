import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout/Layout"
import {Seo} from "../components/seo"
import {noEncontrado,container} from "./404.module.css"

const NotFoundPage = () => (
  <Layout>
    <div className={container}>
    <div className={noEncontrado}>
      <div>
    <h1 >No SE ENCUENTRA</h1>
    <p>Parece que esta página ya no existe...no dejes de buscar, nunca. </p>
    <StaticImage
            src="../images/404.jpg"
             
            width={800}
            height={534}
             formats={["auto", "webp", "avif"]}
             alt="Página no encontrada"
             
              />
              </div>
    </div>
    </div>
    
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
