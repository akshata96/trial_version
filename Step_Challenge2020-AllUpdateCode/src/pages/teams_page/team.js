import React from 'react'
import { Table } from 'antd';

const columns = [
  {
    title: 'First_Name',
    dataIndex: 'first_name',
    key: 'first_name',
    render: text => <p>{text}</p>,
  },
  {
    title: 'Last_Name',
    dataIndex: 'Last_Name',
    key: 'Last_Name',
    render: text => <p>{text}</p>,
  },
  {
    title: 'Email',
    dataIndex: 'Email',
    key: 'Email',
  },
  {
    title: 'City',
    dataIndex: 'City',
    key: 'City',
  },
  {
    title:'Status',
    dataIndex:'IS_Leader',
    key:'IS_Leader',
    render: text => <p>{text ? "Leader" :"Member"}</p>
  }
  
];

const Team =(props) =>(<Table columns={columns} dataSource={props.data} />)

export default Team

