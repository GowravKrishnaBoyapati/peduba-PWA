
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
    overflow: 'auto',
  },
});

function TrainingNabvar() {
    const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let history = useHistory();
  /*useEffect(() => {
    history.push(value)
  }, [value])*/
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root} style ={{width: '100%'}}>
    <BottomNavigationAction label="My trainings" value="Dashboard"  icon={<PermIdentityIcon />} />
     <BottomNavigationAction label="Team Trainings" value="Incidents"  icon={<PeopleIcon />}/> >
    </BottomNavigation>
  );
}

export default TrainingNabvar
