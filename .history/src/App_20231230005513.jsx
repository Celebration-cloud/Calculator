import './App.css'
import Buttons from './components/Buttons'
import Result from './components/Result'
import {Provider} from 'react-redux'
import
function App() {
  return (
    <>
      <div className='calculator'>
        <Result/>
        <Buttons/>
      </div>
    </>
  )
}

export default App