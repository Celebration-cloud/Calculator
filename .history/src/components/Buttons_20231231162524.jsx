import styles from './Buttons.module.css'
import {useDispatch} from 'react-redux'
import useKey from './useKey'
import { useState } from 'react'
function Buttons() {
  const [num, setNum] = useState('0')
  const [waiting, setWaiting] = useState(false)
  const dispatch = useDispatch()

  function handleEqual(){
    dispatch({type: "equal"})
  }

  useKey("Enter", handleEqual)
  const handleReset= ()=> {
    dispatch({ type: "reset" });
  }
  const handleDelete= ()=> {
    dispatch({ type: "delete" });
  }
const numberHandler = (number) =>  {
  dispatch({ type: "display", payload: {num, waiting} });
  // if(num === '0') return number
  setNum(`${num${number}`)
  setWaiting(true)
}

  const operationHandler = (operator)=>{
dispatch({ type: "operation", payload: {operator, waiting} });
    if(waiting){
      setNum(`${num}${operator}`)
      setWaiting(false)
    }
  }
  return (
    <section className={styles.buttons}>
      <span onClick={handleReset}>c</span>
      <span onClick={handleDelete} className={styles.del} style={{ backgroundColor: "red" }}>
        DEL
      </span>
      <span onClick={() => operationHandler(`/`)}>&divide;</span>
      <span onClick={() => operationHandler('*')}>&times;</span>
      <div onClick={() => numberHandler(7)}>7</div>
      <div onClick={() => numberHandler(8)}>8</div>
      <div onClick={() => numberHandler(9)}>9</div>
      <span onClick={() => operationHandler("-")}>&minus;</span>
      <div onClick={() => numberHandler(4)}>4</div>
      <div onClick={() => numberHandler(5)}>5</div>
      <div onClick={() => numberHandler(6)}>6</div>
      <span onClick={() => operationHandler("+")}>+</span>
      <div onClick={() => numberHandler(1)}>1</div>
      <div onClick={() => numberHandler(2)}>2</div>
      <div onClick={() => numberHandler(3)}>3</div>
      <button onClick={handleEqual} className={styles.equal}>=</button>
      <div onClick={() => numberHandler('00')}>00</div>
      <div onClick={() => operationHandler('.')}>.</div>
      <div onClick={() => numberHandler(0)}>0</div>
    </section>
  );
}

export default Buttons
