import React,{useEffect} from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';import BuildIcon from '@material-ui/icons/Build';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import {auth} from "../firebase"
import {useHistory,useLocation } from 'react-router-dom'
import './Navbar.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';

export default function Navbar(props) {
  const [value, setValue] = React.useState(props.value);
  let history = useHistory();
  const location = useLocation();
  useEffect(() => {
    props.onOption(value)
    history.push(value)
  }, [value])
  useEffect(()=>{
    if(location.pathname!=='/')
    {
    setValue(location.pathname.substring(1))
    }
    else{
      setValue("home")
    }
  },[])
  useEffect(() => {
    setValue(props.value)
  },[props.value])
  useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(!authUser){
        window.location.reload(false);
      }
		});
   
		return unsubscribe;
	}, []);
  const signOut = (e) => {
		e.preventDefault();
    console.log("pressed logout")
		auth.signOut().catch(function(error) {
		  		console.log(error)
		  		console.log("An error occurred")
		});	
	  }
  const handleChange = (event, newValue) => {
    setValue(newValue,);
  };
  const innerTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#ff8000',
      },
    },
  });
  const bgcol=(props.theme==='dark')?'white':'#373636';
  const icol=(props.theme==='dark')?'#373636':'white';
  return (
    <div>
      <div className='wrap' style={{justifyContent:'flex-end'}}>
          <IconButton onClick={signOut}>
          <ExitToAppIcon fontSize="large" />
          </IconButton>
      </div>
      <ThemeProvider theme={innerTheme}>
    <BottomNavigation value={value} onChange={handleChange}  className="root" style={{width:'100%',backgroundColor:bgcol}}>
    <BottomNavigationAction label="Home" value="home"    icon={<HomeOutlinedIcon  style={{color:icol}}/>} />
     <BottomNavigationAction label="Incident" value="Incidents"  icon={<ReportProblemOutlinedIcon style={{color:icol}}/>}/> 
     <BottomNavigationAction label="Training" value="trainings" icon={<LocalLibraryOutlinedIcon style={{color:icol}}/>} />
    <BottomNavigationAction label="Jobs" value="jobs" icon={<WorkOutlineIcon style={{color:icol}}/>} />
    <BottomNavigationAction label="Settings" value="Settings" icon={<TuneOutlinedIcon style={{color:icol}} />} />
    </BottomNavigation>
    </ThemeProvider>
    </div>
  );
}