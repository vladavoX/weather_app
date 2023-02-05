import Header from './Header'
import WeekDays from './WeekDays'

interface Props {
  unit: 'metric' | 'imperial'
  setUnit: React.Dispatch<React.SetStateAction<'metric' | 'imperial'>>
  weather: any
  setWeather: React.Dispatch<React.SetStateAction<any>>
}

const CentralView = ({ unit, setUnit, weather, setWeather }: Props) => {
  return (
    <div className='w-full h-screen p-14 flex flex-col'>
      <Header
        unit={unit}
        setUnit={setUnit}
      />
      <WeekDays
        weather={weather}
        setWeather={setWeather}
      />
    </div>
  )
}

export default CentralView
