 import React from 'react'; 
 import Home from './components/Home/Home'; 
 import NotFound from './components/NotFound/NotFound'; 
 import LeagueDetail from './components/LeagueDetail/LeagueDetail';
 import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom"; 

const App = () => {
   return (
     <Router> 
       <Switch>
         <Route exact path='/'> 
            <Home></Home>
         </Route>
         <Route path ='/league/:id'>
             <LeagueDetail></LeagueDetail>
         </Route>
         <Route path ='*'>
             <NotFound></NotFound>
         </Route>
       </Switch>
     </Router>
   );
 };
 
 export default App;