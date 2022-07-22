import React, { useContext, useState } from 'react'
  
export const DataContext = React.createContext()

export function useInfo () {
  return useContext(DataContext)
}

const answers = {
  question1: "c",
  question2: "c",
  question3: "a",
  question4: "a",
  question5: "a",
} 

export function InfoProvider ({ children }) {
  const  [data , setData] = useState(answers)  
const value = {
  data,
  setData
}
 
  return <DataContext.Provider value={value}>
    {children}
  </DataContext.Provider>
}




