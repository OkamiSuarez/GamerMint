import {Link, useParams } from "react-router-dom"
import {Card, Stack, CardBody, CardFooter, Heading, Button, Divider, Image, ButtonGroup, Text } from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";

import { CartContext } from "../context/CartContext";

// PENDIENTE VER POOR QUE EL ARRAY NO SE PROYECTA

const ItemDetail = ({ products }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const{addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id
        }

        addItem(item,quantity)

        // Posiblemente tengo que migrar la logica para lograr sacar a context esto de abajo
        // addItem(cart)

    }

    const [counter, setCounter] = useState(0)
    const [stock, setStock] = useState(25)
    const [quantity, setQuantity] = useState(0)
    const cartArr = []

    // console.log(cartArr)

    const onAdd = (productId, qtyReceived, productTitle, productPrice) =>{
        // console.log('cartArr')
        // console.log(cartArr)
        if (qtyReceived === 0){
            console.log('no value')
            // setCounter(0)
            // setStock(stock)
            if (cartArr[0] === undefined){
                cartArr.push({
                    id:productId,
                    title:productTitle,
                    price:productPrice,
                    qty:quantity,
                    total: (quantity*productPrice)
                })
                console.log(cartArr)
                // console.log(quantity)
            }else{
                console.log(cartArr)
            }
        }else{
            setQuantity(quantity+qtyReceived)
            cartArr.push({
                qty:quantity
            })
            setCounter(0)
            setStock(stock)
            console.log(cartArr)
        // console.log(cart)

        }

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
    // const ResetCount = () => {
    //     setCounter(0)
    //     setStock(stock)
    // }

    useEffect(() => {
        // console.log('counter active')
    }, [counter])

    const { id } = useParams();

    const filteredProducts = products.filter((product) => product.id == id)

    return (
        <div>
            {filteredProducts.map((p) => {
                return (
                    <div key={p.id}>
                        {/* Por que ponemos aqui el key? */}

                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src={p.pictureUrl}
                                    alt={p.title}
                                    borderRadius='lg'
                                />
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
                                    {/* <Button variant='solid' colorScheme='blue'>
                                        Buy now
                                    </Button>
                                    <Button variant='ghost' colorScheme='blue'>
                                        Add to cart
                                    </Button> */}
                                <Stack spacing={4} direction='row' align='center'>
                                    <Button variant="solid" colorScheme="green" onClick={AddCount}>
                                        +
                                    </Button>
                                    <Button variant="solid" colorScheme="blue" onClick={() => onAdd(p.id, counter, p.title, p.price)}>
                                        {/* aqui se agrega el onAdd */}
                                        Add to cart
                                    </Button>
                                    <Button variant="solid" colorScheme="blue" onClick={handleOnAdd}>
                                        {/* aqui se agrega el onAdd */}
                                        Add to cart context
                                    </Button>
                                    <Button variant="solid" colorScheme="red" onClick={DeleteCount}>
                                        -
                                    </Button>
                                        <Link to='/cart'>Go to cart</Link>
                                    <Text>Cart {quantity}</Text>
                                </Stack>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>

                    </div>
                )
            })}
        </div>
    )
}

export default ItemDetail