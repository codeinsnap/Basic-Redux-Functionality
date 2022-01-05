import "./App.css";
import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { incNumber , decNumber } from './actions/index'

function App() {
  const myState = useSelector((state) => state.changeNumber );
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1 className="title1"> Redux Testing Page</h1>
      <h5 className="title2">Incriment , Decrement Function</h5>

      <div className="btn">
      <button className="btn1" onClick={()=> dispatch(incNumber())}>+</button>
      <input type="text" value={myState} className="input"/>
      <button className="btn2" onClick={()=> dispatch(decNumber())}>-</button> 
      </div>
    </div>
  );
}

export default App;
