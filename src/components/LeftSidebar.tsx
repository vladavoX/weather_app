import Search from './Search'
import WeatherTodayDetails from './WeatherTodayDetails'

const LeftSidebar = () => {
  return (
    <div className='w-2/5 bg-white h-screen'>
      <Search />
      <WeatherTodayDetails />
    </div>
  )
}

export default LeftSidebar
