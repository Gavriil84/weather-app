import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

const Profile = () => {
    const [profile, setProfile] = useState({});
    const [location, setLocation] = useState('');
    const [currWeather, setCurrWeather] = useState({});

    let userId = localStorage.userInfo.replaceAll('"', '');

    const current = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=e4befada4a4165c700b3f433a15e6371`;

    const renderWeather = (e, location) => {
        console.log(location)
        setLocation(location)
    }

    useEffect(() => {
        function userProfile() {
            axios.get(`http://localhost:5000/api/v1/profile/${userId}`)
                .then(
                    res => setProfile(res.data)
                ).catch(error => console.log(error))

        }
        userProfile();

    }, [])

    useEffect(() => {
        function showWeather() {
            axios.get(current).then((res) => {
                setCurrWeather(res.data);
                console.log(currWeather)
            })
        }
        showWeather();
    }, [location])


    const userLogout = (e) => {
        localStorage.removeItem('userInfo')
    }
    return (
        <div>

            <h1>Hi, {profile.userName}!</h1>

            <div className="favorites">
                {profile.favorite ?
                    (
                        <ul>
                            {profile.favorite.map((location, i) => {
                                return <button key={i} onClick={(e) => renderWeather(e, location)}>{location}</button>
                            })}
                        </ul>

                    ) : (
                        <p>No favorites..!</p>
                    )}
            </div>

            {location ?
                (
                    <div className="current">
                        <h2>Current Weather</h2>
                        <div className="location">
                            <p>{currWeather.name}</p>
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
                    <h3>No data found. Select your location.</h3>
                )}

            {localStorage.getItem('userInfo') ? (
                <li>
                    <Link className='link' to="/" onClick={userLogout}>Log out</Link>
                </li>
            ) : (null)}
        </div>
    )
}

export default Profile
