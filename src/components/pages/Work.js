import React from "react";
import { Link } from "react-router-dom";
import "./Work.css";
//import "../../App.css";
import { useQuery, gql } from "@apollo/client";

const query = gql`
  {
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
  }
`;

export default function Work() {
  const { data, loading, error } = useQuery(query);
  console.log(data);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <>
      <div className="header">
        <h1 className="work">Our Work</h1>
        <p>We take pride in what we do and ensure our client comes first.</p>
      </div>
      <div className="work-projects">
        {data?.portfolios?.map((item) => (
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
