import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai'

interface Props {
  location: string
  setLocation: React.Dispatch<React.SetStateAction<string>>
  fetchWeather: () => Promise<void>
}

const Search = ({ location, setLocation, fetchWeather }: Props) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetchWeather()
    setLocation('')
  }

  return (
    <div className='flex items-center gap-4 bg-gray-100 py-3 px-4 rounded-md'>
      <AiOutlineSearch />
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search for places...'
          className='focus:outline-none placeholder-black bg-gray-100'
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
      </form>
      <AiOutlineCloseCircle
        className='cursor-pointer'
        onClick={() => setLocation('')}
      />
    </div>
  )
}

export default Search
