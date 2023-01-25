import { useEffect, useState } from 'react'

import CentralView from './components/CentralView'
import LeftSidebar from './components/LeftSidebar'

function App() {
  const [weather, setWeather] = useState(null)
  const [location, setLocation] = useState('')
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric')
  const [saveLocation, setSaveLocation] = useState('')

  const fetchWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${saveLocation}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=${unit}`
    )
    const data = await res.json()
    setWeather(data)
  }

  useEffect(() => {
    if (location === '') return
    setSaveLocation(location)
  }, [location])

  useEffect(() => {
    fetchWeather()
  }, [unit])

  return (
    <div className='h-screen flex justify-center items-center bg-gradient-to-br from-orange-200 to-sky-200'>
      <LeftSidebar
        location={location}
        setLocation={setLocation}
        fetchWeather={fetchWeather}
      />
      <CentralView
        unit={unit}
        setUnit={setUnit}
      />
    </div>
  )
}

export default App
