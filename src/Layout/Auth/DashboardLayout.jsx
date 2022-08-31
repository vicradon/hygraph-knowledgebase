import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import Head from "next/head";

function DashboardLayout({ title, children }) {
  return (
    <>
      <Head>
        <title>Mire | Dashboard</title>
      </Head>
      <Grid
        position={"relative"}
        gridTemplateColumns={"250px 1fr"}
        minHeight={"100vh"}
      >
        <Box bgColor={"#202020"}>
          <Box height={"100vh"} pos={"fixed"}>
            <Sidenav />
          </Box>
        </Box>

        <Box overflowX={"scroll"} bgColor={"grey.500"} color={"secondary.500"}>
          <Box
            bgColor={"grey.500"}
            color={"secondary.500"}
            padding={"1rem"}
            pb={"1rem"}
            borderBottom={"1px solid"}
          >
            <Navbar title={title} />
          </Box>
          <Box padding={{ md: "0.5rem", lg: "3rem" }}>{children}</Box>
        </Box>
      </Grid>
    </>
  );
}

export default DashboardLayout;
