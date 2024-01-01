import styles from './Result.module.css'
import {useSelector} from 'react-redux'
function Result() {
    const valueNumber = useSelector((store)=> store.calculator.calculate)
    co
  return (
    <>
      <input value={valueNumber}  className={styles.result}/>
    </>
  )
}

export default Result
