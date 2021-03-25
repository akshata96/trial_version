import React ,{Component} from 'react';
import { Input,List, Card,Avatar } from 'antd';
import axios from 'axios'

const { Search } = Input;


class Searchusers extends Component{
  constructor(){
    super();
    this.state={
    data:[],
    searchField:''
      
    };
  }
  componentDidMount() {
      var x = localStorage.getItem('challengeID')

    axios.get(`/searchUsers/${x}`)    
  .then(response =>{
      const data=response.data;
        console.log(data)
     
        this.setState({data:data
        })
    })
    .catch(error => this.setState({ error }));
}
  
  render()
  {
    const {data,searchField}=this.state;
    //const onSearch = eve => console.log(eve.target.value);
    const onSearch =eve=>this.setState({searchField:eve.target.value})
    const filtereddata=
    data.filter(data=>data.Name.toLowerCase().includes(searchField.toLowerCase()))
      return (
        <div >
          
            <h1>Search Users</h1>
            
                    <Search
                        placeholder="input search text"
                       style={{color:'black'}}
                       enterButton="Search"
                        
                        onChange={onSearch}
            />
            
            <List
                            grid={{
                            gutter: 10,
                            xs: 1,
                            sm: 2,
                            md: 3,
                            lg: 3,
                            xl: 3,
                            xxl: 3,
                            }}
                            dataSource={filtereddata}
                            renderItem={item => (
                            <List.Item>
                                
                                <Card hoverable
                                style={{marginTop: 20,height:'20vh',width:'25vw',borderRadius:'2vw'}}
                                extra={item.steps}
                                title={item.Name}
                                > 
                                     
                                        
                                        <div className='profile_contents'>
                                        <p>{item.Email}</p>
                                        <p>{item.Affiliation}</p>
                                    </div>
                                    
                                </Card>
                            </List.Item>
                            )}
                        />
          
        </div>
      );
    
  }
}

export default Searchusers;
