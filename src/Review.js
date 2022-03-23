import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom"; //파라미터 가져오는 라우터 훅
import { useSelector } from "react-redux"; // 리덕스 데이터에서 버킷리스트 데이터 가져와야함

const Review = (props) => {
  const history = useHistory();
  const params = useParams();
  const day_index = params.index;
  const day_list = useSelector((state) => state.day.list);
  const [cicleIdx, setColor] = React.useState(0);

  return (
    <div>
      <Title>
        <Days>{day_list[day_index]}요일</Days> 평점 남기기
      </Title>
      <CircleBox>
        {Array.from({ length: 5 }, (item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                setColor(idx + 1);
                console.log(idx);
                console.log(cicleIdx);
              }}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "30px",
                margin: "5px",
                backgroundColor: cicleIdx < idx + 1 ? "#ddd" : "#ffeb3b",
              }}
            ></div>
          );
        })}
      </CircleBox>
      <ReviewBtn
        onClick={() => {
          history.goBack();
        }}
      >
        평점 남기기
      </ReviewBtn>
    </div>
  );
};

const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Days = styled.span`
  color: rgb(255, 255, 255);
  font-weight: 900;
  background: orange;
  padding: 0.2rem;
  border-radius: 5px;
  margin: 5px;
`;

const CircleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
  width: 100%;
`;

const ReviewBtn = styled.button`
  width: 100%;
  background-color: purple;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  color: rgb(255, 255, 255);
  max width: 10px;
`;

export default Review;
