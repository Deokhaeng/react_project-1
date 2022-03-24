import React from "react";
import DayList from "./DayList";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Review from "./Review";

function App() {
  return (
    <AppWrap>
      <Container>
        <Route path="/review/:index">
          <Review />
        </Route>
        <Route path="/" exact>
          <DayList />
        </Route>
      </Container>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 300px;
  margin: auto;
  height: 70vh;
  padding: 16px;
  border: 1px solid transparent;
  border-radius: 30px;
  box-shadow: 0px 0px 10px lightgray;
`;

export default App;
