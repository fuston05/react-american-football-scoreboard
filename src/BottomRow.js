import React from "react";
import "./App.css";

const BottomRow = (props) => {
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{props.down}</div>
        <button className="downBtn bottomRowBtn" onClick= {() => {
          props.down === 4 ? props.setDown(0) : props.setDown(props.down +1)
          }}>+ Down
        </button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{props.toGo}</div>
        <button className="toGoBtn bottomRowBtn" onClick= {() => {
          props.toGo === 0 ? props.setToGo(10): props.setToGo(props.toGo -1)
          }}>- To Go
        </button>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{props.ballOn}</div>
        <button className="ballOnBtn bottomRowBtn" onClick= {() => {
          //limit ball on to '99yrds' or reset to 0
          props.ballOn === 50 ? props.setBallOn(0) : props.setBallOn(props.ballOn +1)
          }}>+ Ball On
        </button>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{props.quarter}</div>

        {/* Stretch: button to increment quarter */}
        <button className="quarterBtn bottomRowBtn" onClick= {() => {
          //limit quarters to 4 or reset to 0
          props.quarter === 4 ? props.setQuarter(0) : props.setQuarter(props.quarter +1)
          }}>+ Quarter
        </button>
      </div>


    </div>
  );
};

export default BottomRow;
