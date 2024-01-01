import React, { useState } from 'react'
import styles from './Result.module.css'
function Result() {
    
    const [result, setResult] = useState()
  return (
    <>
      <input className={styles.result}/>
    </>
  )
}

export default Result
