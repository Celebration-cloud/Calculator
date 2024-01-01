import styles from './Buttons.module.css'
function Buttons() {

  return (
    <section className={styles.buttons}>
      <span>c</span>
      <span st>DEL</span>
      <span>&divide;</span>
      <span>&times;</span>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <span>&minus;</span>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <span>+</span>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <button className={styles.equal}>=</button>
      <div>00</div>
      <div>.</div>
      <div>0</div>
    </section>
  )
}

export default Buttons
