import { Box, Center, Grid, GridItem, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const ProductTop = () => {
    return (
        <Center>
            <Box bg='#000000' p={4} borderRadius={8} w="100%">
                <Box h={50} w="100%">
                    <Image
                        src="https://cdn.tgdd.vn/2023/11/campaign/GIF-BF-DESK-1200x120.gif"
                        alt="Dan Abramov"
                        h="200px"
                        w="100%" // Đổi {"100%"} thành "100%"
                        borderTopRadius={8}
                        marginBottom={20}

                    />
                </Box>
                <Grid
                    ml={12}
                    mt={170}
                    w={"100%"}
                    h="850px"
                    templateRows="repeat(5, 1fr)" // Đổi 10fr thành 1fr để phân bố đều các hàng
                    templateColumns="repeat(5, 1fr)"
                    gap={4}
                    justifyContent="center" // Căn giữa theo chiều ngang
                    alignItems="center" // Căn giữa theo chiều dọc
                >
                    {/* Bao bọc toàn bộ GridItem bởi một Grid */}
                    <Grid
                        templateColumns="repeat(5, 1fr)" // Số lượng cột bằng số lượng cột của Grid cha
                        gap={10} // Khoảng cách giữa các ô sản phẩm
                        w="100%" // Chiều rộng bằng 100%
                    >
                        <GridItem
                            mr={2}
                            h="410px"
                            w="290px" // Đổi 'PX' thành 'px'
                            rowSpan={1}
                            colSpan={1}
                            bg="white"
                            borderRadius={8}
                            Center // Xóa Center và thêm style justifyContent và alignItems
                        >
                            <Center>
                                <Image
                                    src="https://cdn.tgdd.vn/Products/Images/42/290829/samsung-galaxy-s23-plus-600x600.jpg"
                                    alt="Dan Abramov"
                                    h="200px"
                                    w="65%"
                                    mt={10} // Đổi {"100%"} thành "100%"
                                    borderTopRadius={8}
                                    marginBottom={20}

                                />

                            </Center>
                            <Text fontSize='2xl' as='b' textAlign="center" >HP Gaming VICTUS 16 r0128TX i5 13450HX</Text>
                            <Text fontSize='md' mr={100} mb={-15} mt={40}>
                                Giá mới: <span style={{ fontSize: '20px', color: 'red' }}> 50000000</span>
                            </Text>
                            <Text fontSize='md' mr={100} mb={-15} mt={20}>
                                Giá gốc: <span style={{ fontSize: '20px', textDecoration: 'line-through' }}> 50000000</span>
                            </Text>
                            <Text fontSize='md' mr={140} mt={23}>
                                Giảm giá:<Text as='mark'> -15%</Text>
                            </Text>

                        </GridItem>
                        <GridItem
                            mr={2}
                            h="410px"
                            w="290px" // Đổi 'PX' thành 'px'
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
                                    mt={10}// Đổi {"100%"} thành "100%"
                                    borderTopRadius={8}
                                    marginBottom={20}

                                />

                            </Center>
                            <Text fontSize='2xl' as='b' textAlign="center" >HP Gaming VICTUS 16 r0128TX i5 13450HX</Text>
                            <Text fontSize='md' mr={100} mb={-15} mt={40}>
                                Giá mới: <span style={{ fontSize: '20px', color: 'red' }}> 50000000</span>
                            </Text>
                            <Text fontSize='md' mr={100} mb={-15} mt={20}>
                                Giá gốc: <span style={{ fontSize: '20px', textDecoration: 'line-through' }}> 50000000</span>
                            </Text>
                            <Text fontSize='md' mr={140} mt={23}>
                                Giảm giá:<Text as='mark'> -15%</Text>
                            </Text>

                        </GridItem>
                        <GridItem
                            mr={2}
                            h="410px"
                            w="290px" // Đổi 'PX' thành 'px'
                            rowSpan={1}
                            colSpan={1}
                            bg="white"
                            borderRadius={8}
                            Center // Xóa Center và thêm style justifyContent và alignItems
                        >
                            <Center>
                                <Image
                                    src="https://cdn.tgdd.vn/Products/Images/42/260546/oppo-reno8-pro-thumb-den-600x600.jpg"
                                    alt="Dan Abramov"
                                    h="200px"
                                    w="65%"
                                    mt={10} // Đổi {"100%"} thành "100%"
                                    borderTopRadius={8}
                                    marginBottom={20}

                                />

                            </Center>
                            <Text fontSize='2xl' as='b' textAlign="center" >HP Gaming VICTUS 16 r0128TX i5 13450HX</Text>
                            <Text fontSize='md' mr={100} mb={-15} mt={40}>
                                Giá mới: <span style={{ fontSize: '20px', color: 'red' }}> 50000000</span>
                            </Text>
                            <Text fontSize='md' mr={100} mb={-15} mt={20}>
                                Giá gốc: <span style={{ fontSize: '20px', textDecoration: 'line-through' }}> 50000000</span>
                            </Text>
                            <Text fontSize='md' mr={140} mt={23}>
                                Giảm giá:<Text as='mark'> -15%</Text>
                            </Text>

                        </GridItem>
                        <GridItem
                            mr={2}
                            h="410px"
                            w="290px" // Đổi 'PX' thành 'px'
                            rowSpan={1}
                            colSpan={1}
                            bg="white"
                            borderRadius={8}
                            Center // Xóa Center và thêm style justifyContent và alignItems
                        >
                            <Center>
                                <Image
                                    src="https://cdn.tgdd.vn/Products/Images/42/313154/oppo-a38-gold-thumb-600x600.jpg"
                                    alt="Dan Abramov"
                                    h="200px"
                                    w="65%"
                                    mt={10} // Đổi {"100%"} thành "100%"
                                    borderTopRadius={8}
                                    marginBottom={20}

                                />

                            </Center>
                            <Text fontSize='2xl' as='b' textAlign="center" >HP Gaming VICTUS 16 r0128TX i5 13450HX</Text>
                            <Text fontSize='md' mr={100} mb={-15} mt={40}>
                                Giá mới: <span style={{ fontSize: '20px', color: 'red' }}> 50000000</span>
                            </Text>
                            <Text fontSize='md' mr={100} mb={-15} mt={20}>
                                Giá gốc: <span style={{ fontSize: '20px', textDecoration: 'line-through' }}> 50000000</span>
                            </Text>
                            <Text fontSize='md' mr={140} mt={23}>
                                Giảm giá:<Text as='mark'> -15%</Text>
                            </Text>

                        </GridItem>
                        <GridItem
                            mr={2}
                            h="410px"
                            w="290px" // Đổi 'PX' thành 'px'
                            rowSpan={1}
                            colSpan={1}
                            bg="white"
                            borderRadius={8}
                            Center // Xóa Center và thêm style justifyContent và alignItems
                        >
                            <Center>
                                <Image
                                    src="https://cdn.tgdd.vn/Products/Images/42/307556/xiaomi-redmi-12-bac-thumb-600x600.jpg"
                                    alt="Dan Abramov"
                                    h="200px"
                                    w="65%"
                                    mt={10} // Đổi {"100%"} thành "100%"
                                    borderTopRadius={8}
                                    marginBottom={20}

                                />

                            </Center>
                            <Text fontSize='2xl' as='b' textAlign="center" >HP Gaming VICTUS 16 r0128TX i5 13450HX</Text>
                            <Text fontSize='md' mr={100} mb={-15} mt={40}>
                                Giá mới: <span style={{ fontSize: '20px', color: 'red' }}> 50000000</span>
                            </Text>
                            <Text fontSize='md' mr={100} mb={-15} mt={20}>
                                Giá gốc: <span style={{ fontSize: '20px', textDecoration: 'line-through' }}> 50000000</span>
                            </Text>
                            <Text fontSize='md' mr={140} mt={23}>
                                Giảm giá:<Text as='mark'> -15%</Text>
                            </Text>

                        </GridItem>
                        <GridItem
                            mr={2}
                            h="410px"
                            w="290px" // Đổi 'PX' thành 'px'
                            rowSpan={1}
                            colSpan={1}
                            bg="white"
                            borderRadius={8}
                            Center // Xóa Center và thêm style justifyContent và alignItems
                        >
                            <Center>
                                <Image
                                    src="https://cdn.tgdd.vn/Products/Images/86/233225/chuot-khong-day-logitech-m190-den-1-org.jpg"
                                    alt="Dan Abramov"
                                    h="200px"
                                    w="100%" // Đổi {"100%"} thành "100%"
                                    borderTopRadius={8}
                                    marginBottom={20}

                                />

                            </Center>
                            <Text fontSize='2xl' as='b' textAlign="center" >HP Gaming VICTUS 16 r0128TX i5 13450HX</Text>
                            <Text fontSize='md' mr={100} mb={-15} mt={40}>
                                Giá mới: <span style={{ fontSize: '20px', color: 'red' }}> 50000000</span>
                            </Text>
                            <Text fontSize='md' mr={100} mb={-15} mt={20}>
                                Giá gốc: <span style={{ fontSize: '20px', textDecoration: 'line-through' }}> 50000000</span>
                            </Text>
                            <Text fontSize='md' mr={140} mt={23}>
                                Giảm giá:<Text as='mark'> -15%</Text>
                            </Text>

                        </GridItem>
                        <GridItem
                            mr={2}
                            h="410px"
                            w="290px" // Đổi 'PX' thành 'px'
                            rowSpan={1}
                            colSpan={1}
                            bg="white"
                            borderRadius={8}
                            Center // Xóa Center và thêm style justifyContent và alignItems
                        >
                            <Center>
                                <Image
                                    src="https://cdn.tgdd.vn/Products/Images/86/229575/chuot-bluetooth-microsoft-arc-xanh-xam-1-org.jpg"
                                    alt="Dan Abramov"
                                    h="200px"
                                    w="100%" // Đổi {"100%"} thành "100%"
                                    borderTopRadius={8}
                                    marginBottom={20}

                                />

                            </Center>
                            <Text fontSize='2xl' as='b' textAlign="center" >HP Gaming VICTUS 16 r0128TX i5 13450HX</Text>
                            <Text fontSize='md' mr={100} mb={-15} mt={40}>
                                Giá mới: <span style={{ fontSize: '20px', color: 'red' }}> 50000000</span>
                            </Text>
                            <Text fontSize='md' mr={100} mb={-15} mt={20}>
                                Giá gốc: <span style={{ fontSize: '20px', textDecoration: 'line-through' }}> 50000000</span>
                            </Text>
                            <Text fontSize='md' mr={140} mt={23}>
                                Giảm giá:<Text as='mark'> -15%</Text>
                            </Text>

                        </GridItem>
                        <GridItem
                            mr={2}
                            h="410px"
                            w="290px" // Đổi 'PX' thành 'px'
                            rowSpan={1}
                            colSpan={1}
                            bg="white"
                            borderRadius={8}
                            Center // Xóa Center và thêm style justifyContent và alignItems
                        >
                            <Center>
                                <Image
                                    src="https://cdn.tgdd.vn/Products/Images/86/311113/chuot-bluetooth-silent-logitech-m240-1.jpg"
                                    alt="Dan Abramov"
                                    h="200px"
                                    w="100%" // Đổi {"100%"} thành "100%"
                                    borderTopRadius={8}
                                    marginBottom={20}

                                />

                            </Center>
                            <Text fontSize='2xl' as='b' textAlign="center" >HP Gaming VICTUS 16 r0128TX i5 13450HX</Text>
                            <Text fontSize='md' mr={100} mb={-15} mt={40}>
                                Giá mới: <span style={{ fontSize: '20px', color: 'red' }}> 50000000</span>
                            </Text>
                            <Text fontSize='md' mr={100} mb={-15} mt={20}>
                                Giá gốc: <span style={{ fontSize: '20px', textDecoration: 'line-through' }}> 50000000</span>
                            </Text>
                            <Text fontSize='md' mr={140} mt={23}>
                                Giảm giá:<Text as='mark'> -15%</Text>
                            </Text>

                        </GridItem>
                        <GridItem
                            mr={2}
                            h="410px"
                            w="290px" // Đổi 'PX' thành 'px'
                            rowSpan={1}
                            colSpan={1}
                            bg="white"
                            borderRadius={8}
                            Center // Xóa Center và thêm style justifyContent và alignItems
                        >
                            <Center>
                                <Image
                                    src="https://cdn.tgdd.vn/Products/Images/86/220368/chuot-gaming-asus-tuf-m3-den-2-org.jpg"
                                    alt="Dan Abramov"
                                    h="200px"
                                    w="100%" // Đổi {"100%"} thành "100%"
                                    borderTopRadius={8}
                                    marginBottom={20}

                                />

                            </Center>
                            <Text fontSize='2xl' as='b' textAlign="center" >HP Gaming VICTUS 16 r0128TX i5 13450HX</Text>
                            <Text fontSize='md' mr={100} mb={-15} mt={40}>
                                Giá mới: <span style={{ fontSize: '20px', color: 'red' }}> 50000000</span>
                            </Text>
                            <Text fontSize='md' mr={100} mb={-15} mt={20}>
                                Giá gốc: <span style={{ fontSize: '20px', textDecoration: 'line-through' }}> 50000000</span>
                            </Text>
                            <Text fontSize='md' mr={140} mt={23}>
                                Giảm giá:<Text as='mark'> -15%</Text>
                            </Text>

                        </GridItem>
                        <GridItem
                            mr={2}
                            h="410px"
                            w="290px" // Đổi 'PX' thành 'px'
                            rowSpan={1}
                            colSpan={1}
                            bg="white"
                            borderRadius={8}
                            Center // Xóa Center và thêm style justifyContent và alignItems
                        >
                            <Center>
                                <Image
                                    src="https://cdn.tgdd.vn/Products/Images/86/229571/chuot-bluetooth-silent-rapoo-m500-1-1.jpg"
                                    alt="Dan Abramov"
                                    h="200px"
                                    w="100%" // Đổi {"100%"} thành "100%"
                                    borderTopRadius={8}
                                    marginBottom={20}

                                />

                            </Center>
                            <Text fontSize='2xl' as='b' textAlign="center" >HP Gaming VICTUS 16 r0128TX i5 13450HX</Text>
                            <Text fontSize='md' mr={100} mb={-15} mt={40}>
                                Giá mới: <span style={{ fontSize: '20px', color: 'red' }}> 50000000</span>
                            </Text>
                            <Text fontSize='md' mr={100} mb={-15} mt={20}>
                                Giá gốc: <span style={{ fontSize: '20px', textDecoration: 'line-through' }}> 50000000</span>
                            </Text>
                            <Text fontSize='md' mr={140} mt={23}>
                                Giảm giá:<Text as='mark'> -15%</Text>
                            </Text>

                        </GridItem>


                        {/* Các GridItem khác */}
                    </Grid>
                </Grid>
            </Box>
        </Center>

    );
};

export default ProductTop;
