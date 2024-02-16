import { useState } from 'react'
import styles from './App.module.css'
import BtnContainer from './components/BtnContainer'
import Display from './components/Display'


function App() {

  //const btnNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']
  let [calVal, setcalval] = useState("")
  const onClickBtn = (btnText) => {
    if (btnText === 'C') {
      setcalval("")
    } else if (btnText === '<-') {
      setcalval(calVal.slice(0, calVal.length - 1))
    } else if (btnText === '=') {
      const res = eval(calVal)
      setcalval(calVal + "=" + res)
    } else {
      setcalval(calVal + btnText)
    }
  }
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <BtnContainer onClickBtn={onClickBtn}></BtnContainer>
    </div>
  )
}

export default App
