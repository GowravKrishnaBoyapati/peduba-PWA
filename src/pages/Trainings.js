import React,{useState} from 'react'
import './Trainings.css'
import TrainingNavbar from '../components/TrainingNabvar'
import Button from '@material-ui/core/Button';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import AssignmentLateOutlinedIcon from '@material-ui/icons/AssignmentLateOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
function Trainings(props) {
    const [trainState, setTrainState] = useState('MyTrainings')
    return (
        <div className="ABC">
            {(props.user_category==='reviewer')?(
            <TrainingNavbar onChange={(e)=>{setTrainState(e)}}/>):(<></>)}
            <div className='xyz'>
                <div style={{paddingLeft:'1vw'}}></div>
            <Button className="btn" style={{borderRadius:50,overflow: 'hidden'}} ><ScheduleOutlinedIcon fontSize="large" /><h4>Scheduled Trainings</h4></Button>
            <div style={{width:'2vw'}}></div>
            <Button className="btn" style={{ borderRadius: 50 }} >
                <AssignmentLateOutlinedIcon fontSize="large" />
                <h4> missed trainings</h4>
            </Button>
            </div>
            <Button className="btn1"  style={{borderRadius:50,overflow: 'hidden'}} ><AssignmentTurnedInOutlinedIcon fontSize="large" /><h4>completed Trainings</h4></Button>
        </div>
    )
}

export default Trainings
