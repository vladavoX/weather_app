import Highlight from './Highlight'

const TodaysHighlights = () => {
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-12'>Today's Highlights</h2>
      <div className='grid grid-cols-3 gap-4'>
        <Highlight />
        <Highlight />
        <Highlight />
        <Highlight />
        <Highlight />
        <Highlight />
      </div>
    </div>
  )
}

export default TodaysHighlights
