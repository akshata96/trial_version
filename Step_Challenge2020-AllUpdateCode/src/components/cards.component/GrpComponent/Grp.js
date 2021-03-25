import React from 'react';
import 'antd/dist/antd.css';
import './Grp_css.css';
import { Card, Col, Row , Avatar} from 'antd';
// const styles = {
//     fontFamily: "sans-serif",
//     textAlign:"center",
//     background: "#f8f7ff"
//   };  
  const { Meta } = Card;
const Cards= ()=>(
    <div className = "grpcard">
        <h2> What our Experts say..... </h2>
    
        <Row type = "flex" gutter={24}>
        <Col   span={8}>
         <Card bordered={true} avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} style={{ textAlign:"center", boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)", borderRadius: "16px",overflow: "hidden",textOverflow: "ellipsis",maxHeight: "225px"}} >
            <Meta className="cardBodyStyle"
                title="Dave Kunst" 
                avatar={<Avatar src="https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png" />}
            />
            <p style = {{overflow: "hidden" ,textOverflow:"ellipsis"}}> Dave Kunst was the very first (verified) person to complete an entire circuit of the earth on foot (not including the oceans, of course).Beginning in June 1970, Dave, accompanied by his brother John, left on a journey that would take them across Europe, North America, Asia, the Middle East and Europe.
             {/* accompanied by his brother John, left on a journey that would take them across Europe, Nort */}
             </p>
        </Card>
        </Col>

        <Col  span={8}>
         <Card bordered={true} avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} style={{ textAlign:"center", boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)", borderRadius: "16px",overflow: "hidden",textOverflow: "ellipsis",maxHeight: "225px"}} >
            <Meta className="cardBodyStyle"
                title="Steven Newman"
                avatar={<Avatar src="https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png" />}
            />
            <p style = {{overflow: "hidden" ,textOverflow:"ellipsis"}}> Listed in the Guinness Book of Records as the first person to walk around the world solo, Steve Newman crossed 20 countries and walked some 15,000 miles during his four-year journey.

Since the time he finished his walk in 1987, he has also walked the length of Japan, South Korea and Taiwan and completed the 900-mile path on Shikoku Island.

{/* He is currently planning the first ever walk across the entire length of the Great Wall of China. */}
</p>
        </Card>
        </Col>

        <Col   span={8}>
         <Card bordered={true} avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} style={{ textAlign:"center", boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)", borderRadius: "16px",overflow: "hidden",textOverflow: "ellipsis",maxHeight: "225px"}} >
            <Meta className="cardBodyStyle"
                title="Ffyona Campbell"
                avatar={<Avatar src="https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png" />}
            />
            <p style = {{overflow: "hidden" ,textOverflow:"ellipsis"}}> The official record of “first woman to walk around the world” was taken away from Ffyona Campbell when it emerged she cheated on a few miles of the journey during the USA leg of her trip.

Nonetheless, she completed a walk of 20,000 miles, crossing the USA, Australia, Africa and Europe in the space of 11 years.

{/* She has since made up the distance missed in the USA. Although she cannot reclaim her lost record, she holds the record for the fastest crossing of Australia on foot – 3,200 miles in just 95 days. */}
</p>
        </Card>
        </Col>
    
        </Row>
     </div>
);
export default Cards

