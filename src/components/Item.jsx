import { Button, Image, Card, CardBody, Stack, Heading, Text, CardFooter, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import styles from '../styles/Item.module.css'

const Item = ({ id, thumbnails, title, description, price, category }) => {

    return (

        <div className={styles.itemCardsContainer}>


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
                            <button className={styles.blueBtn}>
                                Descripton
                            </button>
                        </Link>
                    </CardFooter>
                </Stack>
            </Card>
        </div>
    );
};

export default Item;
