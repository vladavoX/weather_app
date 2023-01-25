import CentralView from './components/CentralView'
import LeftSidebar from './components/LeftSidebar'

function App() {
  return (
    <div className='h-screen flex justify-center items-center bg-gradient-to-br from-orange-200 to-sky-200'>
      <LeftSidebar />
      <CentralView />
    </div>
  )
}

export default App
