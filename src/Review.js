import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom"; //파라미터 가져오는 라우터 훅
import { useSelector } from "react-redux"; // 리덕스 데이터에서 버킷리스트 데이터 가져와야함

const Review = (props) => {
  const history = useHistory();
  const params = useParams();
  const day_index = params.index;
  const day_list = useSelector((state) => state.day.item);
  const [cicleIdx, setColor] = React.useState(0);

  React.useEffect(() => {
    const press = (e) => {
      console.log(
        "키보드를 누르면 어떤 이벤트가 발생하는 지 확인해야지! : ",
        e
      );
      if ([1, 2, 3, 4, 5].indexOf(parseInt(e.key)) !== -1) {
        setColor(parseInt(e.key));
      }
    };
    window.addEventListener("keydown", press);

    return () => window.removeEventListener("keydown", press);
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <Title>
        <Days>{day_list[day_index]}요일</Days> 평점 남기기
      </Title>
      <CircleBox>
        {Array.from({ length: 5 }, (item, circle) => {
          return (
            <div
              key={circle}
              onClick={() => {
                setColor(circle + 1);
                console.log(circle);
                console.log(cicleIdx);
              }}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "30px",
                margin: "5px",
                backgroundColor: cicleIdx < circle + 1 ? "#ddd" : "khaki",
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
  margin: 42px 0px 0px 0px;
  color: gray;
`;

const Days = styled.span`
  color: #fff;
  font-weight: 900;
  background: #40e0d0;
  padding: 0.5rem;
  border-radius: 15px;
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
  background-color: #40e0d0;
  border: none;
  border-radius: 19px;
  padding: 1rem;
  color: rgb(255, 255, 255);
  max width: 10px;
  font-size: 20px;
  font-weight: 700;
`;

export default Review;
