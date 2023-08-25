import { CartContext } from '../context/CartContext'
import { useContext, useState } from 'react'
import { collection, addDoc, getFirestore } from "firebase/firestore"
import EmptyCart from './EmptyCart'
import CompleteCheckout from './CompleteCheckout'

// import { useState } from "react"

const SendOrder = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [orderId, setOrderId] = useState('')

    const { cart } = useContext(CartContext)

    if (cart[0] === undefined) {
        return <EmptyCart />
    } else if (orderId != '') {
        // console.log(cart)
        console.log(orderId)
        return <CompleteCheckout ticket={orderId}/>
    }
    // console.log(orderId)

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
        // const ticket = { ...cart, totalPrice }

        // const ordersCollection = collection(db, 'orders')
        // addDoc(ordersCollection, ticket).then(({ id }) =>
        //     setOrderId(id))
    }
    // buy

    // const ordersCollecion = collection(db, 'order')
    // const [orderId, setOrderId] = useState(null)
    // const db = getFirestore()

    // const sku = cart.quantity
    // console.log('sku')
    // console.log(sku)

    // cart.map((p) => {
    //     console.log(p.id)
    //     console.log(p.quantity)
    //     console.log(p.title)
    // })

    // let foundQty = cart.find((element) => element.id == id)
    // console.log('foundQty')
    // console.log(foundQty)

    // const sendOrder = () => {
    //     const ticket = { ...cart, totalPrice }

    //     const ordersCollection = collection(db, 'orders')
    //     addDoc(ordersCollection, ticket).then(({ id }) =>
    //         setOrderId(id))
    // }

    // sendOrder()

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