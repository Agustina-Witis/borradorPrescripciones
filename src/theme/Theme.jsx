import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { ACtheme } from './ACtheme';

export const Theme = ({ children }) => {
  return (    
    <ThemeProvider theme={ ACtheme }>

        <CssBaseline/>

        {children}

    </ThemeProvider>
  )
}