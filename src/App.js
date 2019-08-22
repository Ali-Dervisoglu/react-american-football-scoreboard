//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const homeScoreState = useState(0);
  const homeScore = homeScoreState[0];
  const updateHomeScore = homeScoreState[1];
  const awayScoreState = useState(0);
  const awayScore = awayScoreState[0];
  const updateAwayScore = awayScoreState[1];
  const quarterState = useState(1);
  const quarter = quarterState[0];
  const updateQuarter = quarterstate[1]

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          {TeamScoreboard("Lions", "home", homeScore)}

          <div className="timer">00:03</div>
          {TeamScoreboard("Tigers", "away", awayScore)}

        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {IncrementButton("fg", "home", homeScore, homeScoreState, updateHomeScore)}
          {IncrementButton("td", "home", homeScore, homeScoreState, updateHomeScore)}

        </div>
        <div className="awayButtons">
          {IncrementButton("fg", "away", awayScore, awayScoreState, updateAwayScore)}
          {IncrementButton("td", "away", awayScore, awayScoreState, updateAwayScore)}
        </div>
      </section>
    </div>
  );
}

function TeamScoreboard(teamName, homeOrAway, score1) {

  const score = score1;
  const homeOrAwayName = homeOrAway + "__name";
  const homeOrAwayScore = homeOrAway + "__score";
  return (
    <div className={homeOrAway}>
      <h2 className={homeOrAwayName}>{teamName}</h2>
      <div className={homeOrAwayScore}>{score}</div>
    </div>
  )
}

function IncrementButton(tdOrFg, homeOrAway, score1, scoreState1, updateScore1) {
  const scoreState = scoreState1;
  const score = score1;
  const updateScore = updateScore1;
  const points = (tdOrFg == "fg") ? 3 : 7;

  const homeOrAwayButtons = (tdOrFg == "fg") ? (homeOrAway + "Buttons__fieldGoal") : (homeOrAway + "Buttons__touchdown");

  return (<button onClick={() => updateScore(score + points)} className={homeOrAwayButtons}>{homeOrAway} Touchdown</button>
  )
}



export default App;

{/* <div className="home">
            <h2 className="home__name">Lions</h2> */}

{/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */ }

{/* <div className="home__score">{homeScore}</div>
          </div> */}

{/* <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div> */}

{/* <button onClick={() => updateHomeScore(homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => updateHomeScore(homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button> */}

{/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */ }

{/* <button onClick={() => updateAwayScore(awayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => updateAwayScore(awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button> */}