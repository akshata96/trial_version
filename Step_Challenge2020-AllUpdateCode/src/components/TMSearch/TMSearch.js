import { Input,List,Checkbox  } from 'antd';
import axios from 'axios';
import React,{ Component} from 'react'

const { Search } = Input;
var mockData = []
export default class TMSearch extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            searchemail:"",
            Results:[],
            resultsfound:false,
            errorfound : false
        }
        this.onSearch = this.onSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handlecheck = this.handlecheck.bind(this)
    }


    handlecheck(v){
        this.state.Results.push(v)
        console.log(this.state.Results)
        
    }
    onSearch(){
        //console.log("fkkef");
       // var u = localStorage.getItem("user")
        //var user_id = JSON.parse(u).results[0].User_ID
        this.setState({
            resultsfound:false,
            errorfound:false
        })
        var se = this.state.searchemail
        axios.get("/SearchByEMTeam", {
            params:{
                "Email": se,
                "Challenge_ID":localStorage.getItem('challengeID')
            }
        }).then(response =>{
            if(response.data.code === 200){
                mockData = []
                this.setState({
                    
                    resultsfound : true
                })
                for(var x in response.data.results){
                    mockData.push({
                        "Email":response.data.results[x].Email,
                        "key":x,
                        "User_ID":response.data.results[x].User_ID
                    })
                }
                
                console.log(this.state.Results)
            }
            else if(response.data.code === 201){
                //console.log("error")
                this.setState({
                    resultsfound:false
                })
            }
        }).catch(error =>{
            this.setState({
                errorfound : true
            })
            console.log(error)
        })

    }

    handleChange(event){
        this.setState({
            searchemail:event.target.value,
        })
        
        
    }
    render(){
        return(
            <div>
                    <br />
                    <Search name="searchemail" placeholder="Search by Email Address" allowClear onSearch={this.onSearch} onChange = {this.handleChange} enterButton />
                    <br />
            {this.state.resultsfound === true ?
            (<div style = {{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                <div>
                <List dataSource = {mockData}
                renderItem = {item =>(
                    <div style={{display:"inline"}}>
                    <List.Item>
                        <Checkbox  onChange= {() =>this.handlecheck(item)}></Checkbox>
                    </List.Item>
                    <List.Item>
                        <div>
                        {item.Email}
                        </div>
                    </List.Item>
                    </div>)
                }>
                    
                </List>
                </div>
                <div>
                <List dataSource = {this.state.Results}
                renderItem = {item =>(
                    <div style={{display:"inline"}}>
                    <List.Item>
                        <Checkbox  onChange= {() =>this.handlecheck(item)}></Checkbox>
                    </List.Item>
                    <List.Item>
                        <div>
                        {item.Email}
                        </div>
                    </List.Item>
                    </div>)
                }>
                    
                </List>
                    </div>
            </div>): ("")}
            </div>
        )
    }
}