import { Button, Image, Card, CardBody, Stack, Heading, Text, CardFooter, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Item = ({ id, thumbnails, title, description, price, category }) => {

    return (

        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={thumbnails}
                alt={description}
            />
            <Stack>
                <CardBody>
                    <Heading size='md'>{title}</Heading>
                    <Text py='2'>
                        {description}
                    </Text>
                    <Text py='2'>
                        {category}
                    </Text>
                </CardBody>
                <CardFooter>
                    <p>
                        ${price}
                    </p>
                    <Spacer></Spacer>
                    <Link to={`/item/${id}`}>
                        <Button variant='solid' colorScheme='blue'>
                            Descripton
                        </Button>
                    </Link>
                </CardFooter>
            </Stack>
        </Card>
    );
};

export default Item;
