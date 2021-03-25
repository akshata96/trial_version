import React from 'react';
import axios from 'axios';
import { Skeleton,Table} from 'antd';



const columns = [
    {
        title:"Rank",
        key:"index",
        render:(value, item, index) =>  index+1
      },
    {
      title: 'TeamName',
      dataIndex: 'Team_Name',
      key: 'Team_Name',
    },
    
    {
      title: 'TotalSteps',
      dataIndex: 'steps',
      key: 'steps',
    },
  ];

class Teamavg extends React.Component {
    constructor(props){
      super(props);
      this.state={
        data:[],
        loading:true
      };
    };

componentDidMount() {
    var x = localStorage.getItem('challengeID')

        axios.get(`/groupavg/${x}`)    
      .then(response =>{
          const data=response.data;
        
         
            this.setState({data:data,
            loading:false })
        })
        .catch(error => this.setState({ error }));
    }

        render()
        
        {
            const data =this.state.data
            
            const loading = this.state.loading






            return (
                <div>
                    {loading ? <Skeleton active avatar={{ rows: 4 }} paragraph={{ rows: 4 }} /> :
                    <div>
                {data === undefined || data.length === 0 ? <div> Data not Found</div> :
                <div>
                        
               
                        <Table dataSource={data} columns={columns} />; 

             </div>
                
                     }
                    </div>
                        }
                </div>                
            )
        }
    
}
export default Teamavg    