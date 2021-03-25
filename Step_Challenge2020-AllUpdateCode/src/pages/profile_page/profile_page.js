import React from 'react'
import axios  from 'axios';

// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import './profile_page.css'

import Userview from '../../components/UserView/Userview';

class Profile extends React.Component {
    constructor(props){
      super(props);
      this.state={
        users:[],
        pic:'',
        isLoad:false,
        errors: null
      };
    };
  
        
  handleclik = () =>{
    axios.get('/profile')    
    .then(response =>{
        const data=response.data;
        var imageURL = 'data:image/png;base64,' + new Buffer.from(data[0].Profile_Picture, 'binary').toString('base64')
        console.log(data[0])
          this.setState({
            users:data,
            pic:imageURL, 
            isLoading:true
          })
        })
        .catch(error => this.setState({ error }));
  
      }

      
      render(){ 
        const {isLoading , users,pic } = this.state 
        
    return (
        
    <div className="Profile">
        <button onClick ={this.handleclik}></button>

        {isLoading ? (<Userview key={users[0].User_ID} pic={pic} users={users}></Userview>):(<div><p>Loading..</p></div>)}
        
    </div>
    )
} 
}
export default Profile