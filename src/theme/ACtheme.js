import { createTheme } from '@mui/material/styles';

export const ACtheme = createTheme({
    palette: {
        primary:{
            main: '#2C3E50'
        },
        secondary:{
            main: '#ea0029'
        },
        third:{
            main: '#ea002bb4'
        },
        fourth:{
            main: '#3B14DE'
        },
        withe:{
            main: '#F2F3F4'
        },
        error:{
            main: '#ff1744'
        },
        success:{
            main: '#388e3c'
        }
    },
    typography: {
        fontFamily: [
            'Nunito',
            'Roboto'
        ].join(','),
    }
})