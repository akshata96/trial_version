import React, { Component } from "react";
import axios from 'axios'
import {Modal,Typography, Space,Input} from 'antd';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
// import FooterComponent from '../../components/FooterComponent/FooterComponent'
const { Text, Link } = Typography;

export default class TotalStepCount extends Component {

    constructor(props){
        super(props);
        this.state = {
            totalStepCount : "",
            user_id : "",
            Challenge_ID : "",
            showMGM: false,
            MonthlyGoal:0,
            MonthlyGoalfromDB:0,
            validationError:"",
            VMGMessage:""
        }
        this.showMonthlyGoalModal = this.showMonthlyGoalModal.bind(this)
        this.onChange = this.onChange.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)

    }

    onChange(event){
        this.setState({
            [event.target.name]:event.target.value,
            validationError:"",
            validationError:false
        })

        //console.log(this.state.MonthlyGoal)
    }
    validate = () =>{

        this.setState({
            validationError : false
        })
        if(this.state.MonthlyGoal === ""){
            
            this.state.validationError = true
            this.state.VMGMessage = "Goal cannot be empty"
        }
        else if(!(/^\d+$/.test(this.state.MonthlyGoal))){
            
            //console.log(this.state.ZipCode.length)
            this.state.validationError = true
            this.state.VMGMessage = "Goal should only contain integers"
        }
        if(this.state.validationError)
            return false
        
        return true
    }



    handleOk(){

        const isvalid = this.validate()
        if(isvalid){

            var user = JSON.parse(localStorage.getItem('user')).results[0].User_ID
            var challengeID = localStorage.getItem('challengeID')
            axios.post("/postMonthlyGoal", {
                data:{
                    "challengeID": challengeID,
                    "user_id": user,
                    "MonthlyGoal":this.state.MonthlyGoal
                }
            }).then(response =>{
                if(response.data.code === 200){
                    this.setState({
                        showMGM : false
                    })
                    console.log("Success");
                    window.location.reload()

                }
                else{
                    console.log("error");
                }
            }).catch(error =>{
                console.log(error)
            })
       
    }
    }
    handleCancel(){
        this.setState({
            showMGM:false
        })
    }

    showMonthlyGoalModal(){
        this.setState({
            VMGMessage:"",
            validationError:false,
            showMGM: true
        })
    }

    componentWillMount(){

        axios.get("/getTotalStepCount",{
            params:{
                user_id : JSON.parse(localStorage.getItem('user')).results[0].User_ID,
                Challenge_ID : localStorage.getItem("challengeID")
            }
        }).then(response =>{
            if(response.data.code === 200){
                this.setState({
                    totalStepCount : response.data.totalStepCount,
                    user_id : response.data.user_id,
                    Challenge_ID : response.data.Challenge_ID,
                    MonthlyGoalfromDB:response.data.MonthlyGoal
                })
                console.log(this.state.MonthlyGoalfromDB)
                var xf = this.state.totalStepCount
                //console.log(xf.length)
                console.log("success")
            }
            else{
                console.log("failed")
            }
        }).catch(error =>{
            console.log(error)
        })
    }

    render() {
        return(
            
            
            <div  >
                <div style = {{display:"inline",flexDirection:"row"}}>
                <div>
        <CircularProgressbarWithChildren value={this.state.MonthlyGoalfromDB === 0 ? 100 : Math.round((this.state.totalStepCount/this.state.MonthlyGoalfromDB)*100) } width = "200px">
        <div style={{ fontSize: 12, marginTop: -5 }}>
            {   this.state.totalStepCount < "1000000"  ? ( <strong style ={{fontSize:"30px"}}>{this.state.totalStepCount}</strong> )
            :(<strong style ={{fontSize:"30px"}}>{Math.floor((this.state.totalStepCount/"1000000")*100)/100}M</strong>)}
        <label style ={{fontSize:"1rem"}}>Steps</label>
        </div>
        </CircularProgressbarWithChildren>
        <a style={{textAlign:"center",position:"relative" ,left:"20%"}} onClick = {this.showMonthlyGoalModal}> Setup Monthly Goal</a>
        </div>
        </div>
        <Modal
          title="Basic Modal"
          visible={this.state.showMGM}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
           <Space direction="vertical">
           <Text strong>Please Enter a steps goal </Text>
           <Input name = "MonthlyGoal" size="large"  min={1} max={100000}  onChange={this.onChange} />
           <div style={{ fontSize: 12, color: "red" ,marginLeft: "2%" }}>
                            {this.state.VMGMessage}
                           </div>
          
          </Space>
        </Modal>
  </div>
           
            
        )
    }
    
    
    }
    