import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BuildIcon from '@material-ui/icons/Build';
import {useHistory} from 'react-router-dom'
const useStyles = makeStyles({
  root: {
    width: '100vw',
    position: 'absolute',
    bottom: 0,
    justifyContent:'space-between',
    overflow: 'auto',
  },
});

export default function Navbar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let history = useHistory();
  useEffect(() => {
    history.push(value)
  }, [value])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
    <BottomNavigationAction label="Dashboard" value="Dashboard"  icon={<EqualizerIcon />} />
     <BottomNavigationAction label="Incident" value="Incidents"  icon={<ReportProblemIcon />}/> 
     <BottomNavigationAction label="Training" value="trainings" icon={<LocalLibraryIcon />} />
    <BottomNavigationAction label="Jobs" value="jobs" icon={<AssignmentIcon />} />
    <BottomNavigationAction label="Settings" value="Settings" icon={<BuildIcon />} />
    </BottomNavigation>
  );
}