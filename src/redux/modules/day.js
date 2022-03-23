// day.js

// Actions
const CREATE = "day/CREATE";

const initialState = { item: ["월", "화", "수", "목", "금", "토", "일"] };

// Action Creators
export function createDay(day) {
  console.log("액션을 생성할거야!");
  return { type: CREATE, day: day };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "day/CREATE": {
      console.log("이제 값을 바꿀거야!");
      const new_day_list = [...state.list, action.day];
      return { list: new_day_list };
    }
    // do reducer stuff
    default:
      return state;
  }
}
