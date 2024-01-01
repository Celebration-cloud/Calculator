import { useState } from 'react'
import styles from './Buttons.module.css'
function Buttons() {
  const [calculator, setCalculator] = useState({
    display: `0`,
    operation: '',
    next: null,
    waitingForOperand: false
  })
const numberHandler = (number) => () => {
  if(calculator.waitingForOperand){
    setCalculator({...calculator, display : number ,operation: '',next:null, waitingForOperand:false})
    } else{
      setCalculator({...calculator,display: calculator.display === "0" ? number : calculator.display + number, waiting})
    }
  }
  return (
    <section className={styles.buttons}>
      <span>c</span>
      <span><button className={styles} style={{ backgroundColor: "red", }}>DEL</button></span>
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
      <div>2</div>
      <div>3</div>
      <button className={styles.equal}>=</button>
      <div>00</div>
      <div>.</div>
      <div>0</div>
    </section>
  );
}

export default Buttons