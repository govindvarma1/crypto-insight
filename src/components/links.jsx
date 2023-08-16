import React from "react";

function Render(props) {
  return (
    <div className="coin-details-section">
      <h3>Links</h3>
      {props.link.map((item, index) => (
        <a href={item.url} key={index}>
          <div className="coin-details-card">
            <p>{item.type}</p>
            <p className="link">{item.name}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default function List(props) {
  const links = props.links;
  return <div>{links !== null ? <Render link={links} /> : null}</div>;
}
