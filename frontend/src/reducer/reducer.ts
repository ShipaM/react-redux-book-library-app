const initialState: string[] = [];

export const reducer = (
  state = initialState,
  action: { type: string; payload?: string }
) => {
  switch (action.type) {
    case "ADD_NAME":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((item) => item !== action.payload);
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

export let newState = reducer(initialState, {
  type: "ADD_NAME",
  payload: "Maksym",
});

newState = reducer(initialState, {
  type: "REMOVE",
  payload: "Maksym",
});

newState = reducer(initialState, {
  type: "ADD_NAME",
  payload: "Yura",
});

newState = reducer(initialState, {
  type: "ADD_NAME",
  payload: "Sam",
});

newState = reducer(initialState, {
  type: "CLEAR",
  payload: "",
});

newState = reducer(initialState, {
  type: "ADD_NAME",
  payload: "Yura",
});

newState = reducer(initialState, {
  type: "ADD_NAME",
});
