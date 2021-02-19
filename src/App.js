import React, { useEffect } from "react";
import {connect} from 'react-redux'
import {getSmurfs} from './actions'
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App(props) {
  const {getSmurfs} = props
  useEffect(getSmurfs, [])

  return (
    <div>
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  )
}

export default connect(null, {getSmurfs})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.