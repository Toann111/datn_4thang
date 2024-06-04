import React from "react";
import BannerHome from "../BannerHome/BannerHome.js";
import { Box, Center } from "@chakra-ui/react";
import ProductTop from "../Product/ProductTop";
import { px } from "framer-motion";
import ProductList from "../Product/ProductList";
import ProductNb from "../Product/ProductNoibat.js";
import Smartwach from "../Product/Smartwach.js";
import Phukiennb from "../Product/Phukien.js"
import ProductCard from"../Product/Gtiphone.js"
const Home = () => {
  return (
    <>
      <Center>
        <Box mt={50} w={"80%"} mbt>
          <BannerHome />
        </Box>

      </Center>
      <Center>
        <Box mt={10} w={"80%"} mbt>
          <ProductTop h={300}></ProductTop>
          <ProductList h={50} mt={300}></ProductList>
          {/* <ProductNb></ProductNb> */}
        </Box>

      </Center>
      <ProductNb></ProductNb>
      <Smartwach />
      <Phukiennb />
      <ProductCard />
    </>
  );
};
export default Home;
