import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";

const Bar = styled.div`
  display: grid;
  grid-template-columns: 200px 100px 100px 100px 100px;
`;

const Logo = styled.div`
  font-size: 1.5em;
`;

const ControlButtomDiv = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      text-shadow: 2px 5px 35px white;
      color: green;
      transform: scale(1.1);
    `}
`;

const ControlButton = ({ name, active }) => {
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <ControlButtomDiv onClick={()=> setPage(name)} active={page === name}>
          {correctCase(name)}
        </ControlButtomDiv>
      )}
    </AppContext.Consumer>
  );
};

function correctCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

const AppBar = () => {
  return (
    <div>
      <br />
      <Bar>
        <Logo>My Investments App</Logo>
        <div />
        <ControlButton active name="portfolio" />
        <ControlButton active name="dayTrade" />
        <ControlButton active name="list" />
      </Bar>
    </div>
  );
};

export default AppBar;
