import React from 'react';
import { Box, Grid, Paper, createTheme } from '@mui/material';
import './customChartsCards.css';
import { BarChart, LineChart } from '@mui/x-charts';

export const CustomChartsCards = () => {
  const chartsData = [
    {
      type: 'bar', labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [45, 20, 15, 22, 45, 40, 15, 60], title: 'Website views', subtitle: 'Last Campaign Performance'
    },
    {
      type: 'line', labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      title: 'Daily Sales', subtitle: '+15% increases in today sales'
    },
    {
      type: 'line', labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
      title: 'Completed Tasks', subtitle: 'Last Campaign Performance'
    },
  ];

  const getChartComponent = (chartType: any, chartProps: any) => {
    const customTheme = createTheme({
      palette: {
        primary: { main: '#FFFFFF' },
        secondary: { main: '#FFFFFF' },
      },
    });

    switch (chartType) {
      case 'bar':
        return <BarChart {...chartProps} theme={customTheme} />;
      case 'line':
        return <LineChart {...chartProps} theme={customTheme} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Box>
        <Box>
          <Grid container spacing={2} className='grid_container'>
            {chartsData.map((chart, index) => (
              <Grid item xs={12} md={6} lg={4} key={index} className='grid_item' style={{ marginTop: 30, paddingTop: 50 }}>
                <Box className='item_table_box'>
                  <Paper className='items_paper'>
                    <Box className='chart_container'>
                      <Box className='chart'>
                        {getChartComponent(chart.type, {
                          xAxis: [{ scaleType: 'band', data: chart.labels }],
                          series: [{ data: chart.data }],
                          className: 'chart_component',
                        })}
                      </Box>
                    </Box>
                    <Box>
                      <Box className='headings'>
                        <h3 style={{ fontFamily: 'sans-serif' }}>{chart.title}</h3>
                        <span className='subtitle'>{chart.subtitle}</span>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
