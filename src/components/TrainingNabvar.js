
import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PeopleIcon from '@material-ui/icons/People';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {useHistory} from 'react-router-dom'
const useStyles = makeStyles({
  root: {
    width: '100vw',
    bottom: 0,
    justifyContent:'space-evenly'
  },
});
let c=0;
function TrainingNabvar(props) {
    const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let history = useHistory();
  
  useEffect(() => {
    props.onChange(value)
  }, [value])
  useEffect(() =>{
     c=0
    setValue('MyTrainings') 
  },[])
  const handleChange = (event, newValue) => {
    c=1
    setValue(newValue)
  };
  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root} style ={{width: '100%'}}>
    <BottomNavigationAction label="My trainings" value="MyTrainings"   icon={<PermIdentityIcon />} />
     <BottomNavigationAction label="Team Trainings" value="TeamTrainings"  icon={<PeopleIcon />}/> 
    </BottomNavigation>
  );
}

export default TrainingNabvar
