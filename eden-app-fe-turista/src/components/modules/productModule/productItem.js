import React, { useState, useEffect } from "react";
import { Typography, Card, Row, Col, Modal, Button } from "antd";
import { isMobile } from "react-device-detect";
import { CloseCircleOutlined } from '@ant-design/icons';
import "./productItem.css";

const { Title } = Typography;

const ProductItem = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.product);
  }, [props]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="product-item">
      <Card
        hoverable
        className="card"
        cover={<img alt="" className="product-image" src={product.urlImagen} />}
        onClick={showModal}
      />
      <Row className="item-overview">
        <Col className="item-column-1">
          <Title level={5} className="item-title">
            {product.nombre}
          </Title>
          <p className="item-description">
            {product.descripcion}
          </p>
        </Col>
        <Col flex="auto">
          <Button className="item-button" htmlType="button">
            {'\u0024'} {product.precio}
          </Button>
        </Col>
      </Row>

      <Modal
        title=""
        maskStyle=""
        width={isMobile ? "100%" : "55%"}
        className="custom-modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={<CloseCircleOutlined style={{ fontSize: '24px' }} />}
        bodyStyle={{
          overflowY: "auto",
          overflow: "hidden",
          height: "506px",
          borderradius: "12px",
          padding: "0"
        }}
        footer={null}
      >
        <div className="description-container">
          <div className="background" style={{
            backgroundImage: 'url(' + product.urlImagen + ')',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
            <span className="product-title">{product.nombre}</span>
          </div>
          <div className="price">
            <span>{'\u0024'} {product.precio}</span>
          </div>
          <div className="general">
            <p>
              {product.descripcion}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductItem;
