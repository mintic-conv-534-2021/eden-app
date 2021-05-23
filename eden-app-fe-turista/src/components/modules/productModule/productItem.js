import React, { useState } from 'react';
import { Typography, Card, Row, Col, Modal, Button } from 'antd';
import { isMobile } from "react-device-detect";
import './productItem.css';

const { Title } = Typography;


const ProductItem = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

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
            cover={<img alt="" src="" />}
            onClick={showModal}
        >
        </Card>
        <Row className="item-overview">
            <Col flex="175px">
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

        <Modal 
            title="Nombre Producto"
            width={isMobile? "100%" : "70%"}
            className="custom-modal"
            visible={isModalVisible} 
            onOk={handleOk} 
            onCancel={handleCancel}
            bodyStyle={{ padding: '10px 24px 10px 24px', overflowY: 'auto', height:'226px', overflow:'hidden' }}
            footer={null}>
            <div className="description-container">
                <div className="price">
                    <span>$9.999.999</span>
                </div>
                <div className="general">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget purus bibendum, ulla m corper quam eu, tincidunt ante. 
                    </p>
                    <ul>
                        <li>Fusce tincidunt est in ipsum iaculis eleifend. Ut vestibulum orci ut odio tincidunt, non </li>
                        <li>lacinia ex hendrerit. Etiamae sodales enim enim, eu cursus libero lacinia at. Ut eu leo </li>
                        <li>neque. Vestibulum ante ipsum primis in faucibus orci luctus et </li>
                    </ul>
                    <p>
                        ultrices posuere cubilia curae; Proin ut nibh lorem. Ut ipsum ipsum, bibendum venenatis f a u c ibus vulputate, viverra eu massa donec.
                    </p>
                </div>
            </div>
        </Modal>
    </div>
    );
};

export default ProductItem;