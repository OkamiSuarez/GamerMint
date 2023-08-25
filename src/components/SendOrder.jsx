import { CartContext } from '../context/CartContext'
import { useContext, useState } from 'react'
import { collection, addDoc, getFirestore } from "firebase/firestore"
import EmptyCart from './EmptyCart'
import CompleteCheckout from './CompleteCheckout'

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
        <div>
            <h1>Sending Orders</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="text" placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit"> Send Information </button>
            </form>
            <p>Order number: {orderId}</p>
        </div>
    )
}

export default SendOrder