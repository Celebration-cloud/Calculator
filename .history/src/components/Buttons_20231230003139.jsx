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
      <span style={{backgroundColor: "red"}}>DEL</span>
      <span>&divide;</span>
      <span>&times;</span>
      <div onClick={() => nu(7)}>7</div>
      <div>8</div>
      <div>9</div>
      <span>&minus;</span>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <span>+</span>
      <div onClick={handleOne}>1</div>
      <div>2</div>
      <div>3</div>
      <button className={styles.equal}>=</button>
      <div>00</div>
      <div>.</div>
      <div>0</div>
    </section>
  )
}

export default Buttons
