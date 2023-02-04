import { useEffect, useState } from 'react'
import WeekDay from './WeekDay'

interface Props {
  weather: any
  setWeather: React.Dispatch<React.SetStateAction<any>>
}

const WeekDays = ({ weather, setWeather }: Props) => {
  const [newWeather, setNewWeather] = useState([])
  const [grouped, setGrouped] = useState([])

  const dateFormatAndGroup = (newWeather: any) => {
    newWeather.list.map((day: any) => {
      const date = day.dt_txt.split(' ')
      const dayOfWeek = new Date(date[0]).toLocaleString('en-us', {
        weekday: 'short',
      })
      day.dt_txt = dayOfWeek
    })

    let grouped = newWeather.list.reduce((r: any, a: any) => {
      r[a.dt_txt] = [...(r[a.dt_txt] || []), a]
      return r
    }, {})

    for (const key in grouped) {
      grouped[key] = grouped[key].map((day: any) => day.main.temp)
      grouped[key] = (
        grouped[key].reduce((a: any, b: any) => a + b) / 7
      ).toFixed(0)
    }
    setGrouped(grouped)
  }

  useEffect(() => {
    if (weather) {
      setNewWeather(weather)
    }
  }, [weather])

  useEffect(() => {
    if (newWeather.length === 0) return
    dateFormatAndGroup(newWeather)
  }, [newWeather])

  return (
    <div className='flex gap-2 w-full justify-between'>
      {grouped &&
        Object.keys(grouped).map((day: any) => (
          <WeekDay
            key={day}
            day={day}
            temp={grouped[day]}
          />
        ))}
    </div>
  )
}

export default WeekDays
