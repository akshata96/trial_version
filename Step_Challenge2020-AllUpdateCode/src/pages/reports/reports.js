import React, { useState } from 'react';

import { Card ,List,Modal, Button} from 'antd';
import Stepsuperstar from '../../components/reportcomponents/stepsuperstar';
import Teamavg from '../../components/reportcomponents/teamaverage'
import Topalumni from '../../components/reportcomponents/topAlumni'

const Reports =() => {
  const [visible, setVisible] = useState(false);
  const [mI, setmI] = useState(false)
  const [tA, setTa] = useState(false)
  const [wP, setWp] = useState(false)
  const [aL, setAl] = useState(false)
  
  const data = [
    {
      title: 'Step Super Star',
      description:'User with most steps',
      act: function(){
        return setVisible(true)
      }
      
    },
    {
      title: 'Most Improved',
      description:'Most improved performance in selected days',
      act: function(){
        return setmI(true)
      }
    },
    {
      title: 'Team Average',
      description:'Average steps taken by each team',
      act: function(){
        return setTa(true)
      }
    },
    {
      title: 'Weekly Progress',
      description:'Progress of Teams /Individuals',
      act: function(){
        return setWp(true)
      }
    },
    {
        title: 'Alumni',
        description:'Alumni with most steps',
        act: function(){
          return setAl(true)
        }
      }
  ];
  return (
    <div>
    
    <div className='reports'>
    <List
    itemLayout="vertical"
    grid={{ gutter: 16, xs: 1,
      sm: 2,
      md: 2,
      lg: 3,
      xl: 3,
      xxl: 6 }}
    dataSource={data}
    renderItem={item => (
        
      <List.Item>
    
      <Card  hoverable styles={{height:'20vh'}} extra={<Button type="link" onClick={() => {item.act()}}>
        Details
      </Button>}
      title={item.title} style={{ width: '20vw' ,height:'25vh',borderRadius: '2vh' }}>
        <p>{item.description}</p>
        
      </Card>
     
    
      </List.Item>
      
    )}
  />
  </div>
     <Modal
        title="Team Average"
        centered
        visible={tA}
        onOk={() => setTa(false)}
        onCancel={() => setTa(false)}
        width={1000}
      >
        <Teamavg/>
        
      </Modal>
      <Modal
        title=""
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <Stepsuperstar/>
        
      </Modal>
      <Modal
        title=""
        centered
        visible={aL}
        onOk={() => setAl(false)}
        onCancel={() => setAl(false)}
        width={1000}
      >
        <Topalumni/>
        
      </Modal>
      
    </div>
  );
}
export default Reports