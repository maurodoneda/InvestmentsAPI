import React, {Component} from "react";
import "./App.css";
import Welcome from "./Welcome";
import styled, {css} from 'styled-components';
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import { AppProvider } from "./AppProvider";

const MyButton = styled.div`
    color: green;
      
    ${props => props.primary && css`
        color: palevioletred;
      `}
`

function App(){
 
    return (
      <div>
      <AppLayout>
        <AppProvider>
          <AppBar/>
          <Welcome/>
        </AppProvider>
      </AppLayout>
      <MyButton>Hello</MyButton>
      <MyButton primary>Hello</MyButton>
      </div>
  );
}


export default App;
