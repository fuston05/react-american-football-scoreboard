//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore]= useState(0);
  const [awayScore, setAwayScore]= useState(0);
  const [quarter, setQuarter]= useState(1);
  const [ballOn, setBallOn]= useState(0);
  const [toGo, setToGo]= useState(10);
  const [down, setDown]= useState(1);
  const [timerRunning, setTimerRunning]= useState(false);

  return (
    <div className="container">
      <section className="scoreboard">
        
        {/* stretch: separate into smaller components */}
        <TopRow homeScore= {homeScore} awayScore= {awayScore} />
        <BottomRow 
        quarter= {quarter} setQuarter= {setQuarter} 
        ballOn= {ballOn} setBallOn= {setBallOn}
        toGo= {toGo} setToGo= {setToGo}
        down= {down} setDown={setDown}
        />
      </section>
      <section class= "upperButtons">
        <button class= "resetBtn bottomRowBtn" onClick= { () => {
          setBallOn(0)
          setToGo(10)
          setDown(1)
          setQuarter(1)
          setAwayScore(0)
          setHomeScore(0)
        } } >
          Reset scoreboard</button>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick= {() => {setHomeScore(homeScore + 7)
          setBallOn(0)
          setToGo(10)
          setDown(1)
          }}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick= {() => {
            setHomeScore(homeScore + 3)}}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick= {() => {setAwayScore(awayScore + 7)
          setBallOn(0)
          setToGo(10)
          setDown(1)
          }}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick= {() => {setAwayScore(awayScore + 3)}}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
