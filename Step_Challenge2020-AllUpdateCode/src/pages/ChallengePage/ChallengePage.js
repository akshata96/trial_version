import React from 'react';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'
import ChallengeDataComponent from '../../components/ChallengeDataComponent/ChallengeDataComponent'
import './ChallengePage.css'
export default class ChallengePage extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            dummy: "",
            row: {}
        }
        
    }
    
    
    

    render (){
        

        return(
            <div>
            <HeaderComponent />
            <div >
            <h1 className = "component-head-name">Challenges</h1>
              <div className = "c_container" >
                <ChallengeDataComponent />
                </div>
      
            </div>
            <FooterComponent />
            </div>
        )
    }

}