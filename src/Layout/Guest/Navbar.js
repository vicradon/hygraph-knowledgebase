import { Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

function Navbar() {
  return (
    <Flex
      padding={"1rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <NextLink passHref href={"/"}>
        <Link>
          <Text>Hygraph Portal</Text>
        </Link>
      </NextLink>
    </Flex>
  );
}

export default Navbar;
