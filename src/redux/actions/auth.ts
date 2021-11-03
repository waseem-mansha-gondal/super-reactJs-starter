import { AppDispatch } from "../store";
import API from "../../utils/axiosConfig";
import { LoginCredProps, UserProps, SignupCredProps } from "../../interfaces";
import { loginSuccess } from "../reducers/auth";

export const login =
  (data: LoginCredProps) => async (dispatch: AppDispatch) => {
    try {
      const response = await API.get("/auth");
      let users: Array<UserProps> = response.data as Array<UserProps>;
      users = users.filter(
        (item) => item.email === data.email && item.password === data.password
      );

      if (users.length > 0) {
        dispatch(loginSuccess(users[0]));
        return { success: true, data: users[0] };
      }
      return { success: false, data: null };
    } catch (error) {
      return { success: false, data: null };
    }
  };
export const signup =
  (data: SignupCredProps) => async (dispatch: AppDispatch) => {
    try {
      const response = await API.post("/auth", data);
      const user: UserProps = response.data as UserProps;

      if (user) {
        dispatch(loginSuccess(user));
        return { success: true, data: user };
      }

      return { success: false, data: null };
    } catch (error) {
      return { success: false, data: null };
    }
  };
