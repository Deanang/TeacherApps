import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import ProTip from './ProTip';
import { Test, Timer } from './Timer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Teaching Apps Online
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <AppBar position="static" color="blue">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Timer
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Randomiser
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Others
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box my={3} style={{ backgroundColor: '#f9fbe0', padding: '20px' }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Hello
        </Typography>
        <Button variant="outlined" color="secondary">
          This is a button!
        </Button>
        <Timer />
        <Test />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
