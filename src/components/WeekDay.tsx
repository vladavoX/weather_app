interface Props {
  temp: number
  day: string
}

const WeekDay = ({ temp, day }: Props) => {
  ;``
  return (
    <div className='flex flex-col items-center justify-center w-full gap-4'>
      <p className='text-gray-900 text-5xl'>{temp}°</p>
      <p className='text-gray-900 font-bold text-2xl'>{day}</p>
    </div>
  )
}

export default WeekDay
