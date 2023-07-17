import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Fondo from '../assets/img/fondo_mapa.png';
import AC from '../assets/img/logoAC.png';


const styles = {
  fondoStyle: {
      backgroundImage: `url(${Fondo})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
  },
  bgStyle:{
    backgroundColor: '#ea0029',
    width: '100vw',
    height: '100vh'
  }
};

export const Login = () => {

  return (
    <div style={styles.bgStyle}>
      <Box
      component="img"
      src={AC}
      sx={{
        width: {xs: '80%', sm: '30%'},
        mt: 3
      }}
      />
      <Grid 
        container
        spacing= {0}
        direction= "column"
        alignItems= "center"
        justifyContent= "center"
        sx={{
            minHeight: '75vh',
        }}    
      >
        <Typography variant="h4" 
        sx={{
          color: '#fff',
          mb: '3'
        }}
        >
          PRESCRIPCIONES
        </Typography>
          <Grid
            item 
            className='box-shadow'
            xs={3}
            sx={{ 
                width: { sm: 450 },
                backgroundColor: 'white', 
                padding: 3, 
                borderRadius: 2 
            }}
          >
            <Typography variant="h5">
                INGRESAR
            </Typography>
            <form>
              <Grid container>
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                  <TextField 
                    label="Correo" 
                    type="email" 
                    placeholder='Correo electronico' 
                    fullWidth
                  />
                </Grid>
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                  <TextField 
                    label="Contraseña" 
                    type="password" 
                    placeholder='Contraseña' 
                    fullWidth
                  />
                </Grid>

                <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                  <Grid item xs={ 12 } sm={ 6 }>
                    <Button variant='contained' fullWidth component={ RouterLink } to="/home">
                      Login
                    </Button>
                  </Grid>
                  <Grid item xs={ 12 } sm={ 6 }>
                    <Button variant='contained' fullWidth component={ RouterLink } to="/home">
                      <Typography sx={{ ml: 1 }}>WINDOWS</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>     
    </div>
  )
}
