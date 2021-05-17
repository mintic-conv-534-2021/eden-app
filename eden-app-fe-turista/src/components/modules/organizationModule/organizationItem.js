import React from "react";
import { Typography, Card, Row } from 'antd';
import './organizationItem.css';

const { Title } = Typography;

const OrganizationItem = () => (
    <div className="organization-item">
        <Row>
            <Title level={5}>Nombre empresa</Title>
            <p className="organization-description">
                Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra sagittis 
            </p>
        </Row>
        <Row>
            <Card
                hoverable
                className="card"
                cover={<img alt="" src="" />}
            >
            </Card>
        </Row>
    </div>
)

export default OrganizationItem;