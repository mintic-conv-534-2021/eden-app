import React from "react";
import { Typography, Card, Row, Col, Button } from 'antd';
import './productItem.css';

const { Title } = Typography;

const ProductItem = () => (
    <div className="product-item">
        <Card
            hoverable
            className="card"
            cover={<img alt="" src="" />}
        >
        </Card>
        <Row className="item-overview">
            <Col flex="160px">
                <Title level={5}>Nombre Producto</Title>
                <p className="item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget purus bibendum, ullamcorper
                </p>
            </Col>
            <Col flex="auto">
                <Button className="item-button" htmlType="button">
                    $ 9.999.999
                </Button>
            </Col>
        </Row>
    </div>
)

export default ProductItem;