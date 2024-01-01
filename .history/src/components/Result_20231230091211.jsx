import styles from './Result.module.css'
import {useSelector} from 'react-redux'
function Result() {
    const valueNumber = useSelector((store)=> store.calculator.calculate)
    const [res, set]
  return (
    <>
      <input value={valueNumber}  className={styles.result}/>
    </>
  )
}

export default Result
