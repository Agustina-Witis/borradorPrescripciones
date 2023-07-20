import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Drawer, Grid } from "@mui/material";
import SvgIcon from '@mui/material/SvgIcon';
import { MenuTwoTone, LabelImportant, HomeRounded } from '@mui/icons-material';
import LogoACrojo from '../../assets/img/logoAC.png';
import { NavListDrawer } from './NavListDrawer';

function MenuTwoToneIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export const NavBar = () => {

  const navigate = useNavigate();
  const [ open, setOpen ] = useState(false);

  const onLogout = () => {
      navigate('/login', {
          replace: true
      });
  }

  const styles = {
    imgStyle: {
      width: '15em',
      marginTop: '10px'
    },
    linkStyle: 
    {
      fontFamily: 'Roboto',
      color: '#F2F3F4',
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontSize: '0.9rem',
      fontWeight: 800
    },
  };

  return (
    <>
      <AppBar 
        position='fixed'
        sx={{ 
          width: '100vw',
          height: {xs:'10vh', lg:'9vh'},
          backgroundColor: '#ea0029',
          zIndex: '1'
         }}
      >
        <Grid
          sx={{
            display: {xs: 'none', sm:'flex'},
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <img src={LogoACrojo} alt="Logo ASSIST CARD" style={styles.imgStyle}/>

        <Box>
            <NavLink 
                style={styles.linkStyle}
                to="/home/descarga"
            >
                Inicio
            </NavLink>
        </Box>
        <Box>
            <NavLink 
                style={styles.linkStyle}
                to="/home/resumen"
            >
                Resumen de datos cargados
            </NavLink>
        </Box>
        <Box >
            <NavLink 
                style={styles.linkStyle}
                to="/home/table"
            >
                Gestion del procesamiento
            </NavLink>
        </Box>
        <Box>
            <NavLink 
                style={styles.linkStyle}
                to="/home/estadisticas"
            >
                Panel de estadisticas
            </NavLink>
        </Box>
        <Box>
          <Button
            style={styles.linkStyle}
            onClick={ onLogout }
            sx={{
              color: 'primary',
              mr: '2rem'
            }}
          >
            logout
          </Button>          
        </Box>
               
      </Grid>
      <Box
        sx={{
          display: {xs:'flex', sm:'none'},
          justifyContent: 'end'
        }}
      >
        <Button
          onClick={ () => setOpen(true) }
        >
          <MenuTwoTone color="withe"/>
        </Button>      
      </Box> 
      <Drawer
        open={open}
        anchor="left"
        onClose={ ()=> setOpen(false)}
      >
        <NavListDrawer/>

      </Drawer>

      </AppBar>
    </>
  )
}
