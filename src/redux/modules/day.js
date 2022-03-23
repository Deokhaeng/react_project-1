// day.js

// Actions
// const UPDATE = "my-app/widgets/UPDATE";
// const REMOVE = "my-app/widgets/REMOVE";
// const LOAD = "my-app/widgets/LOAD";
const CREATE = "day/CREATE";

const initialState = { list: ["월", "화", "수", "목", "금", "토", "일"] };

// Action Creators
export function createDay(day) {
  console.log("액션을 생성할거야!");
  return { type: CREATE, day: day };
}

// export function loadWidgets() {
//   return { type: LOAD };
// }

// export function createWidget(widget) {
//   // {widget: widget} == {widget}
//   return { type: CREATE, widget };
// }

// export function updateWidget(widget) {
//   return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
//   return { type: REMOVE, widget };
// }

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

// // side effects, only as applicable
// // e.g. thunks, epics, etc
// export function getWidget() {
//   return (dispatch) =>
//     get("/widget").then((widget) => dispatch(updateWidget(widget)));
// }
