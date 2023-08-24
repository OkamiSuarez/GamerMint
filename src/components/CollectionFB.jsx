// import React from 'react'
import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const CollectionFB = () => {

    const [products, setProducts] = useState([])
    console.log('products')
    console.log(products)

    useEffect(() => {
        const db = getFirestore()

        const itemsCollection = collection(db, 'GAMES')
        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data())
            setProducts(docs)
        })
    }, [])

    return (
        <div>
            <h1>Products Collection</h1>
            {
                products.map((product) => (
                    <div key={product.name}>
                        <h3>Product {product.title}</h3>
                        <img src={product.pictureUrl} alt={product.title} />
                        <h3>Category {product.category}</h3>
                        <h3>Price {product.price}</h3>
                        <h3>Description {product.description}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default CollectionFB