import { useParams } from "react-router-dom"
import {AbsoluteCenter, Card, Stack, CardBody, CardFooter, Heading, Button, Divider, Image, ButtonGroup, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const ItemDetail = ({ products }) => {

    const [counter, setCounter] = useState(0)
    const [stock, setStock] = useState(100)
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
    const ResetCount = () => {
        setCounter(0)
        setStock(5)
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
                                    <text><p>Products in cart</p>{counter}</text>
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
                                        Add to cart
                                    </Button>
                                    <Button variant="solid" colorScheme="red" onClick={DeleteCount}>
                                        Delete
                                    </Button>
                                    <Button variant="solid" colorScheme="black" onClick={ResetCount}>
                                        {/* Reset */}
                                        Buy
                                    </Button>
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