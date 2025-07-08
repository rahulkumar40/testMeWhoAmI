// context api body 
import React, { createContext, useState } from "react";
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  
  const fetchData = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <DataContext.Provider value={{ data, setData, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};