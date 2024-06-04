import { Box, Center, Grid, GridItem, Text, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Smartwach = () => {
    return (
        <Box mt={-130}>

            <Flex justifyContent="center">

            </Flex>
            <Grid
                ml={12}
                mt={170}
                w={"100%"}
                h="800px"
                templateRows="repeat(5, 1fr)" // Đổi 10fr thành 1fr để phân bố đều các hàng
                templateColumns="repeat(2, 1fr)"
                gap={2}
                justifyContent="center" // Căn giữa theo chiều ngang
                alignItems="center" // Căn giữa theo chiều dọc
            >
                {/* Bao bọc toàn bộ GridItem bởi một Grid */}
                <Grid
                    templateColumns="repeat(5, 1fr)" // Số lượng cột bằng số lượng cột của Grid cha
                    gap={2} // Khoảng cách giữa các ô sản phẩm
                    w="100%"
                    ml={155}
                    mr={-150}
                    mt={-140} // Chiều rộng bằng 100%
                >

                    <GridItem
                        h="710px"
                        w="400px" // Đổi 'PX' thành 'px'
                        rowSpan={2}
                        colSpan={2}
                        bg="white"
                        borderRadius={8}
                        Center // Xóa Center và thêm style justifyContent và alignItems
                    >
                        <Center>
                            <Image
                                src="https://isotech-demo.myshopify.com/cdn/shop/files/Watch_Banner_7b3ae013-75a3-479c-a76f-7c2eea9d4a9e_1500x.png?v=1696738786"
                                alt="Dan Abramov"
                                h="710px"
                                w="100%"
                                // Đổi {"100%"} thành "100%"
                                borderRadius={8}
                                marginBottom={20}

                            />

                        </Center>
                    </GridItem>
                    <GridItem
                        mr={2}
                        h="350px"
                        w="240px" // Đổi 'PX' thành 'px'
                        rowSpan={1}
                        colSpan={1}
                        bg="white"
                        borderRadius={8}
                        Center // Xóa Center và thêm style justifyContent và alignItems
                    >
                        <Center>
                            <Image
                                src="https://cdn.tgdd.vn/Products/Images/7077/248752/samsung-galaxy-watch-4-40mm-tn-2-600x600.jpg   "
                                alt="Dan Abramov"
                                h="200px"
                                w="65%"
                                mt={10} // Đổi {"100%"} thành "100%"
                                borderTopRadius={8}
                                marginBottom={20}

                            />

                        </Center>
                        <Text fontSize='2xl' as='b' textAlign="center" >HP Gaming VICTUS 16 r0128TX i5 13450HX</Text>
                        <Text fontSize='md' mt={40}>
                            Giá mới: <span style={{ fontSize: '20px', color: 'red', textAlign: "center" }} > 50000000</span>
                        </Text>


                    </GridItem>
                    <GridItem
                        mr={2}
                        h="350px"
                        w="240px" // Đổi 'PX' thành 'px'
                        rowSpan={1}
                        colSpan={1}
                        bg="white"
                        borderRadius={8}
                        Center // Xóa Center và thêm style justifyContent và alignItems
                    >
                        <Center>
                            <Image
                                src="https://cdn.tgdd.vn/Products/Images/7077/314710/apple-watch-ultra-lte-49mm-vien-titanium-day-ocean-xanh-duong-thumb-4-1-600x600.jpg"
                                alt="Dan Abramov"
                                h="200px"
                                w="65%"
                                mt={10} // Đổi {"100%"} thành "100%"
                                borderTopRadius={8}
                                marginBottom={20}

                            />

                        </Center>
                        <Text fontSize='2xl' as='b' textAlign="center" >HP Gaming VICTUS 16 r0128TX i5 13450HX</Text>
                        <Text fontSize='md' mt={40}>
                            Giá mới: <span style={{ fontSize: '20px', color: 'red', textAlign: "center" }} > 50000000</span>
                        </Text>


                    </GridItem>
                    <GridItem
                        mr={2}
                        h="350px"
                        w="240px" // Đổi 'PX' thành 'px'
                        rowSpan={1}
                        colSpan={1}
                        bg="white"
                        borderRadius={8}
                        Center // Xóa Center và thêm style justifyContent và alignItems
                    >
                        <Center>
                            <Image
                                src="https://cdn.tgdd.vn/Products/Images/7077/309543/samsung-galaxy-watch6-classic-lte-47-mm-den-ksp-600x600.jpg"
                                alt="Dan Abramov"
                                h="200px"
                                w="65%"
                                mt={10} // Đổi {"100%"} thành "100%"
                                borderTopRadius={8}
                                marginBottom={20}

                            />

                        </Center>
                        <Text fontSize='2xl' as='b' textAlign="center" >HP Gaming VICTUS 16 r0128TX i5 13450HX</Text>
                        <Text fontSize='md' mt={40}>
                            Giá mới: <span style={{ fontSize: '20px', color: 'red', textAlign: "center" }} > 50000000</span>
                        </Text>


                    </GridItem>
                    <GridItem
                        mr={2}
                        h="350px"
                        w="240px" // Đổi 'PX' thành 'px'
                        rowSpan={1}
                        colSpan={1}
                        bg="white"
                        borderRadius={8}
                        Center // Xóa Center và thêm style justifyContent và alignItems
                    >
                        <Center>
                            <Image
                                src="https://cdn.tgdd.vn/Products/Images/7077/286034/samsung-galaxy-watch5-44mm-xanh-duong-thumb-10-600x600.jpg"
                                alt="Dan Abramov"
                                h="200px"
                                w="65%"
                                mt={10} // Đổi {"100%"} thành "100%"
                                borderTopRadius={8}
                                marginBottom={20}

                            />

                        </Center>
                        <Text fontSize='2xl' as='b' textAlign="center" >HP Gaming VICTUS 16 r0128TX i5 13450HX</Text>
                        <Text fontSize='md' mt={40}>
                            Giá mới: <span style={{ fontSize: '20px', color: 'red', textAlign: "center" }} > 50000000</span>
                        </Text>


                    </GridItem>
                    <GridItem
                        mr={2}
                        h="350px"
                        w="240px" // Đổi 'PX' thành 'px'
                        rowSpan={1}
                        colSpan={1}
                        bg="white"
                        borderRadius={8}
                        Center // Xóa Center và thêm style justifyContent và alignItems
                    >
                        <Center>
                            <Image
                                src="https://cdn.tgdd.vn/Products/Images/7077/274192/dong-ho-thong-minh-xiaomi-watch-s1-nau-tn-600x600.jpg"
                                alt="Dan Abramov"
                                h="200px"
                                w="65%"
                                mt={
                                    10
                                }// Đổi {"100%"} thành "100%"
                                borderTopRadius={8}
                                marginBottom={20}

                            />

                        </Center>
                        <Text fontSize='2xl' as='b' textAlign="center" >HP Gaming VICTUS 16 r0128TX i5 13450HX</Text>
                        <Text fontSize='md' mt={40}>
                            Giá mới: <span style={{ fontSize: '20px', color: 'red', textAlign: "center" }} > 50000000</span>
                        </Text>


                    </GridItem>
                    <GridItem
                        mr={2}
                        h="350px"
                        w="240px" // Đổi 'PX' thành 'px'
                        rowSpan={1}
                        colSpan={1}
                        bg="white"
                        borderRadius={8}
                        Center // Xóa Center và thêm style justifyContent và alignItems
                    >
                        <Center>
                            <Image
                                src="https://cdn.tgdd.vn/Products/Images/7077/311333/redmi-watch-3-active-xam-tn-600x600.jpg"
                                alt="Dan Abramov"
                                h="200px"
                                w="65%"
                                mt={10} // Đổi {"100%"} thành "100%"
                                borderTopRadius={8}
                                marginBottom={20}

                            />

                        </Center>
                        <Text fontSize='2xl' as='b' textAlign="center" >HP Gaming VICTUS 16 r0128TX i5 13450HX</Text>
                        <Text fontSize='md' mt={40}>
                            Giá mới: <span style={{ fontSize: '20px', color: 'red', textAlign: "center" }} > 50000000</span>
                        </Text>


                    </GridItem>




                    {/* Các GridItem khác */}
                </Grid>
            </Grid>



        </Box >



    );
};

export default Smartwach;
