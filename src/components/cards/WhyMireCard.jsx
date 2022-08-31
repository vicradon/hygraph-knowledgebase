import { Box, Center, Image } from "@chakra-ui/react";

function WhyMireCard({ step, children }) {
  return (
    <Box textAlign={"center"} height={"200px"} width={"200px"}>
      <Center
        rounded={"full"}
        width={"50px"}
        height={"50px"}
        textAlign={"center"}
        bgColor={"brand.500"}
        margin={"1rem auto"}
      >
        {step}
      </Center>

      {children}
    </Box>
  );
}

export default WhyMireCard;
