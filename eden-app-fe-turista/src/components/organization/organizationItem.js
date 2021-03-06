import React from "react";
import { Card, Typography } from "antd";
import { Link } from "react-router-dom";

import "./organizationItem.css";
const { Title } = Typography;

const OrganizationItem = (props) => {
  const item = props.organization.organization;

  return (
    <div className="organization-item">
      <Link
        to={{
          pathname: "/organizations/detail",
          state: { props },
        }}
      >
        <Card
          hoverable
          className="card"
          cover={<img className="card-image" alt="" src={item.urlBanner} />}
        />
      </Link>
      <Title className="card-title" level={5}>
        {item.nombre}
      </Title>
      <div className="card-description">{item.descripcion}</div>
    </div>
  );
};

export default OrganizationItem;
