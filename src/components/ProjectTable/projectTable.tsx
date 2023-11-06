import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import './projectTable.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DoneIcon from '@mui/icons-material/Done';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

function projectData(
  companieName: string,
  companyMembers: string,
  budget: number,
  completion: string
) {
  return { companieName, companyMembers, budget, completion }
}


const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const projectRows = [
  // projectData()
]

export const ProjectTable = () => {
  return (
    <Box>
      <Grid container spacing={3} className='grid_container'>
        <Grid item xs={12} className='project_grid_item'>
          <Paper className='table_paper'>
            <Box className='table_heading'>
              <Box>
                <h6 className='main_heading'>Projects</h6>
                <Box className='sub_heading'>
                  <span><DoneIcon /></span>
                  <span className='projects_done'> <strong>30 done </strong>this month</span>
                </Box>
              </Box>
              <Box>
                <MoreVertIcon />
              </Box>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead >
                  <TableRow>
                    <TableCell className='table_cell'>COMPANIES</TableCell>
                    <TableCell className='table_cell' align="right">MEMBERS</TableCell>
                    <TableCell className='table_cell' align="right">BUDGET</TableCell>
                    <TableCell className='table_cell' align="right">COMPLETION</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
