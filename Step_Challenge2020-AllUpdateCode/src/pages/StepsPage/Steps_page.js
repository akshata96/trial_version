import React from 'react'
import axios from 'axios'
import 'antd/dist/antd.css'
import { DatePicker, Space} from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import moment from 'moment';
import './Steps_page.css';
import { Result } from 'antd';
import { Link, Router } from 'react-router-dom';
import { Modal } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons'

export default class Steps_page extends React.Component{
    constructor(props){
        super(props);
        var x = JSON.parse(localStorage.getItem('challengeID'));
        var y = JSON.parse(localStorage.getItem('user')).results[0].User_ID
        var today = new Date(),
        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        this.state={
            stepcount: "",
            selectdate:"",
            userId:y,
            challengeID:x,
            StepsDateTime:time,
            date_error:"",
            counterror:"",
            result_response:false
        }
        this.disabledDate=this.disabledDate.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange1 = this.handleChange1.bind(this)
    }
 
    bla(){
        console.log("hjedh")
        this.setState({
            visible:false
        })
        //this.props.history.push("/DashboardPage")
        
    }
     validate = () => {
        this.setState({
            validationError : false
        })
        
        if ((this.state.selectdate ===null) || (this.state.selectdate.length === 0)) {            
            this.state.validationError = true;
            this.state.date_error = "Please select the date";
          }

    
        if(this.state.stepcount === ""){
            this.state.validationError = true;
            this.state.counterror="Please enter the StepCount";
        }
        else{if (!(/^\d+$/.test(this.state.stepcount))) {   
            this.state.validationError = true;
            this.state.counterror = "Please enter valid steps count.";
        }
         }

        if(this.state.stepcount>40000){
           this.state.validationError = true;
            this.state.counterror = "Steps entered should be less than 40k.";
        }
        if(this.state.validationError)
            return false
        return true
     }

    handleSubmit(e){
        //e.preventDefault();
        const isValid = this.validate();   
        if(isValid){
            if(this.state.result_response===false){
            var a = this.state.stepcount
            var b =this.state.selectdate
            var c = this.state.userId
            var d = this.state.challengeID
            var f = this.state.StepsDateTime
            axios.post("/addsteps",{
             user:{
                "Steps":a,
                "Steps_Date":b,
                "Steps_User_fk_id":c,
                "Steps_Challenge_fk_ID":d,
                "Steps_DateTime":f               
            }
            }).then(response =>{
                if(response.data.code === 200){
                    console.log("Steps Entered Successfully",response) 
                    this.setState({result_response:true})
                    this.setState({date_error : ""})
                    this.setState({counterror :""})
                    this.setState({stepcount:""})
                    this.setState({selectdate:""})       
             }
                 else if(response.data.code === 401) {
                     console.log("Steps for the day had exceeded the limit")
                 }
                 else{
                     console.log("error")
                 }


        }).catch(error => {
            console.log("error occured",error);
        })
        }
    }
    }
    onClick1=(date)=>{
        this.setState({selectdate:(date)});
        this.setState({validationError : false});
        this.setState({result_response:false})
        this.setState({date_error : ""})
    }
    onClick=(event)=>{
        this.setState({stepcount:event.target.value});
        this.setState({validationError : false});
        this.setState({result_response:false})
        this.setState({counterror : ""})
    }
    handleChange2 = (date) =>{
        this.setState({selectdate:(date)});
        this.setState({validationError : false});
        this.setState({result_response:false})
        this.setState({date_error : ""})
    }
     handleChange1(event){
          this.setState({
              stepcount:event.target.value,
              validationError : false,
              result_response:false,
              counterror : ""
        
      })
      this.setState({
          [event.target.name]:event.target.value,
      })
     }

    
     disabledDate(current) {
        return current < moment().subtract(7, 'days') || current > moment().endOf('day');
      }

        

    render (){
        return(
        <div className ="Steps">
            <Space direction="vertical" >
                <div style={{ marginLeft:"50px",maxWidth:"50vw"}}>
                    <DatePicker selected={this.state.selectdate} 
                        disabledDate={this.disabledDate}
                        onClick={this.onClick1}
                        onChange={this.handleChange2}
                        style={{ Font: "Arial",fontSize: 16 ,overflow: "hidden", boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)", borderRadius: "10px", position:"relative",display:"flex"}}>
                    </DatePicker>
                    <div><p1>{this.state.date_error}</p1></div>
                    <br />
                    <Input name="stepsCount" 
                        placeholder="Enter Steps Count" 
                        onClick={this.onClick}
                        onChange={this.handleChange1}
                        style={{ Font: "Arial",fontSize: 16 ,overflow: "hidden", boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)", borderRadius: "10px",position:"relative",display:"flex", justifycontent: "space-evenly"}} >
                    </Input>
                    <div><p1>{this.state.counterror}</p1></div>
                    <br/>
                    <Button type="primary" 
                        onClick={this.handleSubmit} 
                        style={{ marginLeft: "40px", Font: "Arial",fontSize: 16 ,overflow: "hidden", boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)", borderRadius: "10px", position:"relative",display:"flex", justifycontent: "space-evenly",textAlign:"center"}}>
                        Submit 
                    </Button>
                </div>
            </Space>
            <br/>
            <br/>
            <br/>
        
            <div style={{maxWidth:'20vw', maxHeight:'20vh', textAlign:"center"}}>
                { this.state.result_response === true ? (
                    <Result style={{maxWidth:'20vw', maxHeight:'20vh', textAlign:"center"}}
                        status="success"
                        title="Successfully Entered Steps!"
                        extra={[
                        <Button type="primary"  key="console">
                        <Link to="/DashboardPage" >Go To Dashboard</Link>
                        </Button>
                    ]}
                    />
                ): ("")}
            </div>
        </div>

        

        )
     }
}
