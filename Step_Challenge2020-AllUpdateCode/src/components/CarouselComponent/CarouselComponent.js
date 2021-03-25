import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './CarouselComponent.css';
import { Layout } from 'antd';
import { Carousel, Col, Row } from 'antd';
import { Typography } from 'antd';
import axios from 'axios';

const { Paragraph } = Typography;
const { Sider, Content } = Layout;

function onChange(a, b, c) {
  console.log(a, b, c);
}
export default class Carousels extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      content1Participant_say:"",
      content2Participant_say:"",
      content3Participant_say:"",
      content1ProfilePic:"",
      content2ProfilePic:"",
      content3ProfilePic:"",
      content1FullName:"",
      content2FullName:"",
      content3FullName:""
      
    }
  }
  componentWillMount() {
    axios.get('/row1')    
  .then(response =>{
    const data=response.data.rows;

      this.setState({
        content1Participant_say:data[0].Participant_Say,
        content1ProfilePic:data[0].Profile_Picture,
        content1FullName:data[0].Full_Name
        })


        this.setState({
        content2Participant_say:data[1].Participant_Say,
        content2ProfilePic:data[1].Profile_Picture,
        content2FullName:data[1].Full_Name
        })


        this.setState({
          content3Participant_say:data[2].Participant_Say,
        content3ProfilePic:data[2].Profile_Picture,
        content3FullName:data[2].Full_Name
        })

      })
      .catch(error => this.setState({ error }));

  }
  render (){
      
    return(
  <div className="Carousels">
    <Row type = "flex" gutter={24}>
      <Col span={24}>
      <div className = "card">
        <h2> What our participants say..... </h2>
          <Carousel afterChange={onChange} bordered={true}  style={{ overflow: "hidden", boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)", borderRadius: "16px", justifycontent: "space-evenly"}}>
            <div>
              <Layout style={{overflow: "hidden",textoverflow: "ellipsis"}}>
                <Sider><Avatar src={this.state.content1ProfilePic} size={150} position icon={<UserOutlined />} /></Sider>
                <Content> 
                <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: 'more' }} style={{overflow: "hidden",textoverflow: "ellipsis",maxWidth:"60vw"}}>
                        {this.state.content1FullName} : {this.state.content1Participant_say}
                </Paragraph>
                </Content>
                </Layout>
                </div> 
            <div>
              <Layout>
                <Sider><Avatar size={150} position icon={<UserOutlined />} /></Sider>
                <Content> 
                <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: 'more' }} style={{overflow: "hidden",textoverflow: "ellipsis",maxWidth:"60vw"}}>
                          {this.state.content2FullName} : {this.state.content2Participant_say}
                </Paragraph>
                </Content>
              </Layout>
            </div>
            <div>
              <Layout>
                <Sider><Avatar size={150} position icon={<UserOutlined />} /></Sider>
                <Content> 
                <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: 'more' }} style={{overflow: "hidden",textoverflow: "ellipsis",maxWidth:"60vw"}}>
                          {this.state.content3FullName} : {this.state.content3Participant_say}
                </Paragraph>
                </Content>
             </Layout>    
            </div>  
          </Carousel>
        </div>
      </Col>
    </Row>

  </div>
);

                }
              }


// import React from 'react';
// import axios from 'axios';
// import { Avatar } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';
// import './CarouselComponent.css';
// import { Layout } from 'antd';
// import { Carousel, Col, Row } from 'antd';
// import { Typography } from 'antd';

// const { Paragraph } = Typography;
// const { Sider, Content } = Layout;

// function onChange(a, b, c) {
//   console.log(a, b, c);
// }


// const Carousels= ()=>(
//   <div className="Carousels">
//     <Row type = "flex" gutter={24}>
//       <Col span={24}>
//       <div className = "card">
//         <h2> What our participants say..... </h2>
//           <Carousel afterChange={onChange} bordered={true}  style={{ overflow: "hidden", boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)", borderRadius: "16px", width:"1460px", justifycontent: "space-evenly"}}>
//             <div>
//               <Layout>
//                 <Sider><Avatar size={150} position icon={<UserOutlined />} /></Sider>
//                 <Content> 
//                 <Paragraph ellipsis={{ rows: 5, expandable: true, symbol: 'more'  }} style={{ width:"1000px"}}>
//                 Dave Kunst was the very first (verified) person to complete an entire circuit of the earth on foot (not including the oceans, 
//                 of course).Beginning in June 1970, Dave, accompanied by his brother John, 
//                 left on a journey that would take them across Europe, North America, Asia, the Middle East and Europe
//                 </Paragraph>
//                 </Content>
//                 </Layout>
//                 </div> 
//             <div>
//               <Layout>
//                 <Sider><Avatar size={150} position icon={<UserOutlined />} /></Sider>
//                 <Content> 
//                 <Paragraph ellipsis={{ rows: 5, expandable: true, symbol: 'more' }} style={{ width:"1000px"}}>
//                 Steve Newman 
//                 Listed in the Guinness Book of Records as the first person to walk around the world solo, 
//                 Steve Newman crossed 20 countries and walked some 15,000 miles during his four-year journey.

// Since the time he finished his walk in 1987, 
// he has also walked the length of Japan, South Korea and
//  Taiwan and completed the 900-mile path on Shikoku Island.
//                 </Paragraph>
//                 </Content>
//               </Layout>
//             </div>
//             <div>
//               <Layout>
//                 <Sider><Avatar size={150} position icon={<UserOutlined />} /></Sider>
//                 <Content> 
//                 <Paragraph ellipsis={{ rows: 5, expandable: true, symbol: 'more' }} style={{ width:"1000px"}}>
//                 Ffyona Campbell, The official record of “first woman to walk around the world” was taken away from Ffyona Campbell when it emerged she cheated on a few miles of the journey during the USA leg of her trip.

// Nonetheless, she completed a walk of 20,000 miles, crossing the USA, Australia, Africa and Europe in the space of 11 years.
//                 </Paragraph>
//                 </Content>
//              </Layout>    
//             </div>  
//           </Carousel>
//         </div>
//       </Col>
//     </Row>

//   </div>
// );
            

// export default Carousels;
