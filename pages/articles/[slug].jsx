import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import client from "../../src/api";
import { GET_ARTICLES, GET_ARTICLE } from "../../src/api/articles";

function Article({ article }) {
  const { title, content } = article;
  return (
    <Box>
      <Heading>{title}</Heading>

      <Box dangerouslySetInnerHTML={{ __html: content.html }} />
    </Box>
  );
}

export async function getStaticPaths() {
  const { articles } = await client.request(GET_ARTICLES);
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
