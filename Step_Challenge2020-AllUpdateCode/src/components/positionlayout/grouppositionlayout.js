// import React from 'react';
// import axios from 'axios';
// import { Card,Skeleton,List, Avatar,Col,Row} from 'antd';
// import './positionlayoutstyles.css'

// const {Meta} =Card
// class Positionalayout extends React.Component {
//     constructor(props){
//       super(props);
//       this.state={
//         data:[],
//         loading:true
//       };
//     };

// componentDidMount() {
//         axios.get('http://localhost:9000/individualrankings/4')    
//       .then(response =>{
//           const data=response.data;
          
//         //   var imageURL =
//         //   data.Profile_Picture ? 'data:image/png;base64,' 
//         //                 + new Buffer.from(data.Profile_Picture, 'binary').toString('base64') : '';
//         // console.log(data[0].Profile_Picture)             
//         // console.log(imageURL) 
//         //   data.forEach(function(item, i) {if (item === data.Profile_Picture) data.Profile_Picture = imageURL; });

//         //   console.log(data)
         
//             this.setState({data:data,
//             loading:false })
//         })
//         .catch(error => this.setState({ error }));
//     }

//         render()
        
//         {
//             const data =this.state.data.top3
//             const data2 = this.state.data.remain7
//             const loading = this.state.loading






//             return (
//                 <div>
//                     {loading ? <Skeleton active avatar={{ rows: 4 }} paragraph={{ rows: 4 }} /> :
//                     <div>
//                 {data === undefined || data.length === 0 ? <div> Data not Found</div> :
//                 <div>
                        
//                 <div className="Cards">
//                     <h1> INDIVIDUAL LEADERBOARD </h1>
//                 <div className="CardBody">
//                 <div>
//                 <Row type = "flex" gutter={24} justify = "center">
//                         {
//                             data.map((item,idx) =>{
//                                 return(
//                                 <Col span={8}>
//                             <Card bordered={true} 
//                             style={{ textAlign:"center", boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)", 
//                                 borderRadius: "12px",overflow: "hidden",textOverflow: "ellipsis",
//                                  maxWidth: "200px", Height: "100px"}} >
//                                 <Meta className="cardBodyStyle"
//                                     title={<Avatar  src={`
//                                     ${item.Profile_Picture ? 'data:image/png;base64,' + new Buffer.from(item.Profile_Picture, 'binary')
//                                     .toString('base64') : ''}`} alt='profile' />}
//                                 />
//                                 <h2> {idx+1} </h2>
//                                 <h3 justify = "left"> {item.Name} </h3>
//                                 <p1 style = {{overflow: "hidden" ,textOverflow:"ellipsis"}}> {item.steps} </p1>
//                                 <br />
//                                 <p2> Steps </p2>
//                             </Card>
                        
//                             </Col>
//                                 ) ;
//                             })
//                         }               
// 				</Row>
// 			</div>
// 		    </div>
//             </div>
//             <div>
//                 <Col type = "flex" gutter={24} justify = "center">
//                 <List
//                     itemLayout="horizontal"
//                     dataSource={data2}
                    
//                     renderItem={(item,idx) => (
       
//       <List.Item
//       extra={`${item.steps}`} >
        
         
// 	  <div></div>
//       <Card bordered = {true} 
//        style={{textAlign:"center",borderRadius:'50px',
//        boxShadow: "5px 8px 24px 5px rgba(208,216,243,0.6)", width:'50vw'}}>
//         <List.Item.Meta
        
//           avatar={<Avatar  src={`
//                             ${item.Profile_Picture ? 'data:image/png;base64,' + new Buffer.from(item.Profile_Picture, 'binary')
//                                   .toString('base64') : ''}`} alt='profile' />}
//           title={item.Name}
//         />
//         </Card> 
		
        
//           <div></div>
//       </List.Item>
      
//     )}
//   />               
// 				</Col>
// 			</div>       

//              </div>
                
//                      }
//                     </div>
//                         }
//                 </div>                
//             )
//         }
    
// }
// export default Positionalayout    


import React from 'react';
import axios from 'axios';
import { Card,Skeleton,List, Avatar,Col,Row,Space} from 'antd';
// import './positionlayoutstyles.css'
// import './Top3cards.css';

const {Meta} =Card
class Positionalayout extends React.Component {
    constructor(props){
      super(props);
      this.state={
        data:[],
        loading:true
      };
    };

componentDidMount() {
    var x = localStorage.getItem('challengeID')

        axios.get(`/groupranking/${x}`)    
      .then(response =>{
          const data=response.data;       
            this.setState({data:data,
            loading:false })
        })
        .catch(error => this.setState({ error }));
    }

        render()
        
        {
            const data =this.state.data.top3
            const data2 = this.state.data.remain7
            const loading = this.state.loading
            return (
                <div>
                    {loading ? <Skeleton active avatar={{ rows: 4 }} paragraph={{ rows: 4 }} /> :
                    <div>
                {data === undefined || data.length === 0 ? <div> Data not Found</div> :
                <div>
                        
                <div className="Cards">
                    <h1> TEAMS LEADERBOARD </h1>
                <div className="CardBody">
                <div>
                <Row type = "flex" gutter={24} >
                        {
                            data.map((item,idx) =>{
                                return(
                                <Col span={8}>
                            <Card bordered={true} 
                            style={{ textAlign:"center", boxShadow: "5px 3px 24px 5px rgba(208, 216, 243, 0.6)", height :"32vh",width:"15vw", 
                                borderRadius: "12px"
                                 }} >
                                <Meta className="cardBodyStyle"
                                    title={<Avatar  src={`
                                    ${item.Profile_Picture ? 'data:image/png;base64,' + new Buffer.from(item.Profile_Picture, 'binary')
                                    .toString('base64') : ''}`} alt='profile' />}
                                />
                                <h2> {idx+1} </h2>
                                <h3> {item.Team_Name} </h3>
                                <p1 > {item.steps} </p1>
                                <br />
                                <p2> Steps </p2>
                            </Card>
                        
                            </Col>
                                ) ;
                            })
                        }               
				</Row>
			</div>
		    </div>
            </div>
            <div>
                <Col type = "flex" gutter={24} justify = "center">
                <List
                    itemLayout="horizontal"
                    dataSource={data2}
                    
                    renderItem={(item,idx) => (
       
      
        
        
	<div className = "Remaining" bottom='5rem' position='relative' justify = "center" textAlign ="center" color="#ffffff">
        {/* <Space direction = "horizontal" align="center"> */}
        {/* <br/> */}
        
       <p style = {{bottom:'-4rem',left:'-2rem',position:'relative', fontSize:'2.5vh', color :'#595959'}}> {idx+4} </p>
      <Card  

       style={{ justify:"center", textAlign:"left",boxShadow: "5px 8px 24px 5px rgba(208,216,243,0.6)", borderRadius: "50px", height : "8vh", width:'40vw', justifyContent:'center', backgroundColor:'#005bbb', color : '#ffffff'}}>
        
        <List.Item >
         {/* bottom='5rem' position='relative' font-family="sans-serif" font-weight= "bolder" color="#ffffff"  justify="center" textAlign= "center" extra = {`${item.Steps} Steps`}> */}
        <div className = "bg2">
           
        </div>
        <List.Item.Meta
        
          avatar={<Avatar style ={{bottom:'1.5rem',position:'relative'}}  src={`
                            ${item.Profile_Picture ? 'data:image/png;base64,' + new Buffer.from(item.Profile_Picture, 'binary')
                                  .toString('base64') : ''}`} alt='profile' />}
          title ={<p style = {{bottom:'1.5rem',position:'relative',fontSize:'2.5vh'}}>{item.Team_Name}</p>}
          description = {<p3 style = {{bottom:'4rem',right: '-20rem',position:'relative'}}>{item.steps} Steps</p3>}
        //   subtitle = {item.Steps}
        />
         
        
        {/* <div className = "bg2"></div> */}
        </List.Item>
      
        </Card>
        {/* </Space> */}
        </div>
	
        
          
      
      
    )}
  />               
				</Col>
			</div>       

             </div>
                
                     }
                    </div>
                        }
                </div>                
            )
        }
    
}
export default Positionalayout    

  

// import React, { useState } from 'react';
// import 'antd/dist/antd.css';
// import './Top3cards.css';
// import { Card, Col, Row , Avatar} from 'antd';
// import axios from 'axios';

// const { Meta} = Card;

// export default class top3cards extends React.Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       top3: [],
//       remain7 : []
      
//     }
    
//   }
  
//   componentWillMount(){

//      const pdf = localStorage.getItem('top3cc') 

//      if(!pdf){
//        console.log("in if")
//        this.gettop3cards()

//      }
//        else{
//          console.log(JSON.parse(localStorage.getItem('top3cc')))
//          this.setState({
//           top3 : JSON.parse(localStorage.getItem('top3cc'))
//          })
         
//          console.log(this.top3)
//        }
//    }

//    gettop3cards() {
//     console.log("in top3 ")
//       axios.get('/gettop3cards', {})    
//       .then(response =>{
//         console.log(response.data);
//         this.setState({
//           top3 : response.data.rows
//          })

//           localStorage.setItem('top3cc', JSON.stringify(response.data.rows))
         
//           })
          
          
//               .catch((error) => {
//                   console.log("error", error)
//               })
  
//       }


// render(){
//   console.log(this.state.top3)
//   let x = this.state.top3 && this.state.top3.map((y,idx) => {
//     return (
//       <Col   span={8}>
//       <Card bordered={true}  style={{ textAlign:"center", boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)", borderRadius: "12px",overflow: "hidden",textOverflow: "ellipsis", maxWidth: "200px", Height: "100px"}} >
//          <Meta className="cardBodyStyle"
//             title={<Avatar src={y.Profile_Picture}/>}
//          />
//          <h2> {idx+1} </h2>
//          <h3 justify = "left"> {y.Full_Name} </h3>
//          <p1 style = {{overflow: "hidden" ,textOverflow:"ellipsis"}}> {y.Steps}
//       </p1>
//           <br />
//           <p2> Steps </p2>
//      </Card>
//      </Col>
//     )
//   }
//     )

//   return(
//     <div className="Cards">
//         <h1> INDIVIDUAL LEADERBOARD </h1>
//     <div className="CardBody">
    
//         <Row type = "flex" gutter={24} justify = "center">
       
//         {x}
        
//         </Row>
//      </div>
//      </div>
  
//   )
// }

// }

