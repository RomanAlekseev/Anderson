import { RECEIVE_USERS } from "../constants/actionTypes";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    payload: users
  };
}

export function fetchUsers() {
  return dispatch => {
    const request = async () => {
      const response = await fetch(
        "https://gorest.co.in/public-api/users?_format=json&access-token=jJsV0jMYeVYoDGkhXbDQ_QgSuMztzCIKjto2"
      );
      const json = await response.json();
      dispatch(receiveUsers(json));
      console.log(json);
      return json;
    };

    return request();
  };
}
