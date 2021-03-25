import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './Top3team.css';
import { Card, Col, Row , Avatar} from 'antd';
import axios from 'axios';

const { Meta} = Card;

export default class top3team extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      top3t: [],
      
    }
    
  }
  
  componentWillMount(){
     const pdf = localStorage.getItem('top3tc') 
     if(!pdf){
       console.log("in if")
       this.gettop3team()

     }
       else{
         console.log(JSON.parse(localStorage.getItem('top3tc')))
         this.setState({
          top3t : JSON.parse(localStorage.getItem('top3tc'))
         })
         //this.psay = JSON.parse(localStorage.getItem('participantsay'))
         console.log(this.top3t)
       }
   }

   gettop3team() {
    console.log("in top3t ")
      axios.get('/gettop3team', {})    
      .then(response =>{
        console.log(response.data);
        this.setState({
          top3t : response.data.rows
         })
          
          localStorage.setItem('top3tc', JSON.stringify(response.data.rows))

          })
      
          
              .catch((error) => {
                  console.log("error", error)
              })
  
      }


render(){
  console.log(this.state.top3t)
  let x = this.state.top3t && this.state.top3t.map(y => {
    return (

      <Col   span={5}>
      <Card bordered={true}  style={{ textAlign:"center", boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)", borderRadius: "12px",overflow: "hidden",textOverflow: "ellipsis", maxWidth: "200px", minHeight: "200px"}} >
         <Meta className="cardBodyStyle"
            title={<Avatar src={y.Profile_Picture}/>}
            
         />
         <h2> {y.indexno} </h2>
         <h3 justify = "left"> {y.Team_Name} </h3>
         <p1 style = {{overflow: "hidden" ,textOverflow:"ellipsis"}}> {y.Steps}
          </p1>
          <br />
          <p2> Steps </p2>
     </Card>
     </Col>
    )
  }
    )

  return(
    <div className="Cards">
        <h1> TEAM LEADERBOARD </h1>
    <div className="CardBody">
    
        <Row type = "flex" gutter={24} justify = "center">
       
        {x}
        
        </Row>
     </div>
     </div>
  
  )
}

}