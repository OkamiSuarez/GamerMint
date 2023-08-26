import { Spinner, Center } from "@chakra-ui/react"
import styles from '../styles/Loading.module.css'

const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <Center>
            Loading Elements 
            </Center>            
            <Center>
            <Spinner  thickness='4px'  speed='0.65s'  emptyColor='gray.200'  color='blue.500'  size='xl'/>
            </Center>
        </div>
        )
}

export default Loading