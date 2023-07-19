import { Box, Grid, Typography } from '@mui/material';

const styles = {
  bgColor: 
  {
      backgroundColor: '#F2F3F4',
      width: '100%',
      height: '100vh'
  }
};

export const InicioLayout = ({children}) => {
  return (
    <>
    <div style={styles.bgColor}>
        <Grid
          container
          direction= "column"
          alignItems= "center"
          justifyContent= "center" 
          padding= '4%'
        >
        <Typography variant='h2' color='secondary'>
          Bienvenido
        </Typography>
        <Typography variant='h4' color='primary'>
          Aqui podras gestionar el procesamiento de prescripciones.
        </Typography>
        <Typography variant='h5' color='primary' padding="2%">
          Sigue los siguientes pasos:
        </Typography>

        <Box
          className='animate__animated animate__backInRight animate__slower	3s box-shadow'
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: '7px',
          }}
          padding="2% 5%"
        >
          {children}
        </Box>

        </Grid>        
    </div>
    </>
  )
}

