// import { useState } from 'react'
import styles from './Buttons.module.css'
import {useDispatch} from 'react-redux'
import useKey from './useKey'
function Buttons() {
  const dispatch = useDispatch()
  // const [calculator, setCalculator] = useState({
  //   display: '0',
  //   operation: '',
  //   waitingForOperand: false
  // })
  
  function handleEqual(){
    // if(calculator.operation ==='') return;
    // setCalculator({display: eval(calculator.display)})
    
    dispatch({type: "equal"})
  }
  useKey("Enter", (){
    // if(calculator.operation ==='') return;
    // setCalculator({display: eval(calculator.display)})
    
    dispatch({type: "equal"})
  })
  
  const handleReset= ()=> {
    // setCalculator({display: '0', operation: "", waitingForOperand: false})
    dispatch({ type: "reset" });
  }
const numberHandler = (number) =>  {
  dispatch({ type: "display", payload: number });
  // setCalculator({
  //   display:
  //     calculator.display === "0" ? number : `${calculator.display}${number}`,
  //   waitingForOperand: true,
  // });
  
}

  const operationHandler = (operator)=>{
dispatch({ type: "operation", payload: operator });
    // if(calculator.waitingForOperand){
    //   setCalculator({display: `${calculator.display} ${operator} ` , operation: operator, waitingForOperand: false})
    // }
    
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