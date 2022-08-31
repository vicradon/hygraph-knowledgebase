import { gql } from "graphql-request";

export const GET_FAQS = gql`
  query FetchArticles {
    faqs {
      id
      question
      answer
    }
  }
`;
