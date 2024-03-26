// import { Box, Button, Card, IconButton, Typography } from '@mui/material'
// import React from 'react'
// import './orders.css'
// import { Link} from 'react-router-dom'
// import {Clear } from '@mui/icons-material'

// const OrderCard = ({OrderData}) => {
//   const {data,deleteBookingMutation}=OrderData

//   const onSubmit=(id)=>{
//     const data={reservation:{},status:"Available"}
//     // console.log(id,data)
//     deleteBookingMutation({id,data})
//   }
//     return (
//     <Card variant='outlined' className='order-card'>
//         <Box>
//         <Typography variant='h6' component='div'>{data.reservation.name}</Typography>
//         <Typography component='p'>Order : {data.reservation.Order}</Typography>
//         <Typography component='p'>Table  : {data.table_no}</Typography>
//         </Box>
//         <Link to={`${data.id}`}>
//         <Button color='secondary' variant='outlined'>view Table</Button>
//         </Link>
//         <IconButton onClick={()=>onSubmit(data.id)} size='small'><Clear/></IconButton> 
//     </Card>
//   )
// }

// export default OrderCard




import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Box, Button, Card, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Clear } from '@mui/icons-material';
import './orders.css';

const OrderCard = ({ OrderData }) => {
  const { data, deleteBookingMutation } = OrderData;

  const onSubmit = (id) => {
    const newData = { reservation: {}, status: "Available" };
    deleteBookingMutation({ id, data: newData });
  };

  return (
    <Card variant='outlined' className='order-card'>
      <Box>
        <Typography variant='h6' component='div'>{data.reservation.name}</Typography>
        <Typography component='p'>Order : {data.reservation.Order}</Typography>
        <Typography component='p'>Table  : {data.table_no}</Typography>
      </Box>
      <Link to={`${data.id}`}>
        <Button color='secondary' variant='outlined'>View Table</Button>
      </Link>
      <IconButton onClick={() => onSubmit(data.id)} size='small'><Clear/></IconButton>
    </Card>
  );
};

// PropTypes validation
OrderCard.propTypes = {
  OrderData: PropTypes.shape({
    data: PropTypes.shape({
      reservation: PropTypes.shape({
        name: PropTypes.string,
        Order: PropTypes.string
      }),
      table_no: PropTypes.string,
      id: PropTypes.string // Add PropTypes validation for 'id'
    }),
    deleteBookingMutation: PropTypes.func
  }).isRequired
};

export default OrderCard;
