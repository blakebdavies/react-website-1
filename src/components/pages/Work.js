import React from "react";
import { Link } from "react-router-dom";
import "./Work.css";
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

  if (loading) return "Loading...";
  if (error) return "Error, please try something new";

  return (
    <>
      <div className="header">
        <h1 className="work">Our Work</h1>
        <p>We take pride in what we do and ensure our client comes first.</p>
      </div>
      <div className="work-projects">
        {data?.portfolios?.map((item) => (
          <div key={item.slug}>
            {" "}
            Campaign:{" "}
            <Link to={`/work/${item.slug}`}>
              <a href={`work/${item.slug}`}>{item.title}</a>
            </Link>
            <div className="project-image">
              <img
                src={item.coverImage.url}
                alt={`${item.title} campaign`}
                className="project-img"
              />
            </div>
            <p className="project-description">
              {item.date}: {item.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
