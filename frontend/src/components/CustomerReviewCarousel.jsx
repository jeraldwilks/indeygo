

// import React from 'react';
// import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

// const testimonials = [
//   {
//     id: 1,
//     name: 'John Doe',
//     role: 'School A',
//     quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     role: 'School B',
//     quote: 'Praesent sagittis ex id purus lobortis varius.',
//   },
//   {
//     id: 3,
//     name: 'Amith',
//     role: 'School B',
//     quote: 'Praesent sagittis ex id purus lobortis varius.',
//   },
//   // Add more testimonials as needed
// ];

// const carouselStyle = {
//   display: 'flex',
//   flexDirection: 'coloumn',
//   alignItems: 'center',
//   backgroundColor: '#f2f2f2',
//   padding: '20px',
//   marginTop: 10,
//   width: '100%',
//   minHeight: "75vh",
//   fontFamily: 'Roboto, sans-serif',
// };

// const CustomerReviewCarousel = () => {
//   return (
//     <div style={carouselStyle}>
//       <Box>
//         <Typography variant="h4" align="center" gutterBottom>
//           What Our Customers Are Saying
//         </Typography>
//         <Grid container spacing={4} justifyContent="center">
//           {testimonials.map((testimonial) => (
//             <Grid item key={testimonial.id} xs={12} sm={6} md={4}>
//               <Card variant="outlined" sx={{ height: '150%' }}>
//                 <CardContent>
//                   <Typography variant="h6" gutterBottom>
//                     {testimonial.name}
//                   </Typography>
//                   <Typography variant="subtitle1" gutterBottom>
//                     {testimonial.role}
//                   </Typography>
//                   <Typography variant="body1">{testimonial.quote}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </div>
//   );
// };

// export default CustomerReviewCarousel;






import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'School A',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'School B',
    quote: 'Praesent sagittis ex id purus lobortis varius.',
  },
  {
    id: 3,
    name: 'Amith',
    role: 'School B',
    quote: 'Praesent sagittis ex id purus lobortis varius.',
  },
  // Add more testimonials as needed
];

const CustomerReviewCarousel = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        padding: '20px',
        marginTop: 10,
        minHeight: '30vh',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <Box sx={{ maxWidth: '1200px', width: '100%', px: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          What Our Customers Are Saying
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial) => (
            <Grid item key={testimonial.id} xs={12} sm={6} md={4}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {testimonial.role}
                  </Typography>
                  <Typography variant="body1">{testimonial.quote}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CustomerReviewCarousel;
