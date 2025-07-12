
import { useEffect } from 'react'
import './App.css'
import { getGenresThunk } from './store/slices/genresSlice'
import { useAppDispatch } from './store/hooks'
import Header from './Components/Header/Header'
function App() {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(getGenresThunk())
  }, [])
  return (
    <div>
      <Header/>
    </div>
  )
}

export default App
