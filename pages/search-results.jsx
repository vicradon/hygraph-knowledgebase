import {
  Box,
  Flex,
  FormControl,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import client from "../src/api";
import { GET_ARTICLES } from "../src/api/articles";
import Footer from "../src/Layout/Guest/Footer";
import Navbar from "../src/Layout/Guest/Navbar";
import { CgFileDocument } from "react-icons/cg";
import NextLink from "next/link";
import { useRouter } from "next/router";

function SearchResults() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(router.query.query || "");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (router.query.query) {
      setSearchQuery(router.query.query);
    }
  }, [router.query.query]);

  useEffect(() => {
    if (searchQuery) {
      client
        .request(GET_ARTICLES, {
          searchQuery,
        })
        .then(({ articles }) => {
          setSearchResults(articles);
        })
        .catch((error) => {
          handleError(error);
        });
    }
  }, [searchQuery]);

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

        <Box position={"absolute"} bottom={"30px"} as={"form"} width={"100%"}>
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
      <Box bgColor={"grey.500"} color={"secondary.500"} minHeight={"50vh"}>
        <Flex flexWrap={"wrap"} rowGap={"2rem"} justifyContent={"space-around"}>
          {searchResults.map((article) => {
            return (
              <Flex
                columnGap={"1rem"}
                borderTop={"1px solid grey"}
                alignItems={"center"}
                key={article.id}
                paddingY={"1rem"}
              >
                <CgFileDocument />
                <NextLink href={`/articles/${article.slug}`} passHref>
                  <Link fontSize={"lg"}>{article.title}</Link>
                </NextLink>
              </Flex>
            );
          })}
        </Flex>

        <Box>
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
