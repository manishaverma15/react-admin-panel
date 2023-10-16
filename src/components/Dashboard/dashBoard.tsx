import React from 'react';
import { CssBaseline } from '@mui/material';
import Sidebar from './sideBar';
// import { useStyles } from './styles';
import './styles.css';

const drawerWidth = 240;

// const useStyles = makeStyles((theme: any) => ({
//   root: {
//     display: 'flex',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));

export const DashBoardScreen = () => {
  // const classes = useStyles();

  return (
    <>
      <div className='rootStyle'>
        <CssBaseline />
        <Sidebar />
        <main className='content'>
          <div className='toolbar' />
        </main>
      </div>
    </>
  )
}
