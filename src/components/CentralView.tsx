import Header from './Header'
import TodaysHighlights from './TodaysHighlights'
import WeekDays from './WeekDays'

interface Props {
  unit: 'metric' | 'imperial'
  setUnit: React.Dispatch<React.SetStateAction<'metric' | 'imperial'>>
}

const CentralView = ({ unit, setUnit }: Props) => {
  return (
    <div className='w-full h-screen p-14 flex flex-col gap-12'>
      <Header
        unit={unit}
        setUnit={setUnit}
      />
      <WeekDays />
      <TodaysHighlights />
    </div>
  )
}

export default CentralView
