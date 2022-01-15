interface Action {
  type: string;
  payload: { index: number };
}

const SliderIndexReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case "pic_index":
      return action.payload;
    default:
      return state;
  }
};

export default SliderIndexReducer;
