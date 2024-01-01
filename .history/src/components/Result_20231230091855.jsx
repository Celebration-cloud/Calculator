import { useState } from 'react'
import styles from './Result.module.css'
import {useSelector} from 'react-redux'
function Result() {
    const valueNumber = useSelector((store)=> store.calculator.calculate)
    const [res, setRes] = useState()
    function handleClick(){
        setRes(valueNumber)
    }
  return (
    <>
      <input value={res}  className={styles.result}/>
    </>
  )
}

export default Result
