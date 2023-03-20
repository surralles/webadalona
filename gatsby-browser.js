/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it


import "./src/styles/reset.css"
import "./src/styles/variables.css"
import "./src/styles/global.css"
import CombinedProvider from "./src/context/CombinedProvider"

export const wrapRootElement = CombinedProvider