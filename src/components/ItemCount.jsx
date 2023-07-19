import {
    Card,
    Stack,
    CardBody,
    CardFooter,
    Heading,
    Button,
    Box,
    AbsoluteCenter,
    Divider,
    Center,
} from "@chakra-ui/react";

const ItemCount = () => {
    // AQUI IRA LA LOGICA DE PROGRA

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
                                    Cart
                                    </Center>
                                </Heading>
                                <Center py="2">Your actual stock count is:</Center>
                            </CardBody>
                            
                            <Box position="relative" padding="10">
                                <Divider />
                                <AbsoluteCenter bg="white" px="4">
                                    AQUI VA EL CONTADOR
                                </AbsoluteCenter>
                            </Box>

                            <CardFooter>
                                <Stack spacing={4} direction='row' align='center'>
                                <Button variant="solid" colorScheme="green">
                                    Add
                                </Button>
                                <Button variant="solid" colorScheme="red">
                                    Delete
                                </Button>
                                <Button variant="solid" colorScheme="black">
                                    Reset
                                </Button>
                                </Stack>
                            </CardFooter>
                        </Stack>
                    </Card>
                </Center>
            </Box>
        </div>
    );
};

export default ItemCount;
