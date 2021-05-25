import React,{useEffect,useState} from 'react';
import './App.css';
import Dashboard from './pages/Dashboard'
import Trainings from './pages/Trainings'
import Settings from './pages/Settings'
import Jobs from './pages/Jobs'
import Incidents from './pages/Incidents'
import Login from './pages/Login'
import Attendance from './pages/Attendance'
import {auth,db} from './firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Navbar from './components/Navbar'
import {useHistory} from 'react-router-dom'
function App(props) {
  const [user, setUser] = useState(auth.currentUser)
  const [userData, setUserData]=useState()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
          db.collection("PedubaUsers")
            .doc(auth?.currentUser?.uid)
            .get()
            .then(snapshot => {
              setUserData(snapshot.data())}) 
      }
    });
    return unsubscribe;
}, []);
   useEffect(() =>{
     setUser(auth.currentUser)
    },[userData])
    const [page, setPage] = useState('home')
    useEffect(() => {
    }, [page])
  return (
    <div className="app">
      
        {(!user)?(
          <Router>
            <Switch>
              <Route path="/" component={Login} />
            </Switch>
          </Router>
          
        ):
        (
          <Router>
        <Navbar value={page} onOption={(e)=>{setPage(e)}}/>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path='/home' ><Dashboard onPageChange={(e)=>{console.log(e); setPage(e)}} /> </Route>
          <Route path='/trainings' ><Trainings user_category={userData.user_category} /> </Route>
          <Route path='/settings' component={Settings} />
          <Route path='/jobs' component={Jobs} />
          <Route path='/Incidents' component={Incidents} />
          <Route path='/attendance'><Attendance /></Route>
        </Switch>
        </Router>
        )}
      
    </div>
  );
}

export default App;
