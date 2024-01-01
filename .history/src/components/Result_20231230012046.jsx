import { useState } from 'react'
import styles from './Result.module.css'
import {useSelector} from 'react-redux'
function Result() {
    const valueNumber = useSelector((store)=> store.calculator.calculate)
    const [result] = useState(valueNumber)
  return (
    <>
      <input value={result}  className={styles.result}/>
    </>
  )
}g

export default Result
