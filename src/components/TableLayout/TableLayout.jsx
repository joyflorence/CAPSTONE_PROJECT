// import React from 'react'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import { Button } from '@mui/material';
// import './tablelayout.css'
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// const TableLayout = ({table}) => {
//   return (
//     <TableContainer sx={{padding:2}}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//                 <TableCell align='center'>Table No</TableCell>
//                 <TableCell align='center'>Status</TableCell>
//                 <TableCell align='center'>View</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {
//                 table.length && table.map((Table,index)=>{
//                     return (
//                         <TableRow key={index} hover  tabIndex={-1}>
//                         <TableCell align='center'>{Table.table_no}</TableCell>
//                         <TableCell align='center' sx={{color:Table.status==='Available'?'green':'red'}} >{Table.status}</TableCell>
//                         <TableCell align='center'><Link to={`${Table.table_no}`}><Button variant='contained'>view</Button></Link></TableCell>
//                         </TableRow>
//                     )
//                 })
//             }
//           </TableBody>
//         </Table>
//       </TableContainer>
//   )
// }

// export default TableLayout



import React from 'react';
import PropTypes from 'prop-types'; 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import './tablelayout.css';
import { Link } from 'react-router-dom';

const TableLayout = ({ table }) => {
  return (
    <TableContainer sx={{ padding: 2 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Table No</TableCell>
            <TableCell align='center'>Status</TableCell>
            <TableCell align='center'>View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map((tableData, index) => (
            <TableRow key={index} hover tabIndex={-1}>
              <TableCell align='center'>{tableData.table_no}</TableCell>
              <TableCell align='center' sx={{ color: tableData.status === 'Available' ? 'green' : 'red' }}>{tableData.status}</TableCell>
              <TableCell align='center'><Link to={`${tableData.table_no}`}><Button variant='contained'>view</Button></Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Prop types validation
TableLayout.propTypes = {
  table: PropTypes.arrayOf(
    PropTypes.shape({
      table_no: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TableLayout;
