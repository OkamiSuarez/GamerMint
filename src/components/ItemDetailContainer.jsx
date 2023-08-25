import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react"
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, 'GAMES')
    getDocs(itemsCollection).then((querySnapshot) => {
      const docs = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      setProducts(docs)
    })
  }, [])

  return (
    <>
      <ItemDetail
        products={products}
      />
    </>
  )
}

export default ItemDetailContainer