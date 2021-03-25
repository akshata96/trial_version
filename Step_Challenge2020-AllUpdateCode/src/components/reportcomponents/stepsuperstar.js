import React from 'react';
import axios from 'axios';
import { Skeleton,Descriptions} from 'antd';

class Stepsuperstar extends React.Component {
    constructor(props){
      super(props);
      this.state={
        data:[],
        loading:true
      };
    };

componentDidMount() {

    var x = localStorage.getItem('challengeID')
        
        axios.get(`/StepsuperStar/${x}`)    
      .then(response =>{
          const data=response.data;
        
         
            this.setState({data:data,
            loading:false })
        })
        .catch(error => this.setState({ error }));
    }

        render()
        
        {
            const data =this.state.data[0]
            
            const loading = this.state.loading






            return (
                <div>
                    {loading ? <Skeleton active avatar={{ rows: 4 }} paragraph={{ rows: 4 }} /> :
                    <div>
                {data === undefined || data.length === 0 ? <div> Data not Found</div> :
                <div>
                        
               
                        <Descriptions title="User Info" >
                        <Descriptions.Item label="Address Line No1">{data.Address_Line1}</Descriptions.Item>
                        <Descriptions.Item label="Address Line No2">{data.Address_Line2}</Descriptions.Item>
                        <Descriptions.Item label="City">{data.City}</Descriptions.Item>
                        <Descriptions.Item label="Email">{data.Email}</Descriptions.Item>
                        <Descriptions.Item label="State">
                        {data.State}
                        </Descriptions.Item>
                        <Descriptions.Item label="ZipCode">{data.ZipCode}</Descriptions.Item>
                        <Descriptions.Item label="Contact">{data.Contact}</Descriptions.Item>
                        <Descriptions.Item label="Affiliation">{data.Affiliation}</Descriptions.Item>
                        <Descriptions.Item label="Steps">{data.steps}</Descriptions.Item>
                        
                        </Descriptions>

             </div>
                
                     }
                    </div>
                        }
                </div>                
            )
        }
    
}
export default Stepsuperstar    