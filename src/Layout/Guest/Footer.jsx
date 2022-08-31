import { Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Flex
      paddingY="40px"
      bgColor={"grey.500"}
      color={"secondary.500"}
      justifyContent={{ base: "start", lg: "space-between" }}
      alignItems={{ base: "start", lg: "center" }}
      flexWrap={"wrap"}
      px={{ base: "1rem", lg: "4rem" }}
      flexDir={{ base: "column", lg: "row" }}
      rowGap={"2rem"}
    >
      <Text>Hygraph Portal</Text>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        flexWrap={"wrap"}
        columnGap={"1rem"}
        rowGap={"1rem"}
      >
        <Link to="#">Privacy Policy</Link>
        <Link to="#">Terms and Conditions</Link>
        <Link to="#">Contact Us</Link>
        <Link to="#">Careers</Link>
      </Flex>
    </Flex>
  );
}

export default Footer;
