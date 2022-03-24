// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const DayList = (props) => {
  const history = useHistory();
  const day_list = useSelector((state) => state.day.item);
  // ----------------------------------------
  // 평점 랜덤함수/ 배열에서 무작위로 요소 선택해서 출력하는 방식
  // const circle = [
  //   [
  //     <YellowCircle key={10} />,
  //     <GrayCircle key={11} />,
  //     <GrayCircle key={12} />,
  //     <GrayCircle key={13} />,
  //     <GrayCircle key={14} />,
  //   ],
  //   [
  //     <YellowCircle key={10} />,
  //     <YellowCircle key={11} />,
  //     <GrayCircle key={12} />,
  //     <GrayCircle key={13} />,
  //     <GrayCircle key={14} />,
  //   ],
  //   [
  //     <YellowCircle key={10} />,
  //     <YellowCircle key={11} />,
  //     <YellowCircle key={12} />,
  //     <GrayCircle key={13} />,
  //     <GrayCircle key={14} />,
  //   ],
  //   [
  //     <YellowCircle key={10} />,
  //     <YellowCircle key={11} />,
  //     <YellowCircle key={12} />,
  //     <YellowCircle key={13} />,
  //     <GrayCircle key={14} />,
  //   ],
  //   [
  //     <YellowCircle key={10} />,
  //     <YellowCircle key={11} />,
  //     <YellowCircle key={12} />,
  //     <YellowCircle key={13} />,
  //     <YellowCircle key={14} />,
  //   ],
  // ];

  // const randomCircle = function (array) {
  //   const random = Math.floor(Math.random() * array.length);
  //   return array[random];
  // };
  // ----------------------------------------
  const cicleList = [0, 1, 2, 3, 4];
  const week_days = Object.keys(day_list).map((_d, idx) => {
    // 오늘 날짜를 구해요!
    let today = new Date().getDay();

    let d =
      today + parseInt(_d) > 6
        ? today + parseInt(_d) - 7
        : today + parseInt(_d);
    return day_list[d];
  });

  return (
    <ListStyle>
      <Title>내 일주일은?</Title>
      {week_days.map((w, i) => {
        let randomCircle = Math.floor(Math.random() * 5);
        //( Math.random() * ( 최대값 - 최소값 )  ) + 최소값
        return (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "10px auto",
            }}
          >
            <DayName>{w}</DayName>
            {/* <Circles>{randomCircle(circle)} </Circles>
            평점 랜덤함수/ 배열에서 무작위로 요소 선택해서 출력하는 방식 */}
            {cicleList.map((w, i) => {
              return (
                <Circle
                  key={i}
                  style={{
                    backgroundColor: i <= randomCircle ? "khaki" : "#ddd",
                  }}
                />
              );
            })}
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
  color: gray;
  font-weight: 700;
  font-size: 17px;
`;

const Title = styled.h3`
  text-align: center;
  margin-top: 50px;
  color: #40e0d0;
  font-size: 30px;
`;

const DayName = styled.div`
  margin: 5px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 0px 5px;
`;

const DayBtn = styled.div`
  appearance: none;
  background-color: transparent;
  border-color: transparent #40e0d0;
  width: 0px;
  height: 0px;
  border-top-width: 1rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  cursor: pointer;
`;

// const Circles = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// const YellowCircle = styled.div`
//   width: 30px;
//   height: 30px;
//   border-radius: 30px;
//   margin: 0px 5px 5px 5px;
//   background-color: rgb(255, 235, 59);
// `;

// const GrayCircle = styled.div`
//   width: 30px;
//   height: 30px;
//   border-radius: 30px;
//   margin: 0px 5px 5px 5px;
//   background-color: rgb(221, 221, 221);
// `;
// 평점 랜덤함수/ 배열에서 무작위로 요소 선택해서 출력하는 방식 / 필요한 css

export default DayList;
