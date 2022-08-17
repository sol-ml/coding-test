import React, { useContext, useState } from "react";
import { useTimer } from "react-timer-hook";
export const DataContext = React.createContext();

export function useInfo() {
  return useContext(DataContext);
}

const answers = {
  question1: "c",
  question2: "c",
  question3: "a",
  question4: "a",
  question5: "a",
};

export function Counter({ expiryTimestamp }) {
  const { seconds, minutes, start } = useTimer({
    expiryTimestamp,
    autoStart: false,
  });

  const time = new Date();
  time.setMinutes(time.getMinutes());

  return (
    <div className="space-x-2 font-semibold text-3x1" style={{ width: 100 }}>
      <span>{minutes}</span> : <span>{seconds}</span>
      <span>{start}</span>
      {/* en este componente solo llamamos a minuts */}
    </div>
  );
}

export function InfoProvider(props) {
  const [data, setData] = useState(answers);

  const value = {
    data,
    setData
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
}
