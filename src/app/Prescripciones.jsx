import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { TablePagination, IconButton, Grid, Table, TableCell, tableCellClasses, TableBody, TableContainer, TableHead, TableRow, Paper, Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import { ArrowCircleRight, PlayCircleFilledWhite, StopCircle } from '@mui/icons-material';
import { AppLayout } from './AppLayout';
import { SelectCustom } from './SelectCustom';


function ArrowCircleRightIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
function PlayCircleFilledWhiteIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
function StopCircleIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#2C3E50',
    color: theme.palette.common.white,
    textTransform: 'uppercase'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(DBSchemaid, Codigo, Comp, Proveedor, Estado, Mensaje) {
  return { DBSchemaid, Codigo, Comp, Proveedor, Estado, Mensaje};
}

const rows = [
  createData(123, 590, 6000259874, 'nombre provedo','OK', 'mensaje'),
  createData(124, 590, 6000259874, 'nombre provedo', 'PP', 'mensaje'),
  createData(125, 590, 6000259874, 'nombre provedo', 'ERROR', 'mensaje'),
  createData(126, 590, 6000259874, 'nombre provedo', 'OK', 'mensaje'),
  createData(127, 590, 6000259874, 'nombre provedo', 'PP', 'mensaje'),
];

export const Prescripciones = () => {

  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [estado, setEstado] = useState(true);

  const handChangeEstado = ()=> {
     setEstado((current) => !current) 
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
        <Typography variant='h4' color='secondary'>
          GESTION DEL PROCESAMIENTO
        </Typography>
          <Box 
          sx={{
            width: '80%',
            display: 'flex',
            flexWrap:' wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2%'
          }}
          >
            <SelectCustom item1="Total" item2="Procesados" item3="Pendientes" itme4="Rechazados" item5="Duplicados"/>
            <TablePagination
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />  
            <Stack spacing={2} direction="row" alignItems="center">
              <Typography variant='h6' color='primary'>
                Estado:
              </Typography>
              <IconButton onClick={handChangeEstado}>
                {estado == true? <PlayCircleFilledWhite fontSize="large" color='success'/> 
                : <StopCircle fontSize="large" color='error'/>}
              </IconButton>
            </Stack>          
          </Box>

          <Box sx={{width: '80%'}}>
            <TableContainer component={Paper} >
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>DBSchemaid</StyledTableCell>
                    <StyledTableCell>Codigo</StyledTableCell>
                    <StyledTableCell>Comp</StyledTableCell>
                    <StyledTableCell>Proveedor</StyledTableCell>
                    <StyledTableCell>Estado</StyledTableCell>
                    <StyledTableCell>Mensaje</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.DBSchemaid}>
                      <StyledTableCell component="th" scope="row">
                        {row.DBSchemaid}
                      </StyledTableCell>
                      <StyledTableCell>{row.Codigo}</StyledTableCell>
                      <StyledTableCell>{row.Comp}</StyledTableCell>
                      <StyledTableCell>{row.Proveedor}</StyledTableCell>
                      <StyledTableCell>{row.Estado}</StyledTableCell>
                      <StyledTableCell>{row.Mensaje}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <IconButton component={ RouterLink } to="/home/estadisticas">
                <ArrowCircleRight fontSize="large" color='primary'/>
          </IconButton>
        </Grid>
      </AppLayout>
    </>
  )
}


