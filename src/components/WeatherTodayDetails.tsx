import { useEffect, useState } from 'react'

interface Props {
  weather: any
}

const WeatherTodayDetails = ({ weather }: Props) => {
  const [newWeather, setNewWeather] = useState([])
  const [weatherToday, setWeatherToday] = useState([])

  const getWeatherToday = (newWeather: any) => {
    let date = new Date().toISOString().split('T')[0].split('-').join('-')
    const todayWeather = newWeather.list.filter(
      (day: any) => day.dt_txt.split(' ')[0] === date
    )
    return todayWeather
  }

  useEffect(() => {
    if (weather) setNewWeather(weather)
  }, [weather])

  useEffect(() => {
    if (newWeather.length === 0) return
    setWeatherToday(getWeatherToday(newWeather))
  }, [newWeather])

  return (
    <div className='mt-10 flex flex-col justify-center items-center gap-10'>
      <h3 className='font-bold text-3xl'>Today</h3>
      {weatherToday &&
        weatherToday.map((day: any) => (
          <div key={day.dt_txt}>
            <p className='text-2xl'>{day.main.temp.toFixed(0)}°</p>
          </div>
        ))}
    </div>
  )
}

export default WeatherTodayDetails
