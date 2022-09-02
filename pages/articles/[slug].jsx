import { Box, Heading, styled } from "@chakra-ui/react";
import React from "react";
import client from "../../src/api";
import { GET_ARTICLES, GET_ARTICLE } from "../../src/api/articles";
import GuestLayout from "../../src/Layout/Guest";

function Article({ article }) {
  const { title, body, jsonPlaceholderPost } = article;

  return (
    <GuestLayout>
      <Box
        sx={{
          h1: "font-size:2.5rem;font-weight: 500;margin-bottom: 1rem;",
          h2: "font-size:2.3rem;font-weight: 500;margin-bottom: 1rem;",
          p: "font-size: 1.25rem;line-height: 1.5rem;margin-bottom: 1rem;",
        }}
        width={["100%", "80%", "60%"]}
        margin="auto"
        minH={"90vh"}
      >
        <Heading>{title}</Heading>

        <Box mb={"4rem"} dangerouslySetInnerHTML={{ __html: body.html }} />
      </Box>
    </GuestLayout>
  );
}

export async function getStaticPaths() {
  const { articles } = await client.request(GET_ARTICLES, { searchQuery: "" });
  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  try {
    const { article } = await client.request(GET_ARTICLE, {
      slug: params.slug,
    });

    return {
      props: {
        article,
      },
    };
  } catch (error) {
    return { props: {} };
  }
};

export default Article;
