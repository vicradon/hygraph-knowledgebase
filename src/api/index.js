import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_CONTENT_API, {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_PERMANENT_ACCESS_TOKEN}`,
  },
});

export default client;
