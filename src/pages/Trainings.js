import React,{useState} from 'react'
import './Trainings.css'
import TrainingNavbar from '../components/TrainingNabvar'
import Button from '@material-ui/core/Button';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import AssignmentLateOutlinedIcon from '@material-ui/icons/AssignmentLateOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import Piechart from '../components/Piechart';
function Trainings(props) {
    const [trainState, setTrainState] = useState('MyTrainings')
    
    return (
        <div className="ABC">
            {(props.user_category==='reviewer')?(
            <TrainingNavbar theme={props.theme} onChange={(e)=>{setTrainState(e)}}/>):(<></>)}
            <Piechart theme={props.theme}/>
            <div className='xyz'>
            <Button className="tran-bx1" style={{borderRadius:40,overflow: 'hidden'}} ><ScheduleOutlinedIcon fontSize="large" /><h4>Scheduled Trainings</h4></Button>
            <div style={{width:'5%'}}></div>
            <Button className="tran-bx2" style={{ borderRadius: 40 }} >
                <AssignmentLateOutlinedIcon fontSize="large" />
                <h4> missed trainings</h4>
            </Button>
            </div>
            <Button className="tran-bx3"  style={{borderRadius:40,overflow: 'hidden'}} ><AssignmentTurnedInOutlinedIcon fontSize="large" /><h4>completed Trainings</h4></Button>
        </div>
    )
}

export default Trainings
