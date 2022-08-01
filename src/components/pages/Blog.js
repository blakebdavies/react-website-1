import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
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

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div className="container">
      <div className="header">
        <h1 className="blog">Our Blog</h1>
        <p>Check out our team's industry knowledge</p>
      </div>
      <div className="blogs__container">
        <div className="blogs__wrapper">
          <ul className="blog__posts">
            {data?.posts?.map((item) => (
              <div className="blog-post" key={item.slug}>
                <Link className="blog-post-title" to={`/work/${item.slug}`}>
                  <a className="blog-post-link" href={`work/${item.slug}`}>
                    {item.title}
                  </a>
                </Link>
                <div className="blog-post-description">
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
