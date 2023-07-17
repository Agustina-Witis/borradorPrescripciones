import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Grid, IconButton, Table, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import { AppLayout } from './AppLayout';
import { ArrowCircleRight } from '@mui/icons-material';

function ArrowCircleRightIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
  },
}));

export const Resumen = () => {
  return (
    <>
      <AppLayout>
      <Grid 
        className='animate__animated animate__fadeIn animate__slower	3s'
        container
        spacing= {0}
        direction= "column"
        alignItems= "center"
        justifyContent= "center"
        sx={{
            minHeight: '90vh',
        }}    
      >
          <Grid
            item 
            className='box-shadow'
            xs={3}
            sx={{ 
                width: { sm: 450 },
                backgroundColor: 'secondary.main', 
                padding: 3, 
                borderRadius: 2 
            }}
          >
            <Typography variant="h5" color='withe.main'>
                RESUMEN DE DATOS CARGADOS
            </Typography>

        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Procesados</StyledTableCell>
                <StyledTableCell>7797 (95%)</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Rechazados</StyledTableCell>
                <StyledTableCell>368 (4%)</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Pendientes</StyledTableCell>
                <StyledTableCell>0%</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Duplicados</StyledTableCell>
                <StyledTableCell>106 (1%)</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Total</StyledTableCell>
                <StyledTableCell>8165</StyledTableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
          </Grid>
          <IconButton component={ RouterLink } to="/home/table">
                <ArrowCircleRight fontSize="large" color='primary'/>
            </IconButton>
      </Grid>
      </AppLayout>      
    </>
  )
}
