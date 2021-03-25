import React, { Component } from "react";
import { Card } from 'antd';

import TotalStepCount from '../../components/TotalStepCount/TotalStepCount'
import StepChartProgress from '../../components/StepChartProgress/StepChartProgress'
import  DailyGoal from '../../components/DailyGoal/DailyGoal'
import './DashboardPage.css'

export default class DashboardPage extends Component {

render() {
    return(
        <div>
        <div className = "basic">
            <Card style = {{width:"300px",height:"200px"}}>
        <DailyGoal />
        </Card>
        <Card style = {{width:"300px"}}>
        <TotalStepCount />
        </Card>
        </div>
        <div style = {{paddingTop:"4rem"}}>
        <StepChartProgress />
        </div>
        </div>
    )
}


}
