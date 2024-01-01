import React, { useState } from 'react'
import styles from './Result.module.css'
function Result() {
    const value = useSelector((store)=> store)
    const [result, setResult] = useState()
  return (
    <>
      <input className={styles.result}/>
    </>
  )
}

export default Result
