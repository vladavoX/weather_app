import { useEffect, useState } from 'react'

import CentralView from './components/CentralView'
import LeftSidebar from './components/LeftSidebar'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  const [weather, setWeather] = useState(null)
  const [location, setLocation] = useState('')
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric')
  const [saveLocation, setSaveLocation] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const geoLocation = () => {
    try {
      if (navigator.geolocation) {
        setLoading(true)
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            fetch(
              `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${
                import.meta.env.VITE_API_KEY
              }&units=${unit}`
            )
              .then((res) => res.json())
              .then((data) => {
                setWeather(data)
                setLoading(false)
              })
          },
          (error) => {
            console.log(error)
            setLoading(false)
          }
        )
      }
    } catch (error: any) {
      setError(error.message)
    }
  }

  const fetchWeather = async () => {
    try {
      setLoading(true)
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${saveLocation}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=${unit}`
      )
      const data = await res.json()
      setWeather(data)
      setLoading(false)
    } catch (error: any) {
      setError(error.message)
    }
  }

  useEffect(() => {
    geoLocation()
  }, [])

  useEffect(() => {
    if (location === '') return
    setSaveLocation(location)
  }, [location])

  useEffect(() => {
    if (saveLocation === '') return
    fetchWeather()
  }, [unit])

  return (
    <div className='h-screen flex justify-center items-center bg-gradient-to-br from-orange-200 to-sky-200'>
      {error && <p className='text-red-500'>{error}</p>}
      {loading && <LoadingSpinner />}
      {!loading && !error && (
        <>
          <LeftSidebar
            location={location}
            setLocation={setLocation}
            fetchWeather={fetchWeather}
            weather={weather}
          />
          <CentralView
            unit={unit}
            setUnit={setUnit}
            weather={weather}
            setWeather={setWeather}
          />
        </>
      )}
    </div>
  )
}

export default App
