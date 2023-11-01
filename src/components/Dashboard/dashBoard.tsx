import React from 'react';
import { Box } from '@mui/material';
import './styles.css';
import { CustomCards } from '../CustomCards/customCards';
import { CustomChartsCards } from '../CustomChartsCards/customChartsCards';

export const DashBoardScreen = () => {
  return (
    <Box>
      <CustomCards />
      <CustomChartsCards/>
    </Box>
  )
}
