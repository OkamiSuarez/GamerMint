import { useState, useEffect } from "react"
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const DocumentFB = () => {

    const [product, setProduct] = useState([])
    console.log('product')
    console.log(product)

    useEffect(()=>{
        const db = getFirestore()

        const oneItem = doc(db, 'GAMES','CDUHWWx01Xf2a915Qb5V')
        getDoc(oneItem).then((snapshot)=>{
            if(snapshot.exists()){
                const docs = snapshot.data()
                setProduct(docs)
            }
        })
    }, [])

    return (
        <div>
            <h1>oneLine products</h1>
            {
                <div>
                    <h3>Product {product.title}</h3>
                    <img src={product.pictureUrl} alt={product.title} />
                    <h3>Category {product.category}</h3>
                    <h3>Price {product.price}</h3>
                    <h3>Description {product.description}</h3>
                </div>
            }
        </div>
    )
}

export default DocumentFB