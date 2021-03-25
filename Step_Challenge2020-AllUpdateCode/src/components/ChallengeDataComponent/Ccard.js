import { Card, Col } from 'antd';
import React, { Component } from "react";
import './ChallengeDataComponent.css'

export default class Ccard extends Component {
    
    render() {
        let {Challenge_ID, Challenge_Name,Description} = this.props.cdata
        return(
            <div>
                <div className="site-card-border-less-wrapper">
                <Col span={8}>
    <Card title="Card title" bordered={false} style={{ width: 300 }} hoverable>
        <p>{Challenge_ID}</p>
        <p>{Challenge_Name}</p>
        <p>{Description}</p>
    </Card>
    </Col>
  </div>
            </div>
        )
    }
}