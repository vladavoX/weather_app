import { useEffect, useState } from 'react'
import WeekDay from './WeekDay'

interface Props {
  weather: any
  setWeather: React.Dispatch<React.SetStateAction<any>>
}

const WeekDays = ({ weather, setWeather }: Props) => {
  const [grouped, setGrouped] = useState({})
  const [averageTemp, setAverageTemp] = useState<string[]>([])

  const removeTimeFromDate = (weather: any) => {
    weather.list.forEach((day: any) => {
      day.dt_txt = day.dt_txt.split(' ')[0]
    })
    setWeather(weather)
  }

  const groupByDate = (weather: any) => {
    const grouped = weather.list.reduce((acc: any, day: any) => {
      const date = day.dt_txt
      if (!acc[date]) {
        acc[date] = []
      }
      acc[date].push(day)
      return acc
    }, {})
    return grouped
  }

  const getAverageTemp = (grouped: any) => {
    const averageTemp = Object.keys(grouped).map((date) => {
      const temps = grouped[date].map((day: any) => day.main.temp)
      const average = temps.reduce((a: any, b: any) => a + b) / temps.length
      return average.toFixed(0)
    })
    return averageTemp
  }

  useEffect(() => {
    if (weather) {
      removeTimeFromDate(weather)
      setGrouped(groupByDate(weather))
    }
  }, [weather])

  useEffect(() => {
    setAverageTemp(getAverageTemp(grouped))
  }, [grouped])
  return (
    <div className='flex gap-2 w-full justify-between'>
      {averageTemp &&
        averageTemp.map((temp, index) => (
          <WeekDay
            key={index}
            temp={temp}
          />
        ))}
    </div>
  )
}

export default WeekDays
