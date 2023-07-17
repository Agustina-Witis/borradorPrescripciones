import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, IconButton, Typography } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import { ArrowCircleRight } from '@mui/icons-material';
import { LayoutHome } from './LayoutHome';

function ArrowCircleRightIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

export const Descargar = () => {
  return (
    <>
    <LayoutHome>
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px'
        }}
        >
            <Typography variant='h5' color='withe.main'>
            Descarga la planilla:
            </Typography>
            <Button variant="contained">
            Descargar
            </Button>
            <IconButton component={ RouterLink } to="/home/cargar">
                <ArrowCircleRight fontSize="large" color='primary'/>
            </IconButton>
        </Box>
    </LayoutHome>   
    </>
  )
}

