export const addUser = (user) => {
  console.log("111");
  return (dispatch) => {
    dispatch({
      type: "adduser",
      payload: user,
    });
  };
};

export const deleteUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: "deleteuser",
      payload: user,
    });
  };
};
