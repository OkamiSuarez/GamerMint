// import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import { Card, Stack, CardBody, CardFooter, Heading, Button, Divider, Image, ButtonGroup, Text, Center } from "@chakra-ui/react";
import ReleasedVirtual from "./ReleasedVirtual";



const ItemListContainer = ({ greeting }) => {

  // Aqui se va a agregar logica de filtrado
  // const { id } = useParams()
  // console.log(id)

  const products = [
    { id: 1, category: 'released', title: "Starfield", description: "Starfield is the first new universe in 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity’s greatest mystery. The year is 2330. Humanity has ventured beyond our solar system, settling new planets, and living as a spacefaring people. From humble beginnings as a space miner, you will join Constellation – the last group of space explorers seeking rare artifacts throughout the galaxy – and navigate the vast expanse of the Settled Systems in Bethesda Game Studios’ biggest and most ambitious game.", price: 100, pictureUrl: "https://th.bing.com/th/id/R.ee82f4fb9f9cff96317a892b7d531323?rik=0%2fdh%2fBqHU964bg&pid=ImgRaw&r=0" },
    { id: 2, category: 'preorder', title: "Marvel's Spider-Man 2", description: "Marvel’s Spider-Man 2 is the next game in PlayStation’s critically acclaimed Marvel’s Spider-Man franchise. Developed by Insomniac Games in collaboration with Marvel Games and PlayStation for the PS5 console.", price: 75, pictureUrl: "https://cdn.marvel.com/content/1x/marvelsspiderman2_lob_crd_02.jpg" },
    { id: 3, category: 'preorder', title: "Hollow Knight: Silksong", description: "Hollow Knight: Silksong is the epic sequel to Hollow Knight, the epic action-adventure of bugs and heroes. As the lethal hunter Hornet, journey to all-new lands, discover new powers, battle vast hordes of bugs and beasts and uncover ancient secrets tied to your nature and your past.", price: 235, pictureUrl: "https://th.bing.com/th/id/OIP.uDM4455dZKvXNwAi_PRMVgHaIC?pid=ImgDet&rs=1" }
  ]

  const getProducts = new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject(new Error("No data found"));
    }
  });

  getProducts
    .then((res) => {
      console.log(res);
      // console.log(res[1].description);
    })
    .catch((error) => {
      console.log(error);
    });

  const { category } = useParams();

  console.log('category')
  console.log(category)
  // const filteredProducts = products.filter((product) => product.id == id)
  let filteredCategoryProducts = products.filter((product)=> product.category == category)
  if (category === 'released') {
    console.log('Released products render')
    const releasedFilteredProducts = products.filter((product) => product.category == 'released')
    console.log(releasedFilteredProducts)
  } else if (category === 'preorder') {
    console.log('Preorder render')
    const preorderFilteredProducts = products.filter((product) => product.category == 'preorder')
    console.log(preorderFilteredProducts)
    // falseFilteredProducts.map((p) =>{
    //   return <ReleasedVirtual
    //   key={p.id}
    //   id={p.id}
    //   thumbnails={p.pictureUrl}
    //   title={p.title}
    //   description={p.description}
    //   price={p.price}
    //   />

    // })
  } else {
    filteredCategoryProducts = products;
    console.log('all products')
}
  // const filteredCategoryProducts = products.filter((product)=> product.category == category)

  return (
    <div>
      <p>{greeting}</p>
      {/* <ItemCount></ItemCount> */}
      {/* <ItemList products={products} */}
      <ItemList products={filteredCategoryProducts}
      ></ItemList>

    </div >
  )
}

export default ItemListContainer