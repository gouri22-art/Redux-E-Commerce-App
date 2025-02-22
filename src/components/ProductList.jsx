import { addToCart, fetchProducts } from "@/redux/actions";
import { Center, Spinner, Text,Box, SimpleGrid ,Image, Button} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const ProductList =()=>{

    const dispatch = useDispatch();
    const{products, loading, error} = useSelector(state => state.products);

    useEffect(()=>{
        dispatch(fetchProducts());

    }, [dispatch]);
    if(loading){

        return<Center mt={10}><Spinner size={"xl"}/></Center>
    }

    if(error){

        return<Center mt={10}><Text color={"red.500"}>{error}</Text></Center>
    }

    return(

        <Box p={6}>
            <SimpleGrid columns={[1,2,3,4]} spacing={6}>
                {products.map(product =>(
                    <Box key={product.id} borderWidth={"1px"} borderRadius={"lg"} overflow={"hidden"} p={4}>
                        <Image src={product.image} alt={product.title} boxSize={"200px"} 
                        objectFit={"contain"}  mx={"auto"} />
                        <Text mt={2} fontWeight={"bold"} >{product.title}</Text>
                        <Text mt={2} color={"green.600"} >${product.price}</Text>
                        <Button mt={3} colorScheme={"blue"} onclick={()=> dispatch(addToCart(product))}>Add To Cart</Button>

                    </Box>
                ))}

            </SimpleGrid>
        </Box>
    )
}

export default ProductList;