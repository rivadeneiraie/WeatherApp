import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

import './App.css';

import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

const cities = [ 
  'Buenos Aires,ar', 
  'Bogota,col', 
  'Santiago,cl',
  'washington dc,us',
  'Ciudad de Mexico,mx',
  'Madrid,es',
];

const App = () => (
      <Grid>
        <Row>
          <Col xs={12}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                    Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={6}>
            <LocationListContainer cities={cities} ></LocationListContainer>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <Paper elevation={3}>
                <div className='detail'>
                  <ForecastExtendedContainer></ForecastExtendedContainer> 
                </div>
            </Paper> 
          </Col>
        </Row>
      </Grid>
) 

export default App;

 