import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {

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

  const { category } = useParams();

  let filteredCategoryProducts = ''
  if (category === 'released' || category === 'preorder'){
    filteredCategoryProducts = products.filter((product) => product.category == category)
  }else {
    filteredCategoryProducts = products;
  }

  return (
    <div>
      <p>{greeting}</p>
      <ItemList products={filteredCategoryProducts}
      ></ItemList>
    </div >
  )
}

export default ItemListContainer