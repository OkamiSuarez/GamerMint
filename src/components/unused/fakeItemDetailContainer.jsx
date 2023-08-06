import { Card, Stack, CardBody, CardFooter, Heading, Button, Box, AbsoluteCenter, Divider, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {

    // AQUI IRA LA LOGICA DE PROGRA
    // let cartCount = 0;
    const [counter, setCounter] = useState(0)
    const [stock, setStock] = useState(5)
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

    const {id} = useParams
    console.log(id)

    return (
        <div>
            <Box>
                <Center>
                    <Card
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                    >
                        <Stack>
                            <CardBody>
                                <Heading size="md">
                                    <Center>
                                        Stock of this product is
                                    </Center>
                                    <Center>
                                        <p>{stock}</p>
                                    </Center>
                                </Heading>
                                <Center py="2">Your actual cart count is:</Center>
                            </CardBody>

                            <Box position="relative" padding="10">
                                <Divider />
                                <AbsoluteCenter bg="white" px="4">
                                    <p>{counter}</p>
                                </AbsoluteCenter>
                            </Box>

                            <CardFooter>
                                <Stack spacing={4} direction='row' align='center'>
                                    <Button variant="solid" colorScheme="green" onClick={AddCount}>
                                        Add to cart
                                    </Button>
                                    <Button variant="solid" colorScheme="red" onClick={DeleteCount}>
                                        Delete
                                    </Button>
                                    <Button variant="solid" colorScheme="black" onClick={ResetCount}>
                                        Reset
                                    </Button>
                                </Stack>
                            </CardFooter>
                        </Stack>
                    </Card>
                </Center>
            </Box>
        </div>

    )
}

export default ItemDetailContainer