
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
          
          main: '#de3e66',
        },
        secondary: {
        
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

export const whiteButton = createTheme({
  palette: {
      primary: {
        
        main: '#fff',
      },
      secondary: {
      
        main: '#fff',
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

