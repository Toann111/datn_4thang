import { Box, Center, Grid, GridItem, Text, Flex, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const ProductNoibat = () => {
    return (
        <Box>
            <Text fontSize={40} as='b'>Sản phẩm nổi bật</Text>
            <Flex justifyContent="space-between" ml={100}>
                <Text fontSize={20} ml={400}>Điện thoại</Text>
                <Text fontSize={20} ml={-20}>Máy tính</Text>
                <Text fontSize={20} mr={500}>Đồng hồ</Text>
            </Flex>
            <Flex justifyContent="center">
                <Box width="80%">
                    <hr style={{ borderColor: 'black', borderWidth: '1px', margin: 'auto' }} />
                </Box>
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
                    gap={6} // Khoảng cách giữa các ô sản phẩm
                    w="100%"
                    ml={155}
                    mr={-150}
                    mt={-140} // Chiều rộng bằng 100%
                >
                    <GridItem
                        mr={2}
                        h="350px"
                        w="220px" // Đổi 'PX' thành 'px'
                        rowSpan={1}
                        colSpan={1}
                        bg="white"
                        borderRadius={8}
                        Center // Xóa Center và thêm style justifyContent và alignItems
                    >
                        <Center>
                            <Image
                                src="https://cdn.tgdd.vn/Products/Images/42/264060/samsung-galaxy-s23-600x600.jpg"
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
                        w="220px" // Đổi 'PX' thành 'px'
                        rowSpan={1}
                        colSpan={1}
                        bg="white"
                        borderRadius={8}
                        Center // Xóa Center và thêm style justifyContent và alignItems
                    >
                        <Center>
                            <Image
                                src="https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-black-thumb-600x600.jpg"
                                alt="Dan Abramov"
                                h="200px"
                                w="65%"
                                mt={10}// Đổi {"100%"} thành "100%"
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
                        w="220px" // Đổi 'PX' thành 'px'
                        rowSpan={1}
                        colSpan={1}
                        bg="white"
                        borderRadius={8}
                        Center // Xóa Center và thêm style justifyContent và alignItems
                    >
                        <Center>
                            <Image
                                src="https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-blue-thumbnew-600x600.jpg"
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
                        w="220px" // Đổi 'PX' thành 'px'
                        rowSpan={1}
                        colSpan={1}
                        bg="white"
                        borderRadius={8}
                        Center // Xóa Center và thêm style justifyContent và alignItems
                    >
                        <Center>
                            <Image
                                src="https://cdn.tgdd.vn/Products/Images/42/240259/iPhone-14-thumb-tim-1-600x600.jpg"
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
                        w="220px" // Đổi 'PX' thành 'px'
                        rowSpan={1}
                        colSpan={1}
                        bg="white"
                        borderRadius={8}
                        Center // Xóa Center và thêm style justifyContent và alignItems
                    >
                        <Center>
                            <Image
                                src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-la-new-2-600x600.jpg"
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
                        w="220px" // Đổi 'PX' thành 'px'
                        rowSpan={1}
                        colSpan={1}
                        bg="white"
                        borderRadius={8}
                        Center // Xóa Center và thêm style justifyContent và alignItems
                    >
                        <Center>
                            <Image
                                src="https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-pink-2-600x600.jpg"
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
                        w="220px" // Đổi 'PX' thành 'px'
                        rowSpan={1}
                        colSpan={1}
                        bg="white"
                        borderRadius={8}
                        Center // Xóa Center và thêm style justifyContent và alignItems
                    >
                        <Center>
                            <Image
                                src="https://cdn.tgdd.vn/Products/Images/42/309722/oppo-reno10-blue-thumbnew-600x600.jpg"
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
                        w="220px" // Đổi 'PX' thành 'px'
                        rowSpan={1}
                        colSpan={1}
                        bg="white"
                        borderRadius={8}
                        Center // Xóa Center và thêm style justifyContent và alignItems
                    >
                        <Center>
                            <Image
                                src="https://cdn.tgdd.vn/Products/Images/42/299248/oppo-reno8t-4g-den1-thumb-600x600.jpg"
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
                        w="220px" // Đổi 'PX' thành 'px'
                        rowSpan={1}
                        colSpan={1}
                        bg="white"
                        borderRadius={8}
                        Center // Xóa Center và thêm style justifyContent và alignItems
                    >
                        <Center>
                            <Image
                                src="https://cdn.tgdd.vn/Products/Images/42/271717/oppo-reno7-z-5g-thumb-2-1-600x600.jpg"
                                alt="Dan Abramov"
                                h="200px"
                                w="65%"
                                mt={
                                    10
                                } // Đổi {"100%"} thành "100%"
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
                        w="220px" // Đổi 'PX' thành 'px'
                        rowSpan={1}
                        colSpan={1}
                        bg="white"
                        borderRadius={8}
                        Center // Xóa Center và thêm style justifyContent và alignItems
                    >
                        <Center>
                            <Image
                                src="https://cdn.tgdd.vn/Products/Images/42/306994/samsung-galaxy-s23-fe-xanh-thumb-600x600.jpg"
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

            <Button fontSize={20} borderRadius={8} bg="#fff" h={50} mt={-360}>Xem Thêm </Button>

        </Box >



    );
};

export default ProductNoibat;
