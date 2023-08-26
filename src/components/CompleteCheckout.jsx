import styles from '../styles/CompleteCheckout.module.css'


const CompleteCheckout = ({ticket}) => {
  return (
    <div className={styles.homeContainer}>
        <h1 className={styles.h1Title}>
        Your gaming stats have been updated
        </h1>
        <h2 className={styles.h2Text}>
        Please find your ticket on the below and have a great day playing your new games
        </h2>
        <h2 className={styles.h2Ticket}>
          Ticket no. {ticket}
        </h2>
    </div>
  )
}

export default CompleteCheckout