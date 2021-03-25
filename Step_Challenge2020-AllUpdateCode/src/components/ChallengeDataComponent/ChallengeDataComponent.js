import React, { Component } from "react";
import { Row, Card, Col, Tooltip, Button, Input,Select,Descriptions,Popconfirm, message ,Skeleton, Avatar} from 'antd';
import axios from 'axios';
import { Modal, Typography,Space } from 'antd';
import moment from 'moment'
import {RightOutlined  ,EditOutlined} from '@ant-design/icons';

 
import { 
    Link,withRouter
} from 'react-router-dom';
// import 'antd/dist/antd.css';

// import Form from "antd/lib/form/Form";
const { Text } = Typography;
const { Option } = Select;
const { Meta } = Card;
//  const [form] = Form.useForm()
const backup_data = { AddressLine1: "",
AddressLine2 : "",
City: "",
State: "",
ZipCode : "",
Contact : "",
UBAffiliation : "",}
var userid = ""
var challengeid =""
 class ChallengeDataComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            dummy: "",
            // CurrentChallenges: [{}],
            // CompletedChallenges:[{}
            // ],
            // FutureChallenges :[{}],
            CurrentChallenges: [{
                Challenge_ID :"",
                Challenge_Name : "",
                Description : ""
            }
            ],
            CompletedChallenges:[{
                Challenge_ID :"",
                Challenge_Name : "",
                Description : ""
            }],
            FutureChallenges :[{
                Challenge_ID :"",
                Challenge_Name : "",
                Description : "",
                End_Date: "",
                Start_Date:""
            }],
            
            cdata: [],
            AddressLine1: "",
            AddressLine2 : "",
            City: "",
            State: "",
            ZipCode : "",
            Contact : "",
            UBAffiliation : "",
            registration_errors : "",
            hasError:"",
            validationError : false,
            vEMessage : "",
            vEMessageCity : "",
            vEMessageState : "",
            vEMessageZipCode : "",
            vEMessageContact : "",
            clickedit : false,
            loading1 : true
        
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.validate = this.validate.bind(this)
        this.clickEdit = this.clickEdit.bind(this)
        // this.confirmEditSave = this.confirmEditSave.bind(this)
        this.cancelEditSave = this.cancelEditSave.bind(this)
        this.getID = this.getID.bind(this)
       
    }
    state = {
        loading: false,
        visible: false,
      };
      getID = (x) =>{
        console.log("jdj")
        localStorage.setItem("challengeID",x)
      }
      showModal = (t) => {
          console.log(t)
          localStorage.setItem('challengeID', t)
        var x = JSON.parse(localStorage.getItem('user'))
        //console.log(x.results[0])
        this.setState({
          visible: true,
          clickedit : false,
          validationError : false,
            vEMessage : "",
            vEMessageCity : "",
            vEMessageState : "",
            vEMessageZipCode : "",
            vEMessageContact : "",
        
        });
        this.setState({
            AddressLine1: x.results[0].Address_Line1,
            AddressLine2 : x.results[0].Address_Line2,
            City: x.results[0].City,
            State: x.results[0].State,
            ZipCode : x.results[0].ZipCode,
            Contact : x.results[0].Contact,
            UBAffiliation : x.results[0].UBAffiliation,
        })
        challengeid = t
        
        //console.log(x)
        //console.log(challengeid);
      };
      handleChange(event){
          console.log(event.target.name)
          if(event.target.name === "AddressLine1"){
              this.setState({
                  validationError : false,
                  vEMessage : ""
              })
          }
          if(event.target.name === "City"){
            this.setState({
                validationError : false,
                vEMessageCity : ""
            })
        }
        if(event.target.name === "State"){
            this.setState({
                validationError : false,
                vEMessageState : ""
            })
        }
        if(event.target.name === "ZipCode"){
            this.setState({
                validationError : false,
                vEMessageZipCode : ""
            })
        }
        if(event.target.name === "Contact"){
            this.setState({
                validationError : false,
                vEMessageContact : ""
            })
        }
        this.setState({
            [event.target.name]:event.target.value,
            
    
        })
      }
      clickEdit(){
          this.setState({
            clickedit : true,
            

          })
          backup_data.AddressLine1 = this.state.AddressLine1
          backup_data.AddressLine2 = this.state.AddressLine2
          backup_data.City = this.state.City
          backup_data.State = this.state.State
          backup_data.ZipCode = this.state.ZipCode
          backup_data.Contact = this.state.Contact
          backup_data.UBAffiliation = this.state.UBAffiliation
      }
    //   confirmEditSave(){
        
    //       this.setState({
    //           clickedit : false
    //       })
    //       backup_data.AddressLine1 = this.state.AddressLine1
    //       backup_data.AddressLine2 = this.state.AddressLine2
    //       backup_data.City = this.state.City
    //       backup_data.State = this.state.State
    //       backup_data.ZipCode = this.state.ZipCode
    //       backup_data.Contact = this.state.Contact
    //       backup_data.UBAffiliation = this.state.UBAffiliation
    //       message.success("Successfully modifies click on register to register this challenge")

    //   }
      cancelEditSave(){
        this.setState({
            clickedit : false
        })
        this.setState({
            AddressLine1 : backup_data.AddressLine1,
            AddressLine2: backup_data.AddressLine2,
            City : backup_data.City,
            State : backup_data.State,
            ZipCode : backup_data.ZipCode,
            Contact : backup_data.Contact,
            UBAffiliation : backup_data.UBAffiliation,
        })
        message.success("Canceled the edit")
      }

    
      validate(){
         this.setState({
             validationError : false
         })
        //console.log(this.state.AddressLine1=== "")
        if(this.state.AddressLine1=== ""){
            
            // this.setState({
            //   validationError : true,
            //   vEMessage : "Address Line1 cannot be empty"
            // })
            this.state.validationError = true
            this.state.vEMessage = "Address Line1 cannot be empty"
        }
        if(this.state.City === ""){
            // this.setState({
            //   validationError : true,
            //   vEMessageCity : "City cannot be empty"
            // })
            this.state.validationError = true
            this.state.vEMessageCity = "City cannot be empty"
        }
        if(this.state.State === ""){
            // this.setState({
            //   validationError : true,
            //   vEMessageState :"State cannot be empty"
            // })
            this.state.validationError = true
            this.state.vEMessageState = "State cannot be empty"
        }
        if(this.state.ZipCode === ""){
            // this.setState({
            //   validationError : true,
            //   vEMessageZipCode : "ZipCode cannot be empty"
            // })
            this.state.validationError = true
            this.state.vEMessageZipCode= "ZipCode cannot be empty"
        }
        else if(!(/^\d+$/.test(this.state.ZipCode))){
            // this.setState({
            //     validationError : true,
            //     vEMessage : "ZipCode should only contain integers"
            //   })
            console.log(this.state.ZipCode.length)
            this.state.validationError = true
            this.state.vEMessageZipCode = "ZipCode should only contain integers"
        }
        else if(this.state.ZipCode.length !== 5){
            this.state.validationError = true
            this.state.vEMessageZipCode = "ZipCode should only contain 5 integers"

        }
        if(this.state.Contact === ""){
            // this.setState({
            //   validationError : true,
            //   vEMessageContact : "Contact cannot be empty"
            // })
            this.state.validationError = true
            this.state.vEMessageContact = "Contact cannot be empty"
        }
        else if(!(/^\d+$/.test(this.state.Contact))){
            // this.setState({
            //     validationError : true,
            //     vEMessage : "Contact should only contain integers"
            //   })
            this.state.validationError = true
            this.state.vEMessageContact = "Contact should only contain integers"
        }
        else if(this.state.Contact.length !== 10){
            this.state.validationError = true
            this.state.vEMessageContact = "Contact should only contain 10 integers"

        }

        if(this.state.validationError)
            return false
        
        return true
      }

      handleOk(e){
        e.preventDefault();
        const {
            AddressLine1,
            AddressLine2,
            City,
            State,
            ZipCode,
            Contact,
            UBAffiliation,
            // registration_errors,
            hasError,
        } = this.state
        const isvalid = this.validate()
        console.log(isvalid)
        if(isvalid){


            axios.post("/RegisterToChallenge",{
                
                Data:{
                    user_id : userid,
                    challenge_id : challengeid,
                    AddressLine1: AddressLine1,
                    AddressLine2 : AddressLine2,
                    City: City,
                    State: State,
                    ZipCode : ZipCode,
                    Contact : Contact,
                    UBAffiliation : UBAffiliation,
                }
            }).then(response =>{
                if(response.data.code===200){
                    console.log("Success")
                    this.setState({
                        hasError : false
                    })
                    var y = JSON.parse(localStorage.getItem('user'))
                    
                    y.results[0].Address_Line1 = AddressLine1
                    y.results[0].Address_Line2 = AddressLine2
                    y.results[0].City = City
                    y.results[0].State = State
                    y.results[0].ZipCode = ZipCode
                    y.results[0].Contact = Contact
                    localStorage.setItem('user',JSON.stringify(y))
                    console.log(y.results)
                }
                else{
                    console.log("failed")
                    this.setState({
                        hasError:true,
                        registration_errors : "Error Occured please try again after sometime"
                    })
                }
            })
            .catch(error =>{
                console.log(error)
            })
            this.setState({ loading: true });
            
            setTimeout(() => {
              this.setState({ loading: false, visible: false });
              if(!hasError){
                this.props.history.push("/nav/Dashboard")
              }
              
    
            }, 3000);
            



        }
        else{
            this.setState({
                visible :true
            })
        }
        
      };

      handleCancel = () => {
        this.setState({ visible: false });
      };
    
    
    
    componentWillMount(){
        const ischallengeData = localStorage.getItem('challengeData')
        var obj = JSON.parse(localStorage.getItem('user'))
        userid = obj.results[0].User_ID
        
        
          this.getChallengeData();
          setTimeout(() => {
            this.setState({ loading1: false});
            
            },3000);
      
            
            // var x = JSON.parse(localStorage.getItem('challengeData'))
            // console.log(x.CompletedChallenges)
            //for(var z in x.CompletedChallenges)
            //this.CompletedChallenges.push(x.CompletedChallenges[z]) 
            //this.CompletedChallenges = x.CompletedChallenges
            //this.FutureChallenges = x.FutureChallenges
            //this.CurrentChallenges = x.CurrentChallenges
            //console.log(this.CompletedChallenges)
        
    }

    getChallengeData(){
        axios.get("/getChallengeData", {

            params:{
                user_id : userid,
           } 
            
        }).then(response => {
          if(response.data.code === 200){
              //console.log(response.data.CurrentChallenges)
            localStorage.setItem('challengeData',JSON.stringify(response.data))
            //var x = JSON.parse(localStorage.getItem('challengeData'))
                this.setState({
                    CurrentChallenges : response.data.CurrentChallenges,
                    CompletedChallenges: response.data.CompletedChallenges,
                    FutureChallenges : response.data.FutureChallenges
                })
            //   this.CurrentChallenges = response.data.CurrentChallenges;
            //   this.CompletedChallenges = x.CompletedChallenges;
            //   this.FutureChallenges = x.FutureChallenges;
            //   console.log("current challenge" )
            //   console.log(this.CurrentChallenges)
          }
        }).catch(error => {
            console.log("error occured",error);
        })
    }
    
    
    render(){
        const { visible, loading } = this.state;

       
        let CurrentChallengeCard = this.state.CurrentChallenges && this.state.CurrentChallenges.map((cdata) =>{
            return(
                <div >
                <Col span = {12}>
                <Card title= {cdata.Challenge_Name} bordered={false} key = {cdata.Challenge_ID} loading = {this.state.loading1}
                style={{marginTop: '1rem', width: '25rem' ,minHeight: 250,borderRadius:'2rem',
                marginBottom : '2rem',backgroundColor : '#f3f7f7',marginLeft : '3rem',marginRight:'3rem',
                boxShadow:"0 6px 16px 0 rgba(0,0,0,.2)",borderColor : "black"}} hoverable>
                   
                <Text type = "secondary">Description</Text>
                <Tooltip title = {cdata.Description}>
                <Typography.Paragraph ellipsis = {{rows: 4}}> 
                {cdata.Description}
        

                    </Typography.Paragraph>
                    </Tooltip>
                    <div style = {{display: "flex", justify: "space-around"}}>
                        <div >
                        <Text type = "secondary">Opened on</Text>
                        <Typography>{moment(cdata.Start_Date).format('Do MMMM YYYY')}</Typography>
                         </div>
                         <div>
                             {cdata.isEnrolled === false?
                             (<Button type="card-button-" name = {cdata.Challenge_ID} onClick={() => this.showModal(cdata.Challenge_ID)}>Register</Button> ):
                             (<div></div>)}
                        
                        <Modal width={1000}
                        visible={visible}
                        title="Title"
                        
                        footer={[
                        <Button key="back" onClick={this.handleCancel}>
                        Cancel
                        </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}
                         >
                        Register
                      </Button>,
                       ]}
                     >
                        
                     {this.state.clickedit === true ? 
                         (
                         <div>
                             
                            <Space direction = "vertical">  
                            <Popconfirm
                            title="Are you sure cancel this edit?"
                            onConfirm={this.cancelEditSave}
                           
                            okText="Yes"
                            cancelText="No"
                          >
                            <a href = '#'>Cancel</a>
                            </Popconfirm>
                            {/* <Form> */}
                           
                            <div style = {{display:'flex', flexDirection:'row' , justify : 'space-between' }}>
                            
                           <div>
                          
                           <Text strong style = {{marginLeft: "2%"}}>Address Line No1</Text>
                           
                           <Input name ="AddressLine1"
                           placeholder="Address Line No1" value = {this.state.AddressLine1}
                           
                          
                           style={{ width: "auto",minWidth:'20rem' ,marginLeft: "2%" }} 
                           onChange = {this.handleChange}  />
                           
                           <div style={{ fontSize: 12, color: "red" ,marginLeft: "2%" }}>
                            {this.state.vEMessage}
                           </div>
                            </div>
                            
                            <div>
                            
                            <Text strong style = {{marginLeft: "2%"}}>Address Line No2</Text>
                            <Input name ="AddressLine2"
                            placeholder="Address Line No2" value = {this.state.AddressLine2}
                            
                             style={{ width: "auto",minWidth:'20rem' ,marginLeft: "2%" }}
                               onChange = {this.handleChange} required/>
                               
                               
                            </div>
                            
                            </div>
                            <div style = {{display:'flex', flexDirection:'row' , justify : 'space-around' }}>
                            <div>
                            <Text strong>City</Text>
                            <Input name ="City"
                            placeholder="Please Enter City" value = {this.state.City}
                            
                            style={{ marginLeft: "2%" }} onChange = {this.handleChange}
                            />
                            <div style={{ fontSize: 12, color: "red" ,marginLeft: "2%" }}>
                            {this.state.vEMessageCity}
                            </div>
                            </div>
                            <div>
                           <Text strong>State</Text>
                            <Input name ="State"
                            placeholder="Please Enter State" value = {this.state.State}
                            
                             style={{ marginLeft: "2%" }} onChange = {this.handleChange}
                            />
                            <div style={{ fontSize: 12, color: "red" ,marginLeft: "2%" }}>
                            {this.state.vEMessageState}
                           </div>
                            </div>
                            <div>
                            <Text strong>ZipCode</Text>
                            <Input name ="ZipCode" 
                            placeholder="Please Enter ZipCode" value = {this.state.ZipCode}
                            
                             style={{ marginLeft: "2%" }} onChange = {this.handleChange}
                            />
                            <div style={{ fontSize: 12, color: "red" ,marginLeft: "2%" }}>
                            {this.state.vEMessageZipCode}
                           </div>
                            </div>
                            </div>
                            
                            <div style = {{display:'flex', flexDirection:'row' , justify : 'space-between' }}>
                            <div>
                            <Text strong>Contact</Text>
                            <Input name ="Contact"
                            placeholder="Please Enter Contact no" value = {this.state.Contact}
                            
                             style={{ marginLeft: "2%" }} onChange = {this.handleChange}
                            />
                            <div style={{ fontSize: 12, color: "red" ,marginLeft: "2%" }}>
                            {this.state.vEMessageContact}
                           </div>
                            </div>
                            <div>
                           <Text strong>UB Affiliation</Text>
                           <Select name="UBAffiliation" placeholder="Please select a category"  
                           value = {this.state.UBAffiliation}style={{ marginLeft: "2%" }}>
                             <Option value="UB Student">UB Student</Option>
                             <Option value="Community Member">Community Member</Option>
                             <Option value="UB Faculty">UB Faculty</Option>
                             <Option value = "UB Staff">UB Staff</Option>"
                             <Option value="Alumni">Alumni</Option>
                           </Select>
                           </div>
                           </div>
                           {/* </Form> */}
                           </Space>
                           
                           </div>
                          )
                        :
                         (<div>
                              <Space direction = "vertical">  
                            <div className = "box-left">
                            <EditOutlined  onClick = {this.clickEdit}/>
                            </div>
                            <Descriptions title="User Info" >
                        <Descriptions.Item label="Address Line No1">{this.state.AddressLine1}</Descriptions.Item>
                        <Descriptions.Item label="Address Line No2">{this.state.AddressLine2}</Descriptions.Item>
                        <Descriptions.Item label="City">{this.state.City}</Descriptions.Item>
                        <Descriptions.Item label="State" span={2}>
                        {this.state.State}
                        </Descriptions.Item>
                        <Descriptions.Item label="ZipCode">{this.state.ZipCode}</Descriptions.Item>
                        <Descriptions.Item label="Contact">{this.state.Contact}</Descriptions.Item>
                        <Descriptions.Item label="Affiliation">{this.state.UBAffiliation}</Descriptions.Item>
                        </Descriptions>
                            </Space>
                            
                         </div>) }
                         
                         </Modal>
                         {cdata.isEnrolled === true ?
                        (<Link to = "/nav"> 
                        <RightOutlined onClick = {() =>this.getID(cdata.Challenge_ID)}
                        />
                        </Link>) : ""}
                        </div>
                    </div> 
                </Card>
                </Col>
                </div>

            )
        })
        let FutureChallengeCard = this.state.FutureChallenges && this.state.FutureChallenges.map(cdata =>{
            return(
                <div >
                <Col span = {12}>
                <Card title= {cdata.Challenge_Name} bordered={true} loading = {this.state.loading1}
                style={{marginTop: '1rem', width: '25rem' ,minHeight: 250,borderRadius:'2rem',
                marginBottom : '2rem',backgroundColor : '#f3f7f7',marginLeft : '3rem',marginRight:'3rem'
                 ,boxShadow:"0 6px 16px 0 rgba(0,0,0,.2)"}} hoverable>
                     <Meta />
                   
                <Text type = "secondary">Description</Text>
                <Tooltip title = {cdata.Description}>
                <Typography.Paragraph ellipsis = {{rows: 4}} > 
                {cdata.Description}
       

                    </Typography.Paragraph>
                    </Tooltip>
                    <div style = {{display: "flex", justify: "space-around"}}>
                        <div>
                        <Text type = "secondary">Opens on</Text>
                        <Typography>{moment(cdata.Start_Date).format('Do MMMM YYYY')}</Typography>
                         </div>
                         <div>
                        <Button type="card-button-" onClick={() => this.showModal(cdata.Challenge_ID)}>Register</Button>  
                        
                        <Link to = "/nav/Dashboard"> 
                        <RightOutlined />
                        </Link>
                        </div>
                    </div> 
                   
                </Card>
                </Col>
                </div>
            )
        })
        let CompletedChallengeCard =  this.state.CompletedChallenges && this.state.CompletedChallenges.map(cdata =>{
            return(
                <div >
                <Col span = {12}>
                <Card title= {cdata.Challenge_Name} bordered={false} loading = {this.state.loading1}
                style={{marginTop: '1rem', width: '25rem' ,minHeight: 250,borderRadius:'2rem',
                marginBottom : '2rem',backgroundColor : '#f3f7f7',marginLeft : '3rem',marginRight:'3rem'
                ,boxShadow:"0 6px 16px 0 rgba(0,0,0,.2)" ,boxSizing : "border-box" }} hoverable>
                   
          
                <Text type = "secondary">Description</Text>
                <Tooltip  placement="top"  title = {cdata.Description}>
                <Typography.Paragraph ellipsis = {{rows: 4}}> 
                {cdata.Description}
        
                    </Typography.Paragraph>
                    </Tooltip>
                    <div style = {{display: "flex", justify: "space-around"}}>
                        <div>
                        <Text type = "secondary">Completed on</Text>
                        <Typography>{moment(cdata.End_Date).format('Do MMMM YYYY')}</Typography>
                         </div>
                         <div>
                          
                        
                        <Link to = "/DashboardPage"> 
                        </Link>
                        </div>
                    </div> 
                   
                </Card>
                </Col>
                </div>
            )
        })
        
        return(
            <div>
                <div>
                <Typography.Text strong style = {{ fontSize:'20px',  marginLeft: '2rem',paddingLeft:'2rem'}}>Current Challenges</Typography.Text>
                <Row type = 'flex' justify="space-between"
                   align="top" gutter={24}>
                {CurrentChallengeCard} 
                </Row>
                </div>  
                <div>
                <Typography.Text strong style = {{ fontSize:'20px',  marginLeft: '2rem',paddingLeft:'2rem'}}>Future Challenges</Typography.Text>
                <Row type = 'flex' justify="space-between"
                   align="top" gutter={24}>
                 {FutureChallengeCard} 
                 </Row>
                </div> 
                <div>
                    
                <Typography.Text strong style = {{ fontSize:'20px',  marginLeft: '2rem',paddingLeft:'2rem'}}>Completed Challenges</Typography.Text>
                   <Row type = 'flex' justify="space-between"
                   align="top" gutter={24}>
                   {CompletedChallengeCard}
                   </Row>
                </div> 
            </div>
        )
    }



}
export default withRouter(ChallengeDataComponent)