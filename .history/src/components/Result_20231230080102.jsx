import { useState } from 'react'
import styles from './Result.module.css'
import {useSelector} from 'react-redux'
function Result() {
    const valueNumber = useSelector((store)=> parseIntstore.calculator.calculate)
    const [result] = useState(valueNumber)
  return (
    <>
      <input value={parseInt(valueNumber)}  className={styles.result}/>
    </>
  )
}

export default Result
