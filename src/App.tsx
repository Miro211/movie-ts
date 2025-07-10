
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"
  useEffect(() => {
   axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
   .then((res) => console.log(res.data));
   
  },[])
  return (
    <div>

    </div>
  )
}

export default App
