import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function GuestLayout({ children }) {
  return (
    <Box bgColor={"grey.500"} color={"secondary.500"}>
      <Navbar />

      <Box>{children}</Box>

      <Footer />
    </Box>
  );
}

export default GuestLayout;
