// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const DayList = (props) => {
  const history = useHistory();
  const day_btn = useSelector((state) => state.day.list);

  const circle = [
    [
      <YellowCircle key={10} />,
      <GrayCircle key={11} />,
      <GrayCircle key={12} />,
      <GrayCircle key={13} />,
      <GrayCircle key={14} />,
    ],
    [
      <YellowCircle key={10} />,
      <YellowCircle key={11} />,
      <GrayCircle key={12} />,
      <GrayCircle key={13} />,
      <GrayCircle key={14} />,
    ],
    [
      <YellowCircle key={10} />,
      <YellowCircle key={11} />,
      <YellowCircle key={12} />,
      <GrayCircle key={13} />,
      <GrayCircle key={14} />,
    ],
    [
      <YellowCircle key={10} />,
      <YellowCircle key={11} />,
      <YellowCircle key={12} />,
      <YellowCircle key={13} />,
      <GrayCircle key={14} />,
    ],
    [
      <YellowCircle key={10} />,
      <YellowCircle key={11} />,
      <YellowCircle key={12} />,
      <YellowCircle key={13} />,
      <YellowCircle key={14} />,
    ],
  ];

  const randomCircle = function (array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  };

  return (
    <ListStyle>
      {day_btn.map((list, i) => {
        return (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "10px auto",
            }}
          >
            <DayName>{list}</DayName>
            <Circles>{randomCircle(circle)} </Circles>
            <DayBtn
              onClick={() => {
                history.push("/review/" + i);
              }}
            ></DayBtn>
          </div>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const DayName = styled.div`
  margin: 5px;
`;

const Circles = styled.div`
  display: flex;
  flex-direction: row;
`;

const YellowCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 0px 5px 5px 5px;
  background-color: rgb(255, 235, 59);
`;

const GrayCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 0px 5px 5px 5px;
  background-color: rgb(221, 221, 221);
`;

const DayBtn = styled.div`
  appearance: none;
  background-color: transparent;
  border-color: transparent purple;
  width: 0px;
  height: 0px;
  border-top-width: 1rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

export default DayList;
