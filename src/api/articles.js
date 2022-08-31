import { gql } from "graphql-request";

export const GET_ARTICLES = gql`
  query FetchArticles {
    articles {
      id
      title
      githubuser(githubInput: { userId: "hrittikhere" }) {
        id
        twitter_username
      }
    }
  }
`;
