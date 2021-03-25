import React from 'react'
import 'antd/dist/antd.css';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'
import GrpCards from '../../components/cards.component/GrpComponent/Grp'
import ChallengeCards from '../../components/cards.component/ChallengeCardComponent/ChallengeComponent'
import ParticipantCarousels from '../../components/CarouselComponent/CarouselComponent'
import image from '../../Assets/home_pic.jpg'
import './homepage.css';


export default class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.setState = {
            dup: ""
        }
        
    }
    
    render (){
        return(
            <div className ="homepage">
    <HeaderComponent />
    <div className = "homepage1"> 
    <img className='image' alt='image_pic' src={image}/>
    <ChallengeCards/>
    <ParticipantCarousels/>
    </div>
    <GrpCards />
    <FooterComponent />
    
</div>

        )
    }
}

