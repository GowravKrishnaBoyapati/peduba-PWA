import React from 'react'
import './Attendance.css'
import Button from '@material-ui/core/Button';

function Attendance() {
    return (
        <div style={{textAlign: 'center'}}>
            <div style={{paddinTop: '5vh'}}>
            <h1 >Attendance</h1>
            </div>
            <div style={{paddingBottom:'3vh'}}>
            </div>
            <img src="./images/random.jpeg" alt="Avatar" className="avatar" />
            <div className="att-mdiv">
                <div className="att-div1">
                    <Button className="attbx1" variant="contained" style={{borderRadius:50}} label="Attendance" ><h4>IN</h4></Button>
                    <Button className="attbx2" variant="contained" style={{borderRadius:50}} label="Stock"><h4>OUT</h4></Button>
                </div>
                <div className="att-div2">
                    <Button className="attbx3" variant="contained" style={{borderRadius:50}} label="Jobs" ><h4>break</h4></Button>
            </div> 
            </div>
        </div>
    )
}

export default Attendance
