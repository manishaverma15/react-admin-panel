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
import { XdIcon } from '../../svg/xdIcon';
import { JiraIcon } from '../../svg/jiraIcon';
import { SlackIcon } from '../../svg/slackIcon';
import { AppWrite } from '../../svg/appWrtieIocn';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { AzureIcon } from '../../svg/azureIcon';
import LinearProgress from '@mui/material/LinearProgress';


function projectData(
  icon: React.ReactNode,
  companyName: string,
  companyMembers: React.ReactNode[],
  budget: string,
  completion: React.ReactNode
) {
  return { icon, companyName, companyMembers, budget, completion }
}


const rows = [
  projectData(<XdIcon />, 'Material UI XD Version', [<Avatar src='/avatarOne.jpg' />,
  <Avatar src='/avatarTwo.jpg' />], '$140000',  <LinearProgress variant="determinate" value={60} />),
  projectData(<JiraIcon />, 'Add Progress Track', [<Avatar src='../../../../public/images/avatarOne.jpg' />,
  <Avatar src='../../../../public/images/avatarTwo.jpg' />], '$3000', <LinearProgress variant="determinate" value={10} />),
  projectData(<SlackIcon />, 'Fix Platform Errors', [<Avatar src='../../../../public/images/avatarOne.jpg' />,
  <Avatar src='/avatarTwo.jpg' />], '$16000', <LinearProgress variant="determinate" value={90} />),
  projectData(<AppWrite />, 'Launch our Mobile App', [<Avatar src='../../../../public/images/avatarOne.jpg' />,
  <Avatar src='../../../../public/images/avatarTwo.jpg' />], 'Not set', <LinearProgress variant="determinate" value={100} />),
  projectData(<AzureIcon />, 'Cloud Computing Platform', [<Avatar src='../../../../public/images/avatarOne.jpg' />,
  <Avatar src='../../../../public/images/avatarTwo.jpg' />], '$20,500', <LinearProgress variant="determinate" value={40} />),
];


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
                      key={row.companyName}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                          {row.icon}
                          <span style={{ marginLeft: '8px' }}>{row.companyName}</span>
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        <Stack direction="row" spacing={1}>
                          {row.companyMembers?.map((memberIcon, index) => (
                            React.isValidElement(memberIcon) ? (
                              <Avatar key={index} src={(memberIcon.props as any).src} alt={`Member ${index + 1}`} />
                            ) : null
                          ))}
                        </Stack>
                      </TableCell>
                      <TableCell align="right">{row.budget}</TableCell>
                      <TableCell align="right">{row.completion}</TableCell>
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
