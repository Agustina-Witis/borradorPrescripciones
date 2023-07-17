import { NavLink, useNavigate } from 'react-router-dom';
import { Box, Button, Divider } from '@mui/material';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LogoACrojo from '../../assets/img/logoACrojo.png';


export const NavListDrawer = () => {

const navigate = useNavigate();

const onLogout = () => {
    navigate('/login', {
        replace: true
    });
}

const styles = {
  linkStyle: 
  {
      color: '#12229d',
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontSize: '1rem'
  },
  iconoStyle:
  {
    color: '#12229d',
    marginRight: '2rem',
  },
  boxStyle:
  {
      display: 'flex',
      justifyContent: 'start',
      marginBottom: '2rem'
  },
  imgStyle: {
    width: '12em',
    alignSelf: 'center',
    marginBottom: '2em'
  }
};

  return (

    <Box
        sx={{
            width: {xs: '60vw', md:'30vw'},
            bgcolor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            p: {xs:'7vw', md:'3vw'},
            pl:{xs: '3%', md: '15%'}
        }}
    >
        <img src={LogoACrojo} alt="Logo ASSIST CARD" style={styles.imgStyle}/>

        <Box style={styles.boxStyle}>
            <HomeRoundedIcon style={styles.iconoStyle}/>
            <NavLink 
                style={styles.linkStyle}
                to="/home"
            >
                Home
            </NavLink>
        </Box>
        <Box style={styles.boxStyle}>
            <LabelImportantIcon style={styles.iconoStyle}/>
            <NavLink 
                style={styles.linkStyle}
                to="/home/resumen"
            >
                Resumen de datos cargados
            </NavLink>
        </Box>
        <Box style={styles.boxStyle}>
            <LabelImportantIcon style={styles.iconoStyle}/>
            <NavLink 
                style={styles.linkStyle}
                to="/home/table"
            >
                Gestion del procesamiento
            </NavLink>
        </Box>

        <Box style={styles.boxStyle}>
            <LabelImportantIcon style={styles.iconoStyle}/>
            <NavLink 
                style={styles.linkStyle}
                to="/home/estadisticas"
            >
                Panel de estadisticas
            </NavLink>
        </Box>
        <Divider/>

        <Button
            onClick={ onLogout }
            sx={{
                color: 'secondary.main',
                mt: '5%',
                fontSize: '1rem'
            }}
        >
            logout
        </Button>
    </Box>
  )
}
