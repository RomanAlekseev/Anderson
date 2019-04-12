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
        "https://gorest.co.in/public-api/users?_format=json&access-token=Kct4AxW6n6XjUJ8w3Q1NrIF6rHw2dJCWk_Iy"
      );
      const json = await response.json();
      dispatch(receiveUsers(json));
      console.log(json);
      return json;
    };

    return request();
  };
}
