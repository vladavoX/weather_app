import Header from './Header'
import TodaysHighlights from './TodaysHighlights'
import WeekDays from './WeekDays'

const CentralView = () => {
  return (
    <div className='w-full h-screen p-14'>
      <Header />
      <WeekDays />
      <TodaysHighlights />
    </div>
  )
}

export default CentralView
