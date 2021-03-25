import React from 'react';
import '../CarouselComponent/node_modules/antd/dist/antd.css';
import './cards.component.css'
import { Card, Col, Row } from 'antd';
import { Layout } from 'antd';
import { Typography, Space } from 'antd';

const { Text, Link } = Typography;
const { Sider, Content } = Layout;
const Cards= ()=>(
    <div className="Cards">
        <Row gutter={24}>
        <Col span={24}>
         <Card title="Challenge Name" bordered={true}  style={{ marginTop: "40px", textAlign:"left", boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)", borderRadius: "16px" }} >
           <h><Text type="secondary">Description</Text></h>
          </Card>
        </Col>
        </Row>
     </div>
);
export default Cards