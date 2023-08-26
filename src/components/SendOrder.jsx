import { CartContext } from '../context/CartContext'
import { useContext, useState } from 'react'
import { collection, addDoc, getFirestore } from "firebase/firestore"
import EmptyCart from './EmptyCart'
import CompleteCheckout from './CompleteCheckout'
import styles from '../styles/SendOrder.module.css'

const SendOrder = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const { cart } = useContext(CartContext)

    if (cart[0] === undefined) {
        return <EmptyCart />
    } else if (orderId != '') {
        return <CompleteCheckout ticket={orderId} />
    }

    const totalPrice = cart.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price
    }, 0)

    const order = {
        name,
        email,
        ...cart,
        totalPrice
    }

    const db = getFirestore()
    const ordersCollection = collection(db, 'order')

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(ordersCollection, order).then(({ id }) =>
            setOrderId(id))
    }

    return (
        <div className={styles.homeContainer}>
            <h1 className={styles.h1Title}>Checkout</h1>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" className={styles.inputForm}
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="text" placeholder="Email" className={styles.inputForm}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className={styles.greenBtn} type="submit"> Send Information </button>
            </form>
            {/* <p>Order number: {orderId}</p> */}
        </div>
    )
}

export default SendOrder