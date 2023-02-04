interface Props {
  temp: number
  day: string
}

const WeekDay = ({ temp, day }: Props) => {
  ;``
  return (
    <div className='bg-gray-50 flex flex-col items-center justify-center py-12 rounded-md w-full'>
      <p className='text-gray-900 font-bold text-xl'>{day}</p>
      <p>Icon</p>
      <p className='text-gray-900 font-bold text-xl'>{temp}°</p>
    </div>
  )
}

export default WeekDay
