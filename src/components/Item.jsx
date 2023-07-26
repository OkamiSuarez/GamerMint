import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, Portal, Button, Image, Box} from '@chakra-ui/react'
// import ItemList from "./ItemList";

const Item = ({ thumbnails, title, description, price }) => {
    return (
        <Popover>
            <PopoverTrigger>
                <Button>{title}</Button>
            </PopoverTrigger>
            <Portal>
                <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>
                    {thumbnails}
                    {/* <Box boxSize='sm'>
                    <Image src=`${thumbnails}`></Image >
                    thumbnails
                    </Box> */}
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                <p>{description}</p>
                </PopoverBody>
                <PopoverFooter>
                <p>${price} <Button colorScheme='blue'> Buy now</Button> </p>
                    </PopoverFooter>
                </PopoverContent>
            </Portal>
            </Popover>
    );
};

export default Item;
