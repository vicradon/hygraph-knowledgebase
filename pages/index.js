import {
  Box,
  Button,
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Image,
  Grid,
  GridItem,
  Center,
  FormControl,
  FormLabel,
  Input,
  Link,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import client from "../src/api";
import { GET_ARTICLES } from "../src/api/articles";
import Footer from "../src/Layout/Guest/Footer";
import Navbar from "../src/Layout/Guest/Navbar";
import NextLink from "next/link";
import { CgFileDocument } from "react-icons/cg";
import { GET_FAQS } from "../src/api/faqs";

export default function Home({ articles = [], faqs = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = async (event) => {
    event.preventDefault();
    router.push(`/search-results?query=${searchQuery}`);
  };

  return (
    <>
      <Head>
        <title>Hygraph Portal</title>
        <meta
          name="description"
          content="Hygraph Portal is an example knowledge base portal powered by Hygraph."
        />
      </Head>
      <Box position={"relative"}>
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
            <Heading>Knowledgebase</Heading>
          </Flex>

          <Box
            onSubmit={handleSearch}
            position={"absolute"}
            bottom={"-40px"}
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

        <Box id={"#faqs"} px={"4rem"} paddingY={"80px"} bgColor={"brand.50"}>
          <Heading mb={"2rem"} textAlign={"center"}>
            Recent Articles
          </Heading>

          {articles.map((article) => (
            <Flex
              columnGap={"1rem"}
              borderTop={"1px solid grey"}
              alignItems={"center"}
              key={article.id}
              paddingY={"1rem"}
            >
              <CgFileDocument />
              <NextLink href="/" passHref>
                <Link fontSize={"lg"}>{article.title}</Link>
              </NextLink>
            </Flex>
          ))}
        </Box>

        <Box id={"#faqs"} px={"4rem"} paddingY={"80px"} bgColor={"brand.50"}>
          <Heading mb={"2rem"} textAlign={"center"}>
            Frequently Asked Questions
          </Heading>

          <Accordion>
            {faqs.map((faq) => (
              <AccordionItem key={faq.id}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Q: {faq.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>Ans: {faq.answer}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const { articles } = await client.request(GET_ARTICLES);
    const { faqs } = await client.request(GET_FAQS);

    return {
      props: {
        articles,
        faqs,
      },
    };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};
