import React from "react";
import { useSelector } from "react-redux";
import { Badge, Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Navbar = () => {

    const cartItems = useSelector(state => state.cart.items);
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (

        <Box bg={"blue.600"} p={4} color={"white"}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Text fontSize={"2xl"} fontWeight={"bold"}>
                    E-Commerce

                </Text>
                <Flex gap={4} alignItems={"center"}>
                    <Link to={"/"}>
                        <Button variant={"ghost"} _hover={{ bg: "blue.500" }} color={"white"}>Products</Button>
                    </Link>
                    <Link to={"/cart"}>
                        <Button variant={"ghost"} _hover={{ bg: "blue.500" }} color={"white"}>
                            Cart {cartCount > 0 && <Badge ml={"1"} colorScheme={"red"}>{cartCount}</Badge>}</Button>
                    </Link>
                </Flex>

            </Flex>

        </Box>
    );

};

export default Navbar;