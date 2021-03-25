import React, { Component } from "react";
import { Layout } from 'antd';


const { Footer } = Layout;

export default class FooterComponent extends Component{

    constructor(){
        super();
        this.state = {
            h:false
        };
    }
    render(){
        return(
            <div>
                <Layout>
                    <Footer>
                    <div className = "homepageheader">
                    <h1 >footer</h1>
                    </div>
                    </Footer>
                </Layout>
                    
            </div>


        )

    }

}