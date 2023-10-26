import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import './customCards.css';
import { Leaderboard } from '@mui/icons-material';
import Divider from '@material-ui/core/Divider';
import StoreIcon from '@mui/icons-material/Store';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import WeekendIcon from '@mui/icons-material/Weekend';

const cardData = [
  { icon: <WeekendIcon />, heading: 'Booking', count: '281', percentage: '+55%', time: 'than last week' },
  { icon: <Leaderboard />, heading: "Today's Users", count: '2,300', percentage: '+3%', time: 'than last month' },
  { icon: <StoreIcon />, heading: 'Revenue', count: '34k', percentage: '+1%', time: 'than yesterday' },
  { icon: <PersonAddIcon />, heading: 'Followers', count: '+91', percentage: '', time: 'Just updated' },
];

export const CustomCards = () => {
  return (
    <Box>
      <Grid container spacing={2} className='grid_container'>
        {cardData.map((card, index) => (
          <Grid item xs={4} key={index} className='grid_item' style={{ marginTop: 60, paddingTop: 50, maxWidth: '25%' }}>
            <Box className='item_box'>
              <Paper elevation={2}
                style={{ borderRadius: '0.75rem', display: 'flex', flexDirection: 'column', marginLeft: 30 }}>
                <Box className='color_box'>
                  <Box className='icon_box'>
                    {card.icon}
                  </Box>
                  <Box>
                    <Box>
                      <span className='heading_one'>{card.heading}</span>
                      <h4 className='heading_two'>{card.count}</h4>
                    </Box>
                  </Box>
                </Box>
                <Divider className='divider' />
                <Box className='percentage_container'>
                  <span className='percentage_increase'>{card.percentage}</span>
                  <span className='time'>{card.time}</span>
                </Box>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}