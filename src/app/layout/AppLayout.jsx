import { Toolbar } from '@mui/material';
import { NavBar } from '../ui/NavBar';

const styles = {
    bgColor: 
    {
        backgroundColor: '#F2F3F4',
        width: '100%',
        height: '100vh'
    }
  };

export const AppLayout = ({children}) => {
  return (
    <div style={styles.bgColor}>

        <NavBar/>

        <Toolbar/>

      {children}
    </div>
  )
}


