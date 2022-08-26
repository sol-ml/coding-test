import React, { useContext, useState } from "react";
export const DataContext = React.createContext();

export function useInfo() {
  return useContext(DataContext);
}

export function InfoProvider(props) {
  const [data, setData] = useState({
    question1: "c",
    question2: "c",
    question3: "a",
    question4: "a",
    question5: "a",
  });

  const answer = () => {
    setData({ question1: "a", ...data });
  };

  const value = {
    data,
    setData,
    answer
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
}
