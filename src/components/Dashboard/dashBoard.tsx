import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { CustomCards } from '../CustomCards/customCards';
import { CustomChartsCards } from '../CustomChartsCards/customChartsCards';
import { ProjectTable } from '../ProjectTable/projectTable';

export const DashBoardScreen = () => {
  return (
    <Box>
      <CustomCards />
      <CustomChartsCards/>
      <ProjectTable />
    </Box>
  )
}
