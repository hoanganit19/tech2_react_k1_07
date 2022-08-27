import React, {useState} from "react";
import Content from "./Content";
import Title from "./Title";

export const ThemeContext = React.createContext();

export default function Theme() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme==='light' ? 'dark': 'light');
  }

  return (
    <>
      <ThemeContext.Provider value={{theme: theme, toggleTheme: toggleTheme}}>
        
        <Title />
        <Content title={'a'}/>
      </ThemeContext.Provider>
    </>
  );
}
