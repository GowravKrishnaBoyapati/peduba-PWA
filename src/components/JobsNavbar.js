import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PeopleIcon from '@material-ui/icons/People';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {useHistory} from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

let c=0;
function JobsNavbar(props) {
  const useStyles = makeStyles({
    root: {
      width: '50vw',
      bottom: 0,
      dsiplay:'flex',
      justifyContent:'cnter',
      marginLeft:'auto',
      marginRight:'auto',
    },
  });
  const innerTheme = createMuiTheme({
    palette: {
      primary: {
        main: (props.theme==='dark')?'#67eb34':'#ff8000',
      },
    },
  });
    const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let history = useHistory();
  
  useEffect(() => {
    props.onChange(value)
  }, [value])
  useEffect(() =>{
     c=0
    setValue('myjobs') 
  },[])
  const handleChange = (event, newValue) => {
    c=1
    setValue(newValue)
  };
  const bgcol=(props.theme==='dark')?'white':'#373636';
  const icol=(props.theme==='dark')?'#373636':'white';
  return (
    <ThemeProvider theme={innerTheme} >
      <div style={{paddingLeft:'5%'}}></div>
    <BottomNavigation value={value} onChange={handleChange} className={classes.root} style ={{backgroundColor:bgcol,color:icol,borderRadius:50,width: '95%'}}>
    <BottomNavigationAction label="My Jobs" value="myjobs"   icon={<PermIdentityIcon style={{color:icol}}/>} />
     <BottomNavigationAction label="Team Jobs" value="teamjobs"  icon={<PeopleIcon style={{color:icol}}/>}/> 
    </BottomNavigation>
    </ThemeProvider>
  );
}

export default JobsNavbar
