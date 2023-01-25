import Search from './Search'
import WeatherTodayDetails from './WeatherTodayDetails'

interface Props {
  location: string
  setLocation: React.Dispatch<React.SetStateAction<string>>
  fetchWeather: () => Promise<void>
}

const LeftSidebar = ({ location, setLocation, fetchWeather }: Props) => {
  return (
    <div className='w-2/5 bg-gray-50 h-screen flex flex-col items-center p-14'>
      <Search
        location={location}
        setLocation={setLocation}
        fetchWeather={fetchWeather}
      />
      <WeatherTodayDetails />
    </div>
  )
}

export default LeftSidebar
