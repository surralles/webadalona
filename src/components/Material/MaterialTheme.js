import * as React from 'react';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
          // Purple and green play nicely together.
          main: '#ff6666',
        },
        secondary: {
          // This is green.A700 as hex.
          main: '#11cb5f',
        },
      },
    
      typography: {
        fontFamily: [
          'Poppins',          
          'Roboto',         
          'sans-serif',  
        ].join(','),
      },
      
      
});

