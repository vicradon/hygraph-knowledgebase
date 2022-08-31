import { Box, Heading } from "@chakra-ui/react";
import React from "react";

function Article({ title, content }) {
  return (
    <Box>
      <Heading>{title}</Heading>

      <Box dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  );
}

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/api/articles/${id}`);
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export default Article;
