import { RiCelsiusFill, RiFahrenheitFill } from 'react-icons/ri'

interface Props {
  unit: 'metric' | 'imperial'
  setUnit: React.Dispatch<React.SetStateAction<'metric' | 'imperial'>>
}

const Header = ({ unit, setUnit }: Props) => {
  return (
    <div className='flex w-full justify-between items-center text-2xl'>
      <h2 className='font-semibold'>Week</h2>
      <div className='flex gap-4'>
        <button
          className={`w-14 h-14 flex items-center justify-center ${
            unit === 'metric'
              ? 'bg-gray-50 text-gray-900'
              : 'bg-gray-900 text-gray-50'
          } rounded-full`}
          onClick={() => setUnit('metric')}
        >
          <RiCelsiusFill />
        </button>
        <button
          className={`w-14 h-14 flex items-center justify-center ${
            unit === 'imperial'
              ? 'bg-gray-50 text-gray-900'
              : 'bg-gray-900 text-gray-50'
          } rounded-full`}
          onClick={() => setUnit('imperial')}
        >
          <RiFahrenheitFill />
        </button>
      </div>
    </div>
  )
}

export default Header
