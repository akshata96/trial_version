import React from "react";
import axios from 'axios'
import { Card ,Result,Button} from 'antd';
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend ,ResponsiveContainer} from 'recharts';
class LineRechartComponent extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            DataForCharts : [],
            results: false
        }
    }
    componentWillMount(){
        axios.get('/GetDataforChart', {
            params :{
                user_id : JSON.parse(localStorage.getItem('user')).results[0].User_ID,
                challenge_id : localStorage.getItem('challengeID')
            }
        }).then(response =>{
            if(response.data.code === 200){
                console.log("Success")
                //console.log(response)
                this.setState({
                   DataForCharts : response.data.results,
                   results: true
                })
                console.log(this.state.DataForCharts.length)
            }
            else if(response.data.code === 220){
                this.setState({
                    results: false
                })
                
            }
        }).catch(error =>{
            console.log(error)
        })
    }

    
    render() {
        return (
            <div>
                { this.state.results === true ? 
                (<Card style={{ width: "80%",marginLeft:"10rem",marginBottom:"3rem" }} hoverable>
                <ResponsiveContainer width = "100%" height ={300}>
            <LineChart width={730} height={250} data={this.state.DataForCharts}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid  strokeDasharray = "3,1"/>
                <XAxis dataKey="Steps_Date" />
                <YAxis />
                <Tooltip cursor = {false}/>
                <Legend />
                <Line type="monotone" dataKey="CountOnDay" stroke="#0095FF" />
                
            </LineChart>
            </ResponsiveContainer>
            </Card>)
                :
                 (
                    <Result
                    status="warning"
                    title="There is no progress to show yet."
                    subTitle = "Click on button to provide Steps"
                    extra={
                      <Button type="primary" key="console">
                        Enter Steps
                      </Button>
                    }
                  />
                 )}
            
            
            </div>
            
            
        )
    };
}

export default LineRechartComponent;