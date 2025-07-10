
import { useEffect } from 'react'
import './App.css'

import { useDispatch } from 'react-redux'
import { getGenresThunk } from './store/slices/genresSlice'
function App() {
  const dispatch = useDispatch<any>()
  useEffect(() => {
   dispatch(getGenresThunk())
   
  },[])
  return (
    <div>

    </div>
  )
}

export default App
