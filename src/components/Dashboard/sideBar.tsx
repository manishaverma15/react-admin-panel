// Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText, makeStyles } from '@mui/material';
import { Link } from 'react-router-dom';
import './styles.css';

const drawerWidth = 240;

// const useStyles: any = makeStyles((theme: any) => ({
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   toolbar: theme.mixins.toolbar,
// }));

const Sidebar = () => {
  // const classes = useStyles();

  return (
    <Drawer
      className='drawer'
      variant='permanent'
      classes={{
        paper: 'drawerPaper',
      }}
    >
      <div />
      <List>
        <ListItem button component={Link} to='/dashboard'>
          <ListItemText primary='Dashboard' />
        </ListItem>
        <ListItem button component={Link} to='/users'>
          <ListItemText primary='Users' />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
