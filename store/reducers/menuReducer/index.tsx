interface Action {
  type: string;
  payload: { isShow: boolean };
}

const MenuReducer = (state = {}, action: Action) => {
  // console.log("action", action);
  switch (action.type) {
    case "is_show":
      return action.payload;
    default:
      return state;
  }
};

export default MenuReducer;
