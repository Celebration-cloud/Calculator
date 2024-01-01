import { useState } from 'react'
import styles from './Buttons.module.css'
import {useDispatch} from 'react-redux'
function Buttons() {
  const dispatch = useDispatch()
  const [calculator, setCalculator] = useState({
    display: '0',
    operation: '',
    next: null,
    waitingForOperand: false
  })
const numberHandler = (number) =>  {
  if(calculator.waitingForOperand){
    setCalculator({...calculator, display : number ,operation: '',next:null, waitingForOperand:false})
    } else{
      setCalculator({...calculator,display: calculator.display === "0" ? number : calculator.display + number, waitingForOperand: true})
      dispatch({type: "result", payload: calculator.display})
    }
  }
  const operationHandler = (operator)=>{
    if(ca)
  }
  return (
    <section className={styles.buttons}>
      <span>c</span>
      <span className={styles.del} style={{ backgroundColor: "red" }}>
          DEL
      </span>
      <span>&divide;</span>
      <span>&times;</span>
      <div onClick={() => numberHandler(7)}>7</div>
      <div onClick={() => numberHandler(8)}>8</div>
      <div onClick={() => numberHandler(9)}>9</div>
      <span>&minus;</span>
      <div onClick={() => numberHandler(4)}>4</div>
      <div onClick={() => numberHandler(5)}>5</div>
      <div onClick={() => numberHandler(6)}>6</div>
      <span>+</span>
      <div onClick={() => numberHandler(1)}>1</div>
      <div onClick={() => numberHandler(2)}>2</div>
      <div onClick={() => numberHandler(3)}>3</div>
      <button className={styles.equal}>=</button>
      <div onClick={() => numberHandler(0o0)}>00</div>
      <div>.</div>
      <div onClick={() => numberHandler(0)}>0</div>
    </section>
  );
}

export default Buttons
