import { gql } from "graphql-request";

export const GET_ARTICLE = gql`
  query FetchArticle($slug: String!) {
    article(where: { slug: $slug }) {
      title
      content {
        html
      }
    }
  }
`;

export const GET_ARTICLES = gql`
  query FetchArticles {
    articles {
      id
      title
      slug
      githubuser(githubInput: { userId: "hrittikhere" }) {
        id
        twitter_username
      }
    }
  }
`;
