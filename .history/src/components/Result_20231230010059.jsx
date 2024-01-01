import React, { useState } from 'react'
import styles from './Result.module.css'
import {useSelector} from 'react-redux'
function Result() {
    const value = useSelector((store)=> store.calculator.)
    const [result] = useState(value)
  return (
    <>
      <input value={} className={styles.result}/>
    </>
  )
}

export default Result
