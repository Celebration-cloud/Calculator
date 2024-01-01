import { useState } from 'react'
import styles from './Result.module.css'
import {useSelector} from 'react-redux'
function Result() {
    const valueNumber = useSelector((store)=> store.calculator.calculate)
    const [res, setRes] = useState()
    function handleClick(e){
      if (isNaN(valueNumber)) {
        return ;
        }
        setRes()
    }
  return (
    <>
      <input value={res} onChange={handleClick}  className={styles.result}/>
    </>
  )
}

export default Result
