import React from 'react';
import axios from 'axios';
import Noteam from './noTeam'
import Team from './team'
class Teams extends React.Component {
    constructor(props){
      super(props);
      this.state={
        data:[],
        loading:true
      };
    };

componentDidMount() {
      var x = localStorage.getItem('user');
      var y = JSON.parse(x).results[0].User_ID
      //console.log(y)
        //axios.get(`/teamcheck/${y}`)    
        axios.get("/teamcheck/100")
      .then(response =>{
          const data=response.data;
          console.log(data)
        //   var imageURL =
        //   data.Profile_Picture ? 'data:image/png;base64,' 
        //                 + new Buffer.from(data.Profile_Picture, 'binary').toString('base64') : '';
        // console.log(data[0].Profile_Picture)             
        // console.log(imageURL) 
        //   data.forEach(function(item, i) {if (item === data.Profile_Picture) data.Profile_Picture = imageURL; });

        //   console.log(data)
         
            this.setState({data:data,
            loading:false })
        })
        .catch(error => this.setState({ error }));
    }

        render(){
            const data =this.state.data
            const loading = this.state.loading
            return (
                <div>
                    {loading ? <p>Loading Please wait ....</p> :
                    <div>
                {data === undefined || data.length === 0 ? <Noteam/> :
                  <Team key={data.Email} data={data}>
                  
                  </Team>
                } 
            
                  </div>
                  }
                  </div>
            )
        }
    }

export default Teams

