import React from "react"
import ReactDOM from "react-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import SiteNav from "./Layout/SiteNav"
import theme from "./theme"
import Timer from "./App/Timer"

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <SiteNav />
    <Timer />
  </ThemeProvider>,
  document.querySelector("#root")
)
