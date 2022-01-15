interface Action {
  type: string;
  payload: { News: number };
}

const NewsRefReducer = (state = {}, action: Action) => {
  console.log("action", action);

  switch (action.type) {
    case "news_ref":
      return action.payload;
    default:
      return state;
  }
};

export default NewsRefReducer;
