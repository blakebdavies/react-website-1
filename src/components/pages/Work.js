import React from "react";
//import "../../App.css";
import { gql, GraphQLClient } from "graphql-request";

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const query = gql`
    query {
      portfolios {
        title
        slug
        tags
        description
        date
        coverImage {
          url
          width
          height
        }
      }
      posts {
        title
        slug
        description
        date
        tags
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
    }
  `;

  const data = await graphQLClient.request(query);

  return {
    props: {
      data,
    },
  };
};
export default function Work() {
  return (
    <div>
      <h1 className="work">Work</h1>
    </div>
  );
}
