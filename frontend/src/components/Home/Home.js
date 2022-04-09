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
    const [favoriteArr, setFavoriteArr] = useState([]);


    const current = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=e4befada4a4165c700b3f433a15e6371`;
    const weekly = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=e4befada4a4165c700b3f433a15e6371`;



    const search = (e) => {
        if (e.key === 'Enter') {
            axios.get(current).then((res) => {
                setCurrWeather(res.data);
                console.log(res.data)
            })

            axios.get(weekly).then((res) => {
                setWeekWeather(res.data);
                console.log(res.data.list[0].weather[0])
            })
            setLocation('')
        }
    }

    const addFavorite = (e) => {
        e.preventDefault();
        setFavoriteArr([...favoriteArr, currWeather.name]);
    }

    const updateFavorite = (e) => {

        let userId = localStorage.userInfo.replaceAll('"', '');
        let favoriteLocation = {
            favorite: favoriteArr
        }

        axios.put(`https://wmdd4936-gwatanabe00.herokuapp.com/api/v1/profile/${userId}`, favoriteLocation)
    }

    const debouncedSave = useCallback(
        debounce(location => setValidLocation(location), 1500), []
    )

    const handleChange = e => {
        const { value: location } = e.target
        setLocation(location)

        debouncedSave(location)
    }

    const hourFormat = (date) => {
        const value = moment(date).format('YYYY/MM/DD h:mm A');

        return value;
    }


    return (
        <div className='home'>
            <div className="search">

                <input type="text" value={location} placeholder='Enter location' onChange={handleChange} onKeyPress={search} />

            </div>
            {validLocation ? (
                <div className="current">
                    <h2>Current Weather</h2>
                    <div className="location">
                        <p>{currWeather.name}</p>
                        <div className="btn">
                            <Button className="addFavorite" onClick={(e) => addFavorite(e)}>Add Favorite</Button>
                            <Button className="updateFavorite" onClick={updateFavorite}>Update Favorite List</Button>
                        </div>
                    </div>
                    <div className="currentTemp">
                        {currWeather.main ? (<p>{currWeather.main.temp.toFixed(1)} &#8451;</p>) : (null)}
                    </div>
                    <div className="currentWeather">
                        {currWeather.weather ? (<p>{currWeather.weather[0].main}</p>) : (null)}
                    </div>
                    <div className="currentIcon">
                        {currWeather.weather ? (<img src={`http://openweathermap.org/img/wn/${currWeather.weather[0].icon}@2x.png`} />) : (null)}
                    </div>
                </div>



            ) : (
                <h1>Data not found. Search for a location.</h1>
            )}


            {validLocation ? (

                <div className="weekly">
                    <h2>Weekly Forecast</h2>

                    <div className="weatherWrapper">


                        <div className="day1">
                            <div className="day">
                                {validLocation ? (<p>{hourFormat(weekWeather.list[8].dt_txt)}</p>) : (null)}
                            </div>
                            <div className="weather">
                                {validLocation ? (<p>{weekWeather.list[8].weather[0].main}</p>) : (null)}
                            </div>
                            <div className="weeklyIcon">
                                {validLocation ? (<img src={`http://openweathermap.org/img/wn/${weekWeather.list[8].weather[0].icon}@2x.png`} />) : (null)}
                            </div>
                            <div className="temp">
                                {validLocation ? (<p>{weekWeather.list[8].main.temp.toFixed()} &#8451;</p>) : (null)}
                            </div>
                        </div>


                        <div className="day2">
                            <div className="day">
                                {validLocation ? (<p>{hourFormat(weekWeather.list[16].dt_txt)}</p>) : (null)}
                            </div>
                            <div className="weather">
                                {validLocation ? (<p>{weekWeather.list[16].weather[0].main}</p>) : (null)}
                            </div>
                            <div className="weeklyIcon">
                                {validLocation ? (<img src={`http://openweathermap.org/img/wn/${weekWeather.list[16].weather[0].icon}@2x.png`} />) : (null)}
                            </div>
                            <div className="temp">
                                {validLocation ? (<p>{weekWeather.list[16].main.temp.toFixed()} &#8451;</p>) : (null)}
                            </div>
                        </div>


                        <div className="day3">
                            <div className="day">
                                {validLocation ? (<p>{hourFormat(weekWeather.list[24].dt_txt)}</p>) : (null)}
                            </div>
                            <div className="weather">
                                {validLocation ? (<p>{weekWeather.list[24].weather[0].main}</p>) : (null)}
                            </div>

                            <div className="weeklyIcon">
                                {validLocation ? (<img src={`http://openweathermap.org/img/wn/${weekWeather.list[24].weather[0].icon}@2x.png`} />) : (null)}
                            </div>
                            <div className="temp">
                                {validLocation ? (<p>{weekWeather.list[24].main.temp.toFixed()} &#8451;</p>) : (null)}
                            </div>
                        </div>

                        <div className="day4">
                            <div className="day">
                                {validLocation ? (<p>{hourFormat(weekWeather.list[32].dt_txt)}</p>) : (null)}
                            </div>
                            <div className="weather">
                                {validLocation ? (<p>{weekWeather.list[32].weather[0].main}</p>) : (null)}
                            </div>

                            <div className="weeklyIcon">
                                {validLocation ? (<img src={`http://openweathermap.org/img/wn/${weekWeather.list[32].weather[0].icon}@2x.png`} />) : (null)}
                            </div>
                            <div className="temp">
                                {validLocation ? (<p>{weekWeather.list[32].main.temp.toFixed()} &#8451;</p>) : (null)}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (null)}

        </div>
    )
}

export default Home
