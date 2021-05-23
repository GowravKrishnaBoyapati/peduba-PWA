import React from 'react'
import './Trainings.css'
import TrainingNavbar from '../components/TrainingNabvar'
import Button from '@material-ui/core/Button';
import ScheduleTwoToneIcon from '@material-ui/icons/ScheduleTwoTone';
import CallMissedOutgoingTwoToneIcon from '@material-ui/icons/CallMissedOutgoingTwoTone';
import AssignmentTurnedInTwoToneIcon from '@material-ui/icons/AssignmentTurnedInTwoTone';
function Trainings() {
    return (
        <div className="ABC">
            <div className="spa">
                Hello, User!!
            </div>
            <TrainingNavbar />
            <Button className="btn"><ScheduleTwoToneIcon fontSize="large" />Scheduled Trainings</Button>
            <Button className="btn"><CallMissedOutgoingTwoToneIcon fontSize="large" /> missed</Button>
            <Button className="btn1"><AssignmentTurnedInTwoToneIcon fontSize="large" />completed Trainings</Button>
        </div>
    )
}

export default Trainings
