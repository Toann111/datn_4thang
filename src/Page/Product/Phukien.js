import { Box, Center, Grid, GridItem, Text, Flex, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Phukiennb = () => {
    return (
        <Box width="1318px" mx="auto" mt={10}>
            <Text fontSize={40} as='b' textAlign="center">CÁC PHỤ KIỆN KHÁC</Text>
            <Flex justifyContent="space-between" px={100} mt={10}>
                <Text fontSize={20}>Pin dự phòng</Text>
                <Text fontSize={20}>Cáp sạc</Text>
                <Text fontSize={20}>Tai nghe</Text>
                <Text fontSize={20}>Loa</Text>
                <Text fontSize={20}>Bàn phím</Text>
                <Text fontSize={20}>Chuột</Text>
            </Flex>
            <Flex justifyContent="center" mt={2}>
                <Box width="100%">
                    <hr style={{ borderColor: 'black', borderWidth: '1px', margin: 'auto' }} />
                </Box>
            </Flex>
            <Grid
                ml={12}
                mt={10}
                w="100%"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={10}
                justifyContent="center"
                alignItems="center"
            >
                {[
                    "https://cdn.tgdd.vn/Products/Images/42/264060/samsung-galaxy-s23-600x600.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-black-thumb-600x600.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-blue-thumbnew-600x600.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/240259/iPhone-14-thumb-tim-1-600x600.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-la-new-2-600x600.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-pink-2-600x600.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/309722/oppo-reno10-blue-thumbnew-600x600.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/299248/oppo-reno8t-4g-den1-thumb-600x600.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/271717/oppo-reno7-z-5g-thumb-2-1-600x600.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/306994/samsung-galaxy-s23-fe-xanh-thumb-600x600.jpg"
                ].map((src, index) => (
                    <GridItem
                        key={index}
                        h="350px"
                        w="250px"
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
            <Center mt={50}>
                <Button fontSize={20} borderRadius={8} bg="#fff" h={50} border="1px solid black">Xem Thêm</Button>
            </Center>
            
        </Box>
    );
};

export default Phukiennb;
