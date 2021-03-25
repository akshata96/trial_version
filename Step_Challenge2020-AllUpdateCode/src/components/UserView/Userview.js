import React from 'react'
import { Card } from 'antd';
import './Userview.css'
import 'antd/dist/antd.css';



const Userview= (props)=>(

<div className="Profile">
          
        <Card
         style={{marginTop: 20}}
        >
            <img className='Profile_img'
                alt="Profile"
                src={props.pic} /> 
            <div className='Name'>
            
                <p>{props.users[0].First_Name}</p>
                <p>{props.users[0].Last_Name}</p>
            </div>
            <div className='profile_contents'>
                <p>Email : {props.users[0].Email}</p>
                <p>Affiliation : {props.users[0].Affiliation}</p>
            </div>
            
        </Card>
        <Card style={{ marginTop: 20}}>
            <div className='profile_contents'>
                
                <p>Address : {props.users[0].Address_Line1 + props.users[0].Address_Line2}</p>
                <p>City : {props.users[0].City}</p>
            </div>
            <div className='addrees2'>
                <p >State : {props.users[0].State}</p>
                <p >ZipCode : {props.users[0].ZipCode}</p>
            </div> 
        </Card>
        <Card style={{marginTop: 20}}>
            <h4>Participated events</h4>
        </Card>
    </div>
    )
 

export default Userview