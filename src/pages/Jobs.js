import React, { useState } from 'react'
import './Trainings.css'
import JobsNavbar from '../components/JobsNavbar'
import Button from '@material-ui/core/Button';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import AssignmentLateOutlinedIcon from '@material-ui/icons/AssignmentLateOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import Piechart from '../components/Piechart';
function Jobs(props) {
    const [trainState, setTrainState] = useState('myjobs')

    return (
        <div className="ABC">
            {(props.user_category === 'reviewer') ? (
                <JobsNavbar theme={props.theme} onChange={(e) => { setTrainState(e) }} />) : (<></>)}
            <Piechart theme={props.theme} />
            <div className='xyz'>
                <Button className="tran-bx1" style={{ borderRadius: 40, overflow: 'hidden' }} >
                    <ScheduleOutlinedIcon fontSize="large" />
                    <h4>Scheduled jobs</h4></Button>
                <div style={{ width: '5%' }}></div>
                <Button className="tran-bx2" style={{ borderRadius: 40 }} >
                    <AssignmentLateOutlinedIcon fontSize="large" />
                    <h4> missed jobs</h4>
                </Button>
            </div>
            <Button className="tran-bx3" style={{ borderRadius: 40, overflow: 'hidden' }} >
                <AssignmentTurnedInOutlinedIcon fontSize="large" />
                <h4>completed jobs</h4>
                </Button>
        </div>
    )
}

export default Jobs
