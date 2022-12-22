// Reducer has the business logic for action type
export const reducer = (state = {}, action) => {
  if (action.type === "adduser") {
    console.log("222");
    return { users: [...state.users, action.payload] };
  } else if (action.type === "deleteuser") {
    return { users: [] };
  } else {
    return { users: [...state.users] };
  }
};
