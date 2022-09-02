import { gql } from "graphql-request";

export const GET_ARTICLE = gql`
  query FetchArticle($slug: String!) {
    article(where: { slug: $slug }) {
      title
      body {
        html
      }
      jsonPlaceholderPost(postInput: { postId: 1 }) {
        id
        body
      }
    }
  }
`;

export const GET_ARTICLES = gql`
  query FetchArticles($searchQuery: String!) {
    articles(where: { _search: $searchQuery }) {
      id
      title
      slug
    }
  }
`;
