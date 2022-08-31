import { Box, Flex, FormControl, Heading, Input, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Footer from "../src/Layout/Guest/Footer";
import Navbar from "../src/Layout/Guest/Navbar";

function SearchResults() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(router.query.query);
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Box
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        backgroundImage={"url('/images/home-bg.png')"}
        height={"50vh"}
        color={"secondary.500"}
        position={"relative"}
      >
        <Navbar />

        <Flex height={"80%"} justifyContent={"center"} alignItems={"center"}>
          <Heading>Search Results</Heading>
        </Flex>

        <Box
          onSubmit={handleSearch}
          position={"absolute"}
          bottom={"30px"}
          as={"form"}
          width={"100%"}
        >
          <FormControl>
            <Flex justifyContent={"center"}>
              <Input
                color={"grey.500"}
                width={{ base: "90%", md: "800px" }}
                height={"80px"}
                size={"lg"}
                bgColor={"white"}
                name="search"
                value={searchQuery}
                onChange={({ target }) => setSearchQuery(target.value)}
                id="search"
                type={"search"}
                placeholder="search knowledgebase"
                required
              />
            </Flex>
          </FormControl>
        </Box>
      </Box>
      <Box>
        <Flex flexWrap={"wrap"} rowGap={"2rem"} justifyContent={"space-around"}>
          {searchResults.map((searchResult) => {
            return <Box key={searchResult.id}>{searchResult.title}</Box>;
          })}
        </Flex>

        <Box bgColor={"grey.500"} color={"secondary.500"}>
          {searchResults.length === 0 && (
            <Text textAlign={"center"}>No results found</Text>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default SearchResults;
