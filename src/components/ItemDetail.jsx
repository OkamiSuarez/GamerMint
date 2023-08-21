import { Link, useParams } from "react-router-dom"
import { Card, Stack, CardBody, CardFooter, Heading, Button, Divider, Image, ButtonGroup, Text, Center } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

// PENDIENTE VER POOR QUE EL ARRAY NO SE PROYECTA

const ItemDetail = ({ products }) => {

    // const {cart, setCart } = useContext(CartContext)
    const { cart, setCart } = useContext(CartContext)
    // const [quantityAdded, setQuantityAdded] = useState(0)

    // const{addItem} = useContext(CartContext)

    // const handleOnAdd = (quantity) => {
    //     setQuantityAdded(quantity)

    //     const item = {
    //         id
    //     }

    //     addItem(item,quantity)

    //     // Posiblemente tengo que migrar la logica para lograr sacar a context esto de abajo
    //     // addItem(cart)

    // }

    const [counter, setCounter] = useState(0)
    const [stock, setStock] = useState(25)
    // const [quantity, setQuantity] = useState(0)
    // let proofCart = []


    const onAdd = (price, title) => {
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

    // const onAdd = (productId, qtyReceived, productTitle, productPrice) => {

    //     console.log('cart value')
    //     console.log(cart[0])
    //     if (qtyReceived === 0 && cart[0] === undefined) {
    //         console.log('product not added yet')
    //         console.log('cart not created')
    //     } else if (qtyReceived === 0 && cart[0] != undefined) {
    //         console.log('product not added yet but cart created')
    //         console.log(cart)
    //         console.log(proofCart)
    //     } else if (qtyReceived != 0 && cart[0] === undefined) {
    //         console.log('first add')
    //         setQuantity(qtyReceived)
    //         proofCart.push({
    //             id: productId,
    //             title: productTitle,
    //             price: productPrice,
    //             qty: qtyReceived,
    //             total: (qtyReceived * productPrice)
    //         })
    //         setCart([
    //             ...proofCart
    //         ])
    //         console.log('cart')
    //         console.log(cart)
    //         console.log('proofCart')
    //         console.log(proofCart)
    //         setCounter(0)
    //         setStock(stock)

    //         setTimeout(() => {
    //             console.log('cartTimeout')
    //             console.log(cart)                
    //             console.log('proof cartTimeout')
    //             console.log(proofCart)
    //         }, 3000)

    //     } else if (qtyReceived != 0 && cart[0] != undefined) {
    //         console.log('not first add')
    //         // setQuantity(+qtyReceived)
    //         console.log('quantity added')
    //         console.log(quantity)
    //         proofCart.push({
    //             id: productId,
    //             title: productTitle,
    //             price: productPrice,
    //             qty: qtyReceived,
    //             total: (qtyReceived * productPrice)
    //         })
    //         setCart([
    //             ...cart, ...proofCart])
    //         console.log(cart)

    //         // alert('There are already products in your cart, finish the purchase or delete the products to add a new qty')
    //         // console.log('total qty')
    //         // console.log(quantity)
    //         // console.log('quantity received')
    //         // console.log(qtyReceived)
    //         // setQuantity(quantity + qtyReceived)
    //         // console.log('final total qty')
    //         // console.log(quantity)

    //         // setCart([{
    //         //     id: productId,
    //         //     title: productTitle,
    //         //     price: productPrice,
    //         //     qty: quantity,
    //         //     total: (quantity * productPrice)
    //         // }])
    //         // console.log('setCartArray')
    //         // console.log(cart)
    //         setCounter(0)
    //         setStock(stock)
    //     } else {
    //         console.log('Undefined error')
    //     }
    // }

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
    // const ResetCount = () => {
    //     setCounter(0)
    //     setStock(stock)
    // }

    // useEffect(() => {
    //     // console.log('counter active')
    // }, [counter])

    const { id } = useParams();

    const filteredProducts = products.filter((product) => product.id == id)

    return (
        <div>
            <center>

                {filteredProducts.map((p) => {
                    return (
                        <div key={p.id}>
                            {/* Por que ponemos aqui el key? */}

                            <Card maxW='sm'>
                                <CardBody>
                                    <Image src={p.pictureUrl} alt={p.title} borderRadius='lg' />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>{p.title}</Heading>
                                        <Text>{p.description}</Text>
                                        <Text color='blue.600' fontSize='2xl'>${p.price}</Text>
                                        <Text>Products to buy {counter}</Text>
                                        <Text>Stock {stock}</Text>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        <Stack spacing={4} direction='row' align='center'>
                                            <Button variant="solid" colorScheme="green" onClick={AddCount}>
                                                +
                                            </Button>
                                            {/* <Button variant="solid" colorScheme="blue" onClick={() => onAdd(p.id, counter, p.title, p.price)}> */}
                                            <Button variant="solid" colorScheme="blue" onClick={() => onAdd(p.price, p.title)}>
                                                Add to cart
                                            </Button>
                                            <Button variant="solid" colorScheme="blue" onClick={() => console.log(cart)}>
                                                console to cart
                                            </Button>
                                            <Button variant="solid" colorScheme="red" onClick={DeleteCount}>
                                                -
                                            </Button >
                                            <Link to='/cart'>Go to cart</Link>
                                            {/* <Text>Cart {quantity}</Text> */}
                                        </Stack>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>

                        </div>
                    )
                })}
            </center>
        </div>
    )
}

export default ItemDetail