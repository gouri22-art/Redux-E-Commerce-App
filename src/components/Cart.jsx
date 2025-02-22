import { removeFromCart, updateQuantity } from "@/redux/actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import { Box,Button,Flex,Text,Input,Divider } from "@chakra-ui/react";

const Cart = ()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(state=> state.cart.items);

    const totalPrice = cartItems.reduce((acc, item)=> acc + item.price * item.quantity).toFixed(2);

    const handleQuantityChange = (id, e)=>{
        const value = parseInt(e.target.value);
        if(value>=1){
            dispatch(updateQuantity(id, value));
        }

    };
    if(cartItems.length === 0){
        return(

            <Box p={6} textAlign={"center"} >
                <Text fontSize={"xl"} mb={4}>
                Your cart is empty
                </Text>
                <Link to={"/"}>
                <Button colorScheme={"blue"} >Back to Products</Button>
                </Link>

            </Box>
        );
    }
    return(

        <Box p={6}>
            <Text fontSize={"2xl"} mb={4}>
                Your Cart
            </Text>
            {cartItems.map(item =>(
                <Box key={item.id} p={4} borderWidth={"1px"} borderRadius={"md"} mb={4}>
                    <Flex justifyContent={"space-between"} alignItems={"center"} mb={2}>
                        <Text fontWeight={"bold"}>{item.title}</Text> 
                        <Text color={"green.600"}>${item.price}</Text>

                    </Flex>
                    <Flex alignItems={"center"} mb={2} gap={2}>
                        <Text>Quantity:</Text>
                        <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e)=> handleQuantityChange(item.id,e)}
                        width={"80px"}
                        />

                    </Flex>
                    <Button size={"sm"} colorScheme={"red"} 
                    onClick={()=> dispatch(removeFromCart(item.id))}>Remove</Button>

                </Box>
            ))}
            <Divider my={4}/>
            <Flex justifyContent={"space-between"} alignItems={"center"} mb={4}>
                <Text fontSize={"xl"} >Total :</Text>
                <Button colorScheme={"blue"} onClick={()=> navigate('/chekout')}> Proceed to Checkout</Button>

            </Flex>
        </Box>
    );
};

export default Cart;