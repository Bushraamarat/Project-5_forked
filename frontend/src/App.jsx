import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import Login from './pages/login'
import Register from './pages/register';
function App() {
  const [count, setCount] = useState(0)

  return (

  <>
  <Login/>
 <Register/>
  </>
      
  )
}

export default App
