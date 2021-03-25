import React from 'react'
import 'antd/dist/antd.css';
import { Input,Card } from 'antd';
import './Userview.css'
import axios from 'axios';

class Userview1 extends React.Component {
    constructor(props){
        super(props);
        this.state={
          users: {},
          first_name: '',
          last_name: '',
          pic:'',
          isLoad:false
        };
      };
    
          
    
      
      componentDidMount() {
        axios.get('http://localhost:9000/profile')    
      .then(response =>{
          const data=response.data;
          var imageURL =
          data[0].Profile_Picture ? 'data:image/png;base64,' + new Buffer.from(data[0].Profile_Picture, 'binary').toString('base64') : 'logo512.png'
          console.log(data[0])
            this.setState({
              users:data[0],
              first_name: data[0].First_Name,
              last_name: data[0].Last_Name,
              pic:imageURL, 
              isLoading:true
            })
          })
          .catch(error => this.setState({ error }));
  
      }
handleChange = (event) =>{
    console.log(this.state.users)
    this.setState({
        [event.target.name]: event.target.value
      });

}
onSubmitForm =() =>{
    console.log(this.state)
}

render() {
    const {isLoading ,users,pic, first_name,last_name } = this.state ;
    return (
       <div>    
    {isLoading ? <div>
            <div className="Profile">
            
            <Card
           style={{marginTop: 20}}
          >
       
            <Input type="image" alt="Profile" src={pic}  className={'Profile_img'} onChange={this.handleChange}/>
            
            <div className='Name'>
              <Input type="text" name="first_name" value={first_name}   onChange={this.handleChange}/>
              <Input type="text" name="last_name" value={last_name}  onChange={this.handleChange} />
            </div>
            <div className='profile_contents'>
              <Input type="text" name="Email" value={users.Email}  onChange={this.handleChange}/>
              <Input type="text" name="Affiliation" value={users.Affiliation}  onChange={this.handleChange} />
            </div>  
          </Card>
          <Card style={{ marginTop: 20}}>
              <div className='profile_contents'>
              <Input type="text" name="Address" value={users.Address_Line1 + users.Address_Line2}  onChange={this.handleChange}/>
              <Input type="text" name="City" value={users.City}  onChange={this.handleChange} />
              </div>
              <div className='addrees2'>
              <Input type="text" name="State" value={users.State}   onChange={this.handleChange}/>
              <Input type="text" name="Zipcode" value={users.ZipCode}   onChange={this.handleChange}/>
              </div> 
          </Card>
          <Card style={{marginTop: 20}}>
              <h4>Participated events</h4>
          </Card>
        <button onClick={this.onSubmitForm}>Submit</button>
        
        </div>
</div> :<div></div> }
    </div>
        
        )
}
}
export default Userview1