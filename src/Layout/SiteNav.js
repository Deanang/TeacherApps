import { AppBar, Box, Container, IconButton, Toolbar, Tab, Tabs } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import React from "react"
import Clock from "../App/Clock"
import Copyright from "./Copyright"
import Timer from "../App/Timer"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

function AppArea() {
  return (
    <Box my={3} style={{ padding: "20px" }}>
      <Clock />
      <Timer />
    </Box>
  )
}

export default function SiteNav() {
  const classes = useStyles()
  return (
    <Container>
      <AppBar position="sticky" color="blue">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Tabs variant="scrollable" scrollButtons="on" aria-label="scrollable auto tabs example">
            <Tab label="Timer" />
            <Tab label="Randomiser" disabled />
            <Tab label="Others" disabled />
          </Tabs>
        </Toolbar>
      </AppBar>
      <AppArea />
      <Copyright />
    </Container>
  )
}
