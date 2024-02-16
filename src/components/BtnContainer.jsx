import React from 'react'
import styles from './BtnContainer.module.css'

function BtnContainer({ onClickBtn }) {

    const btnNames = ["C", "<-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="]

    return (
        <div className={styles.btnContainer}>
            {btnNames.map(buttonName =>
                <button className={styles.btn} onClick={() => { onClickBtn(buttonName) }}>{buttonName}</button>
            )}
        </div>
    )
}

export default BtnContainer
