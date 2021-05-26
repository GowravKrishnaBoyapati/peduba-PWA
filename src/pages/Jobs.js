import React, { useState,useEffect } from 'react'
import './Trainings.css'
import JobsNavbar from '../components/JobsNavbar'
import Button from '@material-ui/core/Button';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import AssignmentLateOutlinedIcon from '@material-ui/icons/AssignmentLateOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import Piechart from '../components/Piechart';
function Jobs(props) {
    const [trainState, setTrainState] = useState('myjobs')
    useEffect(() =>{
        
    },[trainState])

    return (
        <div className="ABC">
            {(props.user_category === 'reviewer') ? (
                <JobsNavbar theme={props.theme} onChange={(e) => { setTrainState(e) }} />) : (
                <>
                <div>
                    <h1>Jobs</h1>
                </div>
                </>)}
            <Piechart theme={props.theme} />
            <div className='xyz'>
                <Button className="tran-bx1" style={{ borderRadius: 40, overflow: 'hidden' }} >
                    <ScheduleOutlinedIcon fontSize="large" />
                    {(trainState==='myjobs')?(<h4>Scheduled jobs</h4>):(<h4>Peding Review</h4>)}</Button>
                <div style={{ width: '5%' }}></div>
                <Button className="tran-bx2" style={{ borderRadius: 40 }} >
                    <AssignmentLateOutlinedIcon fontSize="large" />
                    {(trainState==='myjobs')?(<h4>Missed jobs</h4>):(<h4>Over Due Jobs</h4>)}
                </Button>
            </div>
            <Button className="tran-bx3" style={{ borderRadius: 40, overflow: 'hidden' }} >
                <AssignmentTurnedInOutlinedIcon fontSize="large" />
                {(trainState==='myjobs')?(<h4>Completed jobs</h4>):(<h4>Completed</h4>)}
                </Button>
        </div>
    )
}

export default Jobs
