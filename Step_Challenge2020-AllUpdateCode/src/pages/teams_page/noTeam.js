import React,{ Component} from 'react'
import { Result, Button } from 'antd';
import { Space,Upload,Steps,Modal, Typography,Input,message } from 'antd';
import TMSearch from '../../components/TMSearch/TMSearch'
//import './noTeam.css'
//import { SmileOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
const { Step } = Steps;
const {Text} = Typography;
const steps = [
  {
    title: 'Team Info',
    content: 'First-content',
  },
  {
    title: 'Team Members',
    content: 'Second-content',
  },
  {
    title: 'Review',
    content: 'Last-content',
  },
];

export default class Noteam extends Component{

  constructor(props){
    super(props);
    this.state = {
      dummy : "",
      visibleCreateTeamModal:false,
      visibleJoinTeamModal:false,
      current: 0,
      
    }
     
    

    this.showCreateTeamModal = this.showCreateTeamModal.bind(this);
    this.showJoinTeamModal = this.showJoinTeamModal.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this)
  }
  showCreateTeamModal(){
    console.log(this.state.steps)
    this.setState({
      visibleCreateTeamModal : true,
      
    })
  }
  showJoinTeamModal(){
    this.setState({
      visibleJoinTeamModal : true
    })
  }
  next() {
    //console.log(this.state.current)
    const current = this.state.current + 1;
    this.setState({ 
      current : current
     });
     //console.log(current);
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ 
      current : current
     });
     //console.log(current);
  }
 
  render(){
    
    const { current } = this.state;
    console.log(this.state.current)
    return(
      <div>
        <Result
    
    title="We have not found any teams !"
    extra={[
        <Button type="primary" key="console" onClick = {this.showCreateTeamModal}>
          Create Team
        </Button>
        ,
        <Button key="join" onClick = {this.showJoinTeamModal}>Join Team</Button>
        ,

      ]}
      
  />
  <Modal
        title="Modal 1000px width"
        centered
        visible={this.state.visibleCreateTeamModal}
        onOk={() =>this.setState({
          visibleCreateTeamModal:false
        })}
        onCancel={() =>this.setState({
          visibleCreateTeamModal:false
        })}
        width={1000}
        okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
      >

<Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">
           { this.state.current === 0 ? ( <div>
            <Space direction = "vertical"> 
            <Text strong style = {{marginLeft: "2%"}}>Team Name</Text>
                           
              <Input name ="TeamName"
              placeholder="Enter your team name" value = "dj"             
                           style={{ width: "auto",minWidth:'20rem' ,marginLeft: "2%" }} 
                            />
                             <Upload
      action="http://localhost:9000/var"
      listType="picture"
      
      className="upload-list-inline"
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
                            </Space>
                           
            </div>) : ("")
            }
            { this.state.current === 1 ? ( <div>
           
               
              <TMSearch />
            
                           
            </div>) : ("")
            }
        </div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </Modal>
      <Modal
        title="Modal 1000p width"
        centered
        visible={this.state.visibleJoinTeamModal}
        onOk={() =>this.setState({
          visibleJoinTeamModal:false
        })}
        onCancel={() =>this.setState({
          visibleJoinTeamModal:false
        })}
        width={1000}
      >
        <p>some contents.</p>
        <p>some contents.</p>
        <p>some contents.</p>
      </Modal>
    
      </div>
    )
  }
}


 
 

