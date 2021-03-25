import React, { Component } from "react";
import axios from 'axios'
import {Progress, Modal,Space,Input,Typography, Button} from 'antd';

import './DailyGoal.css'
const{ Text } = Typography;
export default class DailyGoal extends Component{

    constructor(props){
        super(props);
        this.state = {
            showDGM: false,
            vEforDaily: false,
            VDGMessage:"",
        }
        this.showWeeklyGoalModal = this.showWeeklyGoalModal.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.onChange = this.onChange.bind(this)
    }


    handleOk(){
        const isValid = this.validate();
        if(isValid){
            var user = JSON.parse(localStorage.getItem('user')).results[0].User_ID
            var challengeID = localStorage.getItem('challengeID')
            axios.post("/postDailyGoal",{
                data:{
                    "user":user,
                    "challengeID":challengeID,
                    "DailyGoal":this.state.DailyGoal
                }
            }).then(response =>{
                if(response.data.code === 200){
                    console.log("success for dailygaol")
                    this.setState({
                        showDGM:false 
                    })
                }
                else{
                    console.log("error")
                }
            }).catch(error =>{
                console.log(error)
            })
            
        }
        
    }

    handleCancel(){
        this.setState({
            showDGM:false 
        })
    }
    onChange(event){
        console.log(event.target.name)
        this.setState({
            [event.target.name]:event.target.value,
            vEforDaily:false,
            VDGMessage:""
        })

    }


    validate = () =>{

        this.setState({
            vEforDaily : false
        })
        if(this.state.DailyGoal === ""){
            
            this.state.vEforDaily = true
            this.state.VDGMessage = "Goal cannot be empty"
        }
        else if(!(/^\d+$/.test(this.state.DailyGoal))){
            
            //console.log(this.state.ZipCode.length)
            this.state.vEforDaily = true
            this.state.VDGMessage = "Goal should only contain integers"
        }
        if(this.state.vEforDaily)
            return false
        
        return true
    }

    showWeeklyGoalModal(){
        this.setState({
            showDGM:true,
            DailyGoal:"",
            VDGMessage:"",
            vEforDaily:false, 
            user_id:"",
            DailyStepsCount:"",
            DailyGoalfromDB:"",
            challengeID:"",

        })
    }

    componentDidMount(){

        console.log("In DidMount dailygoal")

        axios.get("/getStepCountforday",{
            params:{
                "user_id" : JSON.parse(localStorage.getItem('user')).results[0].User_ID,
                "challengeID": localStorage.getItem('challengeID'),
            }
        }).then(response =>{
            if(response.data.code === 200){
                this.setState({
                    DailyStepsCount:response.data.DailyStepCount,
                    user_id:response.data.user_id,
                    DailyGoalfromDB:response.data.DailyGoal,
                    challengeID:response.data.Challenge_ID,
                })
                console.log("success")
                console.log(this.state.DailyStepsCount)
            }
            else if(response.data.code === 201){
                console.log("No records found")
                console.log(response.data)
            }
        }).catch(error =>{
            console.log(error)
        })
    }

    render(){
        return(
            <div>
                <Text strong style = {{}}>DailySteps</Text>
             <Progress
                strokeColor={{
                from: '#108ee9',
                to: '#87d068',
                }}
                percent={this.state.DailyGoalfromDB === 0? 100:Math.round((this.state.DailyStepsCount/this.state.DailyGoalfromDB)*100)}
                status="active"/>

                <a style={{textAlign:"center",position:"relative"}} onClick = {this.showWeeklyGoalModal}>Set up DailyGoal</a>
                <br/><br />
                <Text strong>To Enter Steps</Text>
                {/* <Button className = "enterstepsindaily">Enter Steps</Button> */}
                <Modal
                    title="Basic Modal"
                    visible={this.state.showDGM}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                <Space direction="vertical">
                <Text strong>Please Enter a daily steps goal </Text>
                <Input name = "DailyGoal" size="large"  onChange={this.onChange} />
                <div style={{ fontSize: 12, color: "red" ,marginLeft: "2%" }}>
                            {this.state.VDGMessage}
                           </div>
          
                </Space>
                </Modal>
                </div>
        )
    }

}