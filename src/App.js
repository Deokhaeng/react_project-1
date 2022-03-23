import React from "react";
import DayList from "./DayList";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Review from "./Review";

function App() {
  const list = React.useState(["월", "화", "수", "목", "금", "토", "일"]);

  return (
    <AppWrap>
      <Container>
        <Route path="/review/:index">
          <Review />
        </Route>

        <Route path="/" exact>
          <Title>내 일주일은?</Title>
          <DayList list={list} />
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
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Title = styled.h3`
  text-align: center;
  margin-top: 50px;
`;

export default App;
