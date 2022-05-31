import React from 'react';
import './App.css';
import { Card, CardContent } from '@mui/material';
import moment from 'moment';
import Copyright from './Copyright';

const Weather = ({ weatherData }) => (

    <div>
        <Card className='card' >
            <CardContent className='cardContent'>
                <h1 className='header' >{weatherData.name}</h1>
                <p className="details">{weatherData.weather[0].main}</p>
                <p className='details'>Temprature: {weatherData.main.temp} &deg;C</p>
                <p className='details'>Day: {moment().format('dddd')}</p>
                <p className='details'>Date: {moment().format('LL')}</p>
            </CardContent>
        </Card>
        <Copyright />
    </div>
)

export default Weather;