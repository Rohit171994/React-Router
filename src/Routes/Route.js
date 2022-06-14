import React from "react";
import {Switch, Route} from 'react-router-dom'
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";

const AppRoutes = () =>{
    return(
    <Switch>
        <Route exact path ='/' component = {Home}/>
        <Route  path ='/aboutus' component = {AboutUs}/>
    </Switch>
    )
}

export default AppRoutes;