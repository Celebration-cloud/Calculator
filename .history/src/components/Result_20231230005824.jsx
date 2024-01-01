import React, { useState } from 'react'
import styles from './Result.module.css'
function Result() {
    const value = useSelector((s))
    const [result, setResult] = useState()
  return (
    <>
      <input className={styles.result}/>
    </>
  )
}

export default Result
