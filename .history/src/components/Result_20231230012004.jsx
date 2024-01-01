import { useState } from 'react'
import styles from './Result.module.css'
import {useSelector} from 'react-redux'
function Result() {
    const valueNum = useSelector((store)=> store.calculator.calculate)
    const [result] = useState(value)
  return (
    <>
      <input value={result} disabled className={styles.result}/>
    </>
  )
}

export default Result
