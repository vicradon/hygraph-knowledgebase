import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function FeatureCard({ title, svg }) {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      rowGap={"1rem"}
      alignItems={"center"}
      bgColor={"white"}
      rounded={"xl"}
      border={"1px solid"}
      borderColor={"brand.500"}
      textAlign={"center"}
      width={"250px"}
      height={"250px"}
    >
      <Image src={svg} alt={title} />
      <Text fontSize={"xl"} fontWeight={"bold"}>
        {title}
      </Text>
    </Flex>
  );
}

export default FeatureCard;
