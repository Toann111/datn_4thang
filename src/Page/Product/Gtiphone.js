import { Box, Center, Grid, GridItem, Text, Flex, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const ProductCard = () => {
    return (
        <Box width="1318px" mx="auto" mt={10}>
            <Grid
                ml={12}
                mt={50}
                w="100%"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={10}
                justifyContent="center"
                alignItems="center"
            >
            <Image
                src="https://i.postimg.cc/YCRGGw0Z/Untitled.png"
                alt="Dan Abramov"
                h={360}
                w={413} // Đổi {"100%"} thành "100%"
                marginBottom={20}
                mr={-130}
            />
                {[
                    "https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-black-thumb-600x600.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-blue-thumbnew-600x600.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/240259/iPhone-14-thumb-tim-1-600x600.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-pink-2-600x600.jpg",
                ].map((src, index) => (
                    <GridItem
                        key={index}
                        h="350px"
                        w="240px"
                        bg="white"
                        borderRadius={8}
                        boxShadow="lg"
                        p={4}
                    >
                        <Center>
                            <Image
                                src={src}
                                alt={`Product ${index + 1}`}
                                h="150px"
                                w="150px"
                                mt={10}
                                borderRadius={8}
                                marginBottom={20}
                            />
                        </Center>
                        <Text fontSize='2xl' as='b' textAlign="center">HP Gaming VICTUS 16 r0128TX i5 13450HX</Text>
                        <Text fontSize='md' textAlign="center" mt={4}>
                            Giá mới: <span style={{ fontSize: '20px', color: 'red' }}>50,000,000</span>
                        </Text>
                    </GridItem>
                ))}
            </Grid>
            <Center mt={10}>
                <Button fontSize={20} borderRadius={8} bg="#fff" h={50} border="1px solid black">Xem Thêm</Button>
            </Center>
        </Box>
    );
};

export default ProductCard;
