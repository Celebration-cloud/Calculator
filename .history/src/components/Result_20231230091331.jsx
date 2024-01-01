import { useState } from 'react'
import styles from './Result.module.css'
import {useSelector} from 'react-redux'
function Result() {
    const valueNumber = useSelector((store)=> store.calculator.calculate)
    const [res, setRes] = useState()
    function handleClick(e){
      if (isNaN(e.target.innerText)) {
        return;
        }
        let newValue= String(valueNumber + e.target.innerText);
        setRes(newValue);
    }
  return (
    <>
      <input value={res} o  className={styles.result}/>
    </>
  )
}

export default Result
