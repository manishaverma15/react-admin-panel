import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import './customCards.css';
import Divider from '@material-ui/core/Divider';
import { cardData } from '../../const/CardData';

export const CustomCards = () => {
  return (
    <Box>
      <Grid container spacing={3} className='grid_container'>
        {cardData.map((card, index) => (
          <Grid item md={6} lg={3} key={index}
            className='grid_item'
            style={{ marginTop: 60, paddingTop: 50, maxWidth: '25%' }}>
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