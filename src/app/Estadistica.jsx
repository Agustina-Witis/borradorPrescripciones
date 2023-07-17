import { Link as RouterLink } from 'react-router-dom';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { BarPlot, LinePlot, ChartContainer, ChartsXAxis, ChartsYAxis } from '@mui/x-charts';
import SvgIcon from '@mui/material/SvgIcon';
import { ArrowCircleRight, CheckCircle, Pending, Error } from '@mui/icons-material';
import { AppLayout } from './AppLayout';
import { SelectCustom } from './SelectCustom';


function ArrowCircleRightIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
function CheckCircleIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
function PendingIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
function ErrorIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const series = [
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'eco',
    color: '#ff1744',
    data: [1, 2, 2, 3, 1],
  },
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'eco',
    color: '#59a14f',
    data: [20, 22, 28, 23, 22],
  },
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'pib',
    color: '#3B14DE',
    data: [1, 2, 1, 2, 1],
  },
];


export const Estadistica = () => {
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
          PANEL DE ESTADISTICAS
        </Typography>

          <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '80%'
          }}
          >
            <Box>
              <Box sx={{display: 'flex'}}>
                <SelectCustom item1="Argentina" item2="Brasil" item3="Chile" itme4="Colombia" item5="Peru"/>
                <SelectCustom item1="Meses" item2="Años" item3="Montos" itme4={null} item5={null}/>              
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexzWrap: 'wrap',
                  alignItems: 'center',
                  marginTop: '10%',
                }}
              >
                <Typography variant='h6' color='primary'>
                  PROCESADOS:
                </Typography>  
                <IconButton>
                  <CheckCircle fontSize="large" color='success'/>
                </IconButton>            
              </Box> 
              <Box
                sx={{
                  display: 'flex',
                  flexzWrap: 'wrap',
                  alignItems: 'center',
                  marginTop: '5%',
                }}
              >
                <Typography variant='h6' color='primary'>
                  PENDIENTES:
                </Typography>  
                <IconButton>
                  <Pending fontSize="large" color='fourth'/>
                </IconButton>            
              </Box> 
              <Box
                sx={{
                  display: 'flex',
                  flexzWrap: 'wrap',
                  alignItems: 'center',
                  marginTop: '5%',
                }}
              >
                <Typography variant='h6' color='primary'>
                  RECHAZADOS:
                </Typography>  
                <IconButton>
                  <Error fontSize="large" color='error'/>
                </IconButton>            
              </Box>              
            </Box>

            <ChartContainer
              spacing={0}
              series={series}
              width={650}
              height={400}
              xAxis={[
                {
                  id: 'Meses',
                  data: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
                  scaleType: 'band',
                  valueFormatter: (value) => value.toString(),
                },
              ]}
              yAxis={[
                {
                  id: 'eco',
                  scaleType: 'linear',
                },
                {
                  id: 'pib',
                  scaleType: 'linear',
                },
              ]}
            >
              <BarPlot />
              <ChartsYAxis position="left" axisId="eco" />
              <ChartsYAxis position="right" axisId="pib" />
              <ChartsXAxis position="bottom" axisId="Meses" />
            </ChartContainer>              
          </Box>
        

        <IconButton component={ RouterLink } to="/home/descargar">
                <ArrowCircleRight fontSize="large" color='primary'/>
        </IconButton>
      </Grid>
      </AppLayout>
    </>
  )
}

