import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, IconButton, Typography } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import { ArrowCircleRight } from '@mui/icons-material';
import { InicioLayout } from '../layout/InicioLayout';
import { AppLayout } from '../layout/AppLayout';

function ArrowCircleRightIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
}

export const Cargar = () => {
  return (
    <>
    <AppLayout>
      <InicioLayout>
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
              Sube la planilla una vez completada:
              </Typography>
              <Button variant="contained">
              Subir
              </Button>
              <IconButton component={ RouterLink } to="/home/resumen">
                  <ArrowCircleRight fontSize="large" color='primary'/>
              </IconButton>
          </Box>
      </InicioLayout> 
    </AppLayout>
   
    </>
  )
}

