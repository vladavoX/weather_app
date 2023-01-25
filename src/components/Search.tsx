import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai'

const Search = () => {
  return (
    <div className='flex items-center gap-4 bg-gray-100 p-2 rounded-md'>
      <AiOutlineSearch />
      <form>
        <input
          type='text'
          placeholder='Search for places...'
          className='focus:outline-none placeholder-black bg-gray-100'
        />
      </form>
      <AiOutlineCloseCircle className='cursor-pointer' />
    </div>
  )
}

export default Search
