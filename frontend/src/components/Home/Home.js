import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../../shared/Button'
import './Home.scss';
import moment from 'moment';
import { debounce } from 'debounce';

const Home = () => {
    const [currWeather, setCurrWeather] = useState({});
    const [weekWeather, setWeekWeather] = useState({});
    const [validLocation, setValidLocation] = useState('');
    const [location, setLocation] = useState('');


    const current = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e4befada4a4165c700b3f433a15e6371`;
    const weekly = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=e4befada4a4165c700b3f433a15e6371`;



    const search = (e) => {
        if (e.key === 'Enter') {
            axios.get(current).then((res) => {
                setCurrWeather(res.data);
                console.log(res.data)
            })

            axios.get(weekly).then((res) => {
                setWeekWeather(res.data);
                console.log(res.data.list)
            })

            setLocation('')
        }
    }

    const debouncedSave = useCallback(
        debounce(location => setValidLocation(location), 1500), []
    )

    const handleChange = e => {
        const { value: location } = e.target
        setLocation(location)

        debouncedSave(location)
        // setLocation(e.target.value)
    }

    const hourFormat = (date) => {
        const value = moment(date).format('YYYY/MM/DD h:mm A');

        return value;
    }


    return (
        <div className='home'>
            <div className="search">


                <label htmlFor="location">Search your location</label>
                <input type="text" value={location} onChange={handleChange} onKeyPress={search} />




            </div>
            <div className="current">


                <h2>Current Weather</h2>
                <div className="location">
                    <p>{currWeather.name}</p>
                </div>
                <div className="currentTemp">
                    {currWeather.main ? (<p>{currWeather.main.temp}℃</p>) : (null)}
                </div>
                <div className="currentWeather">
                    {currWeather.weather ? (<p>{currWeather.weather[0].main}</p>) : (null)}
                </div>
                <div className="weatherIcon">
                    {currWeather.weather ? (<img src={`http://openweathermap.org/img/wn/${currWeather.weather[0].icon}@2x.png`} />) : (null)}
                </div>
            </div>

            <div className="weekly">
                <h2>Weekly Forecast</h2>

                <div className="weatherWrapper">
                    <div className="day1">
                        <div className="day">
                            {validLocation ? (<p>{hourFormat(weekWeather.list[8].dt_txt)}</p>) : (null)}

                        </div>
                        <div className="weather">
                            <p>Sunny</p>
                        </div>
                        <div className="temp">
                            <p>15℃</p>
                        </div>
                    </div>
                    <div className="day2">
                        <div className="day">

                        </div>
                        <div className="weather">
                            <p>Sunny</p>
                        </div>
                        <div className="temp">
                            <p>15℃</p>
                        </div>
                    </div>
                    <div className="day3">
                        <div className="day">

                        </div>
                        <div className="weather">
                            <p>Sunny</p>
                        </div>
                        <div className="temp">
                            <p>15℃</p>
                        </div>
                    </div>
                    <div className="day4">
                        <div className="day">

                        </div>
                        <div className="weather">
                            <p>Sunny</p>
                        </div>
                        <div className="temp">
                            <p>15℃</p>
                        </div>
                    </div>
                    <div className="day5">
                        <div className="day">

                        </div>
                        <div className="weather">
                            <p>Sunny</p>
                        </div>
                        <div className="temp">
                            <p>15℃</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
