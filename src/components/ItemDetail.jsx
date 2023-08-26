import { Link, useParams } from "react-router-dom"
import { Card, Stack, CardBody, CardFooter, Heading, Button, Divider, Image, ButtonGroup, Text, Center } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from '../styles/ItemDetail.module.css'

const ItemDetail = ({ products }) => {

    const { setCart } = useContext(CartContext)
    const [counter, setCounter] = useState(0)
    const [stock, setStock] = useState(25)

    const onAdd = (price, title) => {
        if(counter === 0){
            return alert('no products selected, count on 0')
        }

        setCart((currItems) => {
            const isItemFound = currItems.find((item) => item.id === id)

            if (isItemFound) {
                return currItems.map((item) => {
                    if (item.id === id) {
                        setCounter(0)
                        setStock(stock)
                        return { ...item, quantity: item.quantity + counter }
                    } else {
                        setCounter(0)
                        setStock(stock)
                        return item
                    }
                })
            } else {
                setCounter(0)
                setStock(stock)
                return [...currItems, { id, quantity: counter, price, title }]
            }
        })
    }

    const AddCount = () => {
        if (stock <= 0) {
            console.log('stock empty')
            setCounter(counter)
        } else {
            setCounter(counter + 1)
            setStock(stock - 1)
        }
    }
    const DeleteCount = () => {
        if (counter <= 0) {
            setCounter(counter)
            console.log('No more products to delete from cart')
        } else {
            setCounter(counter - 1)
            setStock(stock + 1)
        }
    }

    const { id } = useParams();
    const filteredProducts = products.filter((product) => product.id == id)

    return (
        <div className={styles.ItemDetailContainer}>
            <center>
                {filteredProducts.map((p) => {
                    return (
                        <div key={p.id}>
                            <Card width={900}>
                                <CardBody>
                                    <Image src={p.pictureUrl} alt={p.title} borderRadius='lg' maxWidth={400} maxHeight={300}/>
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>{p.title}</Heading>
                                        <Text>{p.description}</Text>
                                        <Text color='blue.600' fontSize='2xl'>${p.price}</Text>
                                        <Text>Products to buy {counter}</Text>
                                        <Text>Stock {stock}</Text>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                {/* <CardFooter> */}

                                    <div className={styles.btnsContainer}>

                                    <button className={styles.greenBtn} onClick={AddCount}>
                                                +
                                            </button>
                                            <button className={styles.mainBtn} onClick={() => onAdd(p.price, p.title)}>
                                                Add to cart
                                            </button>
                                            <button className={styles.redBtn} onClick={DeleteCount}>
                                                -
                                            </button>
                                            <Link to='/cart'>
                                                <button className={styles.mainBtn}>

                                                Go to cart
                                                </button>
                                                </Link>
                                    </div>

                                    {/* <ButtonGroup spacing='2'>
                                        <Stack spacing={4} direction='row' align='center'>
                                            <button className={styles.greenBtn} onClick={AddCount}>
                                                +
                                            </button>
                                            <button className={styles.buyBtn} onClick={() => onAdd(p.price, p.title)}>
                                                Add to cart
                                            </button>
                                            <button className={styles.redBtn} onClick={DeleteCount}>
                                                -
                                            </button> */}
                                            {/* <Button variant="solid" colorScheme="green" onClick={AddCount}>
                                                +
                                            </Button>
                                            <Button variant="solid" colorScheme="blue" onClick={() => onAdd(p.price, p.title)}>
                                                Add to cart
                                            </Button>
                                            <Button variant="solid" colorScheme="blue" onClick={() => console.log(cart)}>
                                                console to cart
                                            </Button>
                                            <Button variant="solid" colorScheme="red" onClick={DeleteCount}>
                                                -
                                            </Button > */}
                                            {/* <Link to='/cart'>Go to cart</Link>
                                        </Stack>
                                    </ButtonGroup> */}
                                {/* </CardFooter> */}
                            </Card>
                        </div>
                    )
                })}
            </center>
        </div>
    )
}

export default ItemDetail