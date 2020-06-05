import { AppBar, Box, Container, IconButton, Toolbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import React from "react"
import Clock from "../App/Clock"
import Copyright from "./Copyright"
import Timer from "../App/Timer"
import CountdownTimer from "../App/CountdownTimer"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {},
  menuButton: {
    marginRight: theme.spacing(0)
  },
  title: {
    flexGrow: 1,
    width: 100
  }
}))

function AppArea() {
  return (
    <Box my={3} style={{ padding: "20px" }}>
      <Clock />
      <Timer />
      <CountdownTimer />
    </Box>
  )
}

export default function SiteNav() {
  const classes = useStyles()
  return (
    <Container display="flex">
      <AppBar position="sticky" color="blue">
        <Toolbar className={classes.root} justify="flex-start">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.title}>
            <Typography variant="h6" color="textSecondary" align="center">
              Timer
            </Typography>
          </div>
          <div className={classes.title}>
            <Typography variant="h6" color="textSecondary" align="center">
              Randomiser
            </Typography>
          </div>
          <div className={classes.title}>
            <Typography variant="h6" color="textSecondary" align="center">
              Others
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <AppArea />
      <Copyright />
    </Container>
  )
}
