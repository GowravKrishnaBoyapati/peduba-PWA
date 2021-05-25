import React from 'react'
import './Dashboard.css'
import Button from '@material-ui/core/Button';
import {Link,useHistory} from "react-router-dom"
function Dashboard(props) {
    let history = useHistory();
    return (
        <div style={{textAlign: 'center'}}>
            <div style={{paddingBottom:'3vh'}}></div>
            <img src="./images/random.jpeg" alt="Avatar" className="avatar" />
            <h3 style={{paddingTop:'1.5vh'}}>Hello, User!</h3>
            <div className="mdiv">
            <div className="div1">
            <Button className="bx1" variant="contained" style={{borderRadius:50}} label="Attendance" onClick={()=>{props.onPageChange('attendance')}}><h4>Attendance</h4></Button>
            <Button className="bx2" variant="contained" style={{borderRadius:50}} label="Stock"><h4>Stock</h4></Button></div>
            <div className="div2">
            <Button className="bx3" variant="contained" style={{borderRadius:50}} label="Jobs" onClick={()=>{props.onPageChange('jobs')}}><h4>Jobs</h4></Button>
            <Button className="bx4" variant="contained" style={{borderRadius:50}} label="trainings" onClick={()=>{props.onPageChange('trainings')}}><h4>Traingings</h4></Button>
            </div>
            </div>
        </div>
    )
}

export default Dashboard
