// import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

  const products = [
    { id: 1, title: "Starfield", description: "Starfield is the first new universe in 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity’s greatest mystery. The year is 2330. Humanity has ventured beyond our solar system, settling new planets, and living as a spacefaring people. From humble beginnings as a space miner, you will join Constellation – the last group of space explorers seeking rare artifacts throughout the galaxy – and navigate the vast expanse of the Settled Systems in Bethesda Game Studios’ biggest and most ambitious game.", price: 100, pictureUrl: "https://th.bing.com/th/id/R.ee82f4fb9f9cff96317a892b7d531323?rik=0%2fdh%2fBqHU964bg&pid=ImgRaw&r=0" },
    { id: 2, title: "Marvel's Spider-Man 2", description: "Marvel’s Spider-Man 2 is the next game in PlayStation’s critically acclaimed Marvel’s Spider-Man franchise. Developed by Insomniac Games in collaboration with Marvel Games and PlayStation for the PS5 console.", price: 75, pictureUrl: "https://cdn.marvel.com/content/1x/marvelsspiderman2_lob_crd_02.jpg" },
    { id: 3, title: "Hollow Knight: Silksong", description: "Hollow Knight: Silksong is the epic sequel to Hollow Knight, the epic action-adventure of bugs and heroes. As the lethal hunter Hornet, journey to all-new lands, discover new powers, battle vast hordes of bugs and beasts and uncover ancient secrets tied to your nature and your past.", price: 235, pictureUrl: "https://th.bing.com/th/id/OIP.uDM4455dZKvXNwAi_PRMVgHaIC?pid=ImgDet&rs=1" }
  ]

  const getProducts = new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 100);
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

    // const {id} = useParams()
    // const filterProducts = products.filter((product) => product.id == id)

  return (
    <>
      <ItemDetail
        products={products}
      />
    </>
  )
}

export default ItemDetailContainer