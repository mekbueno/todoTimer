import React from "react";
import CountdowTimer from "./CountdownTimer";

const MainPage = (props) => {
  const { updateConfigure, pomodoro, pomoBreak } = props;

  return (
    <div className="main__page">
      <CountdowTimer
        updateConfigure={updateConfigure}
        pomodoro={pomodoro}
        pomoBreak={pomoBreak}
      />
    </div>
  );
};

export default MainPage;
