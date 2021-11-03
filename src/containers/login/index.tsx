import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Login from "../../components/login";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { login } from "../../redux/actions/auth";
import { LoginCredProps } from "../../interfaces";
import Notification from "../../components/notification";

interface NotificationProps {
  open: boolean;
  message: string;
  severity: "error" | "success";
}

const LoginContainer = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [notification, setNotification] = React.useState<NotificationProps>({
    open: false,
    message: "",
    severity: "error",
  });

  const handleClose = () => {
    setNotification({ open: false, message: "", severity: "error" });
  };

  const onSubmit = async (data: LoginCredProps) => {
    setLoading(true);
    const response = await dispatch(login(data));
    if (response.success) {
      history.push("/dashboard");
    } else {
      setNotification({
        open: true,
        message: "Login Failed!",
        severity: "error",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Login onSubmit={onSubmit} loading={loading} />
      <Notification
        open={notification.open}
        message={notification.message}
        severity={notification.severity}
        handleClose={handleClose}
      />
    </>
  );
};

export default LoginContainer;
