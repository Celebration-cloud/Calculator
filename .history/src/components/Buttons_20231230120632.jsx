import { useState } from 'react'
import styles from './Buttons.module.css'
import {useDispatch, useSelector} from 'react-redux'
function Buttons() {
  const equal = useSelector((store)=> store.calculator.cal)
  const dispatch = useDispatch()
  const [calculator, setCalculator] = useState({
    display: '0',
    operation: '',
    waitingForOperand: false
  })
  
  const handleEqual = (e)=>{
    e.preventDefault()
    if(calculator.operation ==='') return;
    setCalculator({display: eval(calculator.display)})
    
    dispatch({type: "result", payload: calculator.display})
  }
  const handleReset= ()=> {
    setCalculator({display: '0', operation: "", waitingForOperand: false})
    dispatch({ type: "result", payload: calculator.display });
  }
const numberHandler = (number) =>  {
  dispatch({ type: "display", payload: number });
  setCalculator({
    display:
      calculator.display === "0" ? number : `${calculator.display}${number}`,
    waitingForOperand: true,
  });
  
}

  const operationHandler = (operator)=>{
dispatch({ type: "result", payload: calculator.display });
    if(calculator.waitingForOperand){
      setCalculator({display: `${calculator.display} ${operator} ` , operation: operator, waitingForOperand: false})
    }
    
  }
  return (
    <section className={styles.buttons}>
      <span onClick={handleReset}>c</span>
      <span className={styles.del} style={{ backgroundColor: "red" }}>
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
