// import React from 'react'
// import './menucard.css'
// import { Card, Typography,Box } from '@mui/material'

// const MenuCard = ({MenuItem}) => {
//   return (
//     <Card variant='outlined' className='Menu-Card'>
//       <Typography sx={{padding:'30px 0'}} variant='h5' component='p'>{MenuItem.section_name}</Typography>
//       {
//         //Home Page Menu Card 
//         MenuItem.items && MenuItem.items.map((item,index)=>{
//           return(
//             <div key={index} className='Menu-Item'>
//             <img src={item.image} srcSet={item.image} alt={item.item_name}/>
//             <Box sx={{width:'70%'}}>
//             <Typography variant='h6' className='Menu-Title' component='p'>{item.item_name}</Typography>
//             <Typography sx={{color:'gray',marginTop:1,textAlign:'left'}} component='p'>{item.description}</Typography>
//             </Box>
//             </div>
//           )
//         })
//       }
      
//     </Card>
//   )
// }

// export default MenuCard


import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './menucard.css';
import { Card, Typography, Box } from '@mui/material';

const MenuCard = ({ MenuItem }) => {
  return (
    <Card variant='outlined' className='Menu-Card'>
      <Typography sx={{ padding: '30px 0' }} variant='h5' component='p'>{MenuItem.section_name}</Typography>
      {
        // Home Page Menu Card 
        MenuItem.items && MenuItem.items.map((item, index) => {
          return (
            <div key={index} className='Menu-Item'>
              <img src={item.image} srcSet={item.image} alt={item.item_name}/>
              <Box sx={{ width: '70%' }}>
                <Typography variant='h6' className='Menu-Title' component='p'>{item.item_name}</Typography>
                <Typography sx={{ color: 'gray', marginTop: 1, textAlign: 'left' }} component='p'>{item.description}</Typography>
              </Box>
            </div>
          );
        })
      }
    </Card>
  );
};

// PropTypes validation
MenuCard.propTypes = {
  MenuItem: PropTypes.shape({
    section_name: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        item_name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      })
    )
  }).isRequired
};

export default MenuCard;
