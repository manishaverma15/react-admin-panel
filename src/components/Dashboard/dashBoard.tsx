import React from 'react';
import { Box } from '@mui/material';
import './styles.css';
import { CustomCards } from '../CustomCards/customCards';
import { CustomTableCards } from '../CustomTableCards/customChartsCards';

export const DashBoardScreen = () => {
  return (
    <Box>
      <CustomCards />
      <CustomTableCards/>
    </Box>
  )
}
