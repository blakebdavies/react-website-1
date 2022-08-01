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
    <div className="container">
      <div className="header">
        <h1 className="work">Our Work</h1>
        <p>We take pride in what we do and ensure our client comes first.</p>
      </div>
      <div className="projects__container">
        <div className="projects__wrapper">
          <ul className="projects__items">
            {/* <div className="work-projects"> */}
            {data?.portfolios?.map((item) => (
              <li className="project-item" key={item.slug}>
                {" "}
                <p className="project-item-title">
                  Campaign:{" "}
                  <Link to={`/work/${item.slug}`}>
                    <a className="project-item-link" href={`work/${item.slug}`}>
                      {item.title}
                    </a>
                  </Link>
                </p>
                <div className="project__item__pic-wrap">
                  <img
                    src={item.coverImage.url}
                    alt={`${item.title} campaign`}
                    className="project__item__img"
                  />
                </div>
                <p className="project__item__info">
                  {item.date}: {item.description}
                </p>
              </li>
            ))}
            {/* </div> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
