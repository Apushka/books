import React from 'react'
import styles from './Preloader.module.css'
import preloader from '../../assets/preloader.png'

type PropsType = {}

const Preloader: React.FC<PropsType> = () => {

    return (
        <div className={styles.modal__container}>
            <div className={styles.modal}>
                <div className={styles.main} onClick={(e) => e.stopPropagation()}>
                    <img src={preloader} />
                </div>
            </div>
        </div>
    )
}

export default Preloader;