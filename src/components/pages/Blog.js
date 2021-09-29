import React from "react";
import { Link } from "react-router-dom";
//import "../../App.css";
import { useQuery, gql } from "@apollo/client";

const query = gql`
  {
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

export default function Blog() {
  const { data, loading, error } = useQuery(query);
  console.log(data);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <>
      <div className="header">
        <h1 className="blog">Our Blog</h1>
        <p>Check out our team's industry knowledge</p>
      </div>
      <div className="work-projects">
        {data?.posts?.map((item) => (
          <div key={item.slug}>
            <Link to={`/work/${item.slug}`}>
              <a href={`work/${item.slug}`}>{item.title}</a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
