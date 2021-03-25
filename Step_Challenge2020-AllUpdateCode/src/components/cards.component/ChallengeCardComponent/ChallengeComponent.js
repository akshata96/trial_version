import React from 'react';
import 'antd/dist/antd.css';
import './ChallengeComponent.css'
import { Card, Col, Row } from 'antd';
import { Layout } from 'antd';
import { Typography } from 'antd';
import axios from 'axios';
import moment from 'moment';

const { Paragraph } = Typography;
const { Sider, Content } = Layout;

const { Text } = Typography;
export default class Cards extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      challenge_title:"",
      Description:"",
      date:""
    }
  }
  componentWillMount() {
    axios.get('/card')    
  .then(response =>{
      const data=response.data.rows;
      console.log(data)
       var date_formated = moment(data[0].Start_Date).format('Do MMMM YYYY')
        this.setState({
          challenge_title:data[0].Challenge_Name,
          Description:data[0].Description,
          date:date_formated
        })
      })
      .catch(error => this.setState({ error }));

  }



render (){
  return(
    <div className="Cards">
        <Row type = "flex" gutter={24}>
        <Col span={24}>
        <Card title={this.state.challenge_title} bordered={true}  style={{ marginTop: "40px", textAlign:"left", boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)", borderRadius: "16px"}} >
         <div>
              <Layout style={{overflow: "hidden",maxHeight:"150px"}}>
                <Content > 
                <header><Text type="secondary"> Description</Text></header>
                <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more'}} style={{overflow: "hidden",textoverflow:"ellipsis"}} >
                {this.state.Description}                                                                                                             
                </Paragraph>
                </Content>
                <Sider><header><Text type="secondary">Opens on: 
                <br/>
                {this.state.date}</Text>  </header></Sider>
                </Layout>
                </div>
          </Card>
        </Col>
        </Row>
     </div>
  )
}
}