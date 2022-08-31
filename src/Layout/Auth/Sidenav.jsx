import { Image, Button, Flex, Link, Text, Grid } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { logout } from "../../api/auth";
import { handleError } from "../../utils/errorHandler";
import { FiLogOut } from "react-icons/fi";

function Sidenav() {
  const handleLogout = async () => {
    try {
      await logout();
      window.location.href = "/";
    } catch (error) {
      handleError(error);
    }
  };
  const router = useRouter();

  return (
    <Grid
      gridTemplateRows={"1fr 10fr 1fr"}
      height={"100%"}
      padding={"1.5rem"}
      justifyItems={"center"}
      alignItems={"center"}
    >
      <Image src={"/icons/Logo.png"} alt={"Mire logo"} />

      <Flex flexDirection={"column"} rowGap={"2rem"}>
        <NextLink passHref href={"/app"}>
          <Link color={router.pathname === "/app" ? "#FFFFFF" : "#9f9f9f"}>
            <Flex columnGap={"0.5rem"} alignItems={"center"}>
              <Image display={"inline"} src="/icons/home.svg" alt="home" />
              <Text>Home</Text>
            </Flex>
          </Link>
        </NextLink>

        <NextLink passHref href={"/app/balances"}>
          <Link
            color={router.pathname === "/app/balances" ? "#FFFFFF" : "#9f9f9f"}
          >
            <Flex columnGap={"0.5rem"} alignItems={"center"}>
              <Image src="/icons/credit-card.svg" alt="credit card" />
              <Text>Balances</Text>
            </Flex>
          </Link>
        </NextLink>
      </Flex>

      <Button
        onClick={handleLogout}
        variant={"ghost"}
        colorScheme={"brand"}
        bgColor={"secondary"}
      >
        <Flex alignItems={"center"} columnGap={"0.5rem"}>
          <Text>Logout</Text>
          <FiLogOut />
        </Flex>
      </Button>
    </Grid>
  );
}

export default Sidenav;
