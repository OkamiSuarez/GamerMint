import { useParams } from "react-router-dom"
import {Card, Stack, CardBody, CardFooter, Heading, Button, Divider, Image, ButtonGroup, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const ItemDetail = ({ products }) => {
    const headerCart = [0]
    const [counter, setCounter] = useState(0)
    const [stock, setStock] = useState(25)
    const [cart, setCart] = useState(0)
    // const cart =[]
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
        if (counter <= 1) {
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
    const onAdd = (qty) =>{
        setCart(cart+qty)
        console.log('cart')
        console.log(cart)
        if (qty === 0){
            console.log('no value')
            console.log('headerCart')
            console.log(headerCart)
            setCounter(0)
            setStock(stock)
        }else{
            headerCart.push(cart)
            console.log('headerCart')
            console.log(headerCart)
            setCounter(0)
            setStock(stock)
        }

    }



    useEffect(() => {
        console.log('counter active')
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
                                    <text><p>Products to buy</p>{counter}</text>
                                    <text><p>Stock</p>{stock}</text>
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
                                    <Button variant="solid" colorScheme="blue" onClick={() => onAdd(counter)}>
                                        {/* aqui se agrega el onAdd */}
                                        Add to cart
                                    </Button>
                                    <Button variant="solid" colorScheme="red" onClick={DeleteCount}>
                                        -
                                    </Button>
                                    <Text>Cart {cart}</Text>
                                    <Text>cart array {headerCart[1]}</Text>
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