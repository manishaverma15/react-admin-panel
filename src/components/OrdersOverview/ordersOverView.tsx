import React from 'react';
import { Box, Paper } from '@mui/material';
import './ordersOverView.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { OrdersOverViewData } from '../../const/OrderOverView';

export const OrdersOverView = () => {
  return (
      <Paper className='orders_container'>
        <Box className='title_container'>
          <h6 className='order_title'>Orders overview</h6>
          <Box className=''>
            <span>
              <p>
                <span><ArrowUpwardIcon /></span>
                <span>24% this month</span>
              </p>
            </span>
          </Box>
        </Box>
        <Box className='order_details_container'>
          {OrdersOverViewData.map((order) => (
            <Box className='order_detail'>
              <Box className='icon'>{order.icon}</Box>
              <Box className='detail_title'>
                <span className='process'>{order.process}</span>
                <Box>
                  <span className='process_time'>{order.processTime}</span>
                </Box>
                <Box className='blank'></Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>
  )
}