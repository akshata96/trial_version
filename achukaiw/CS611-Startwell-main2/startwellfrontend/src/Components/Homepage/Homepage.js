import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Button, Descriptions, Divider, Select, Tag, Typography} from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined, PoweroffOutlined, FrownOutlined, MehOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Avatar, Card, Col, Row, Image, Collapse, Badge, Rate, Carousel, Form, Input} from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import './Homepage.css';
import logo from '../../Assets/logo.PNG'
import woundimg from '../../Assets/wound.jpg'
import caro1 from '../../Assets/caro1.jpg'
import caro2 from '../../Assets/caro2.jpg'
import caro3 from '../../Assets/caro3.jpg'
import matchimg from '../../Assets/matchimg.JPG'
import { Link } from 'react-router-dom';
const {Option} = Select;

// const onFinish = (values: any) => {
//     console.log('Success:', values);
// };

//   const onFinishFailed = (errorInfo: any) => {
//     console.log('Failed:', errorInfo);
// };

const { Header, Content, Footer, Sider } = Layout;
const{Title}=Typography;
const {SubMenu} = Menu;
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const {TextArea} = Input;


function Homepage()
{
    const [visible, setVisible] = useState(false);
    return(
        <Layout style={{width:'100%', backgroundColor:'gray'}}>
            <Header style={{backgroundColor:'gray', height:'100%'}}>
                <Menu mode='horizontal' style={{width:'100%', height:'100%', backgroundColor:'gray'}}>
                    <img src={logo} width={70}/>
                    <text className='Toptitle'>&nbsp;&nbsp; Startwell</text>
                    <Menu.Item key='Sign Up/Log In' className='Topnav'>
                        <a href='/Login' style={{color:'white'}}>Sign Up/Log In</a>
                    </Menu.Item>
                    <Menu.Item key='About' className='Topnav'>
                        <a href='/About' style={{color:'white'}}>About</a>
                    </Menu.Item>
                    <Menu.Item key='Match' className='Topnav'>
                        <a href='/Match' style={{color:'white'}}>Match</a>
                    </Menu.Item>
                    <Menu.Item key='Home' className='Topnav'>
                        <a href='/Homepage' style={{color:'white'}}>Home</a>
                    </Menu.Item>
                </Menu>
            </Header>
            <Layout className='section1'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 className='BigMessage'>Big Message that can cascade</h1>
                <h1 className='BigMessage'>in this manner</h1>
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <Button className='letsgo' size='large'><text className='buttontext'>LET'S GO!</text></Button>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </Layout>
            <Layout className='section2'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Row>
                    <Col span={2}></Col>
                    <Col span={9}>
                        <br></br>
                        <Image src={woundimg} width={500} height={400}></Image>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={9}>
                        <h1 className='BigMessage' style={{color:'burlywood', fontSize:'200%', textAlign:'left'}}>Explore Your Options</h1>
                        <br></br>
                        <br></br>
                        <h2 className='SectionText' style={{color:'burlywood'}}>Section Text - A brief explanation of what exploring your options would entail</h2>
                        <br></br>
                        <h2 className='SectionText' style={{color:'burlywood'}}>Shedding some light here maybe?</h2>
                        <br></br>
                        <div>
                            <Button className='sec2buttons' size='large'>Take Survey</Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button className='sec2buttons' size='large'>Match Directly</Button>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>



                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
            </Layout>
            <Layout className='section3'>
                <br></br>
                <br></br>
                <Row>
                    <Col span={2}></Col>
                    <Col span={7}>
                        
                    <h1 className='BigMessage' style={{color:'black', fontSize:'200%', textAlign:'left'}}>Matching?</h1>
                        <br></br>
                        <br></br>
                        <h2 className='SectionText' style={{color:'black', fontStyle:'italic'}}>- What does that mean?</h2>
                        <h2 className='SectionText' style={{color:'black', fontStyle:'normal'}}>Section Text - An explanation of what matching is</h2>
                        <br></br>
                        <h2 className='SectionText' style={{color:'black', fontStyle:'normal'}}>More explanation</h2>
                        <br></br>
                        <h2 className='SectionText' style={{color:'black', fontStyle:'normal'}}>Maybe we explain some of the factors?</h2>
                        <br></br>
                        <br></br>
                    </Col>
                    
                    <Col span={13}>
                        <br></br>
                        <Image src={matchimg} width={1000} ></Image>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <h2 className='SectionText' style={{color:'black', fontStyle:'italic', fontSize:'150%'}}>"Our aim is to make more perfect matches like Charles and Jenna" - Avishai Admin</h2>
                    </Col>
                    <Col span={2}></Col>
                </Row>



                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
            </Layout>
            <Layout className='section4'>
                <br></br>
                <br></br>
                <Row>
                    <Col span={1}></Col>
                    <Col span={12}>
                        <Carousel id='Caro' effect='fade' autoplay>
                            <div>
                                <Image className='caroimgs' src={caro1} width={900} height={500}></Image>
                            </div>
                            <div>
                                <Image className='caroimgs' src={caro2} width={900} height={500}></Image>
                            </div>
                            <div>
                                <Image className='caroimgs' src={caro3} width={900} height={500}></Image>
                            </div>
                        </Carousel>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={8}>
                        <br></br>
                        <Button className="sec4buttons" size='large'>Button 1</Button>
                        <br></br>
                        <br></br>
                        
                        <Button className="sec4buttons" size='large'>Button 2</Button>
                        <br></br>
                        <br></br>
                        
                        <Button className="sec4buttons" size='large'>Button 3</Button>
                    </Col>
                    <Col span={2}></Col>
                </Row>



                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
            </Layout>
            <Layout className='section5'>
                <br></br>
                <br></br>
                <br></br>
                <h1 className='sec5header'>We'd love to hear from you</h1>
                <h2 className='sec5text'>Whether it is a question about features, pricing or anything else,<br></br>our team is always ready for you!</h2>
                <br></br>
                <br></br>
                <h1 style={{color:'darkslategray', fontSize:'200%', fontWeight:'bold'}}>CONTACT US</h1>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>
                    <Form name='ContactUs' layout='vertical' size='large' style={{textAlign:'center'}}>
                        <Form.Item label='Email ID' className='formtext' name='Email ID' rules={[{required:true, message:'Email ID Required!'}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item label='Subject' className='formtext' name='Subject' rules={[{required:true, message:'Subject Required'}]}>
                            <Select placeholder='Select an option'>
                                <Option value = "Subj1">Subj1</Option>
                                <Option value = "Subj2">Subj2</Option>
                                <Option value = "Subj3">Subj3</Option>
                                <Option value = "Other">Other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item className='formtext' label='Message' name='Message'>
                            <TextArea rows={6} />
                        </Form.Item>
                        <Form.Item className='formtext'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button className='submitbutton' type='primary' htmlType='submit'>Submit</Button>
                        </Form.Item>

                    </Form>
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </Layout>
            <Footer className='footer'>
                <br></br>
                <h1 style={{color:'white'}}>Copyright Startwell</h1>
                <br></br>
            </Footer>
            
        </Layout>
    )
}
export default Homepage