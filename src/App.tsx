import { useEffect, useState } from 'react'

import CentralView from './components/CentralView'
import LeftSidebar from './components/LeftSidebar'

function App() {
  const [weather, setWeather] = useState(null)
  const fetchWeather = async () => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=London,GB&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data)
      })
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  return (
    <div className='h-screen flex justify-center items-center bg-gradient-to-br from-orange-200 to-sky-200'>
      <LeftSidebar />
      <CentralView />
    </div>
  )
}

export default App
