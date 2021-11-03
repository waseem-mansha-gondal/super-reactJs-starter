import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Signup from "../../components/signup";
import Notification from "../../components/notification";
import { signup } from "../../redux/actions/auth";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { SignupCredProps } from "../../interfaces";

interface NotificationProps {
  open: boolean;
  message: string;
  severity: "error" | "success";
}

const SignupContainer = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = React.useState<NotificationProps>({
    open: false,
    message: "",
    severity: "success",
  });

  const handleClose = () => {
    setNotification({ open: false, message: "", severity: "success" });
  };

  const onSubmit = async (data: SignupCredProps) => {
    setLoading(true);
    const response = await dispatch(signup(data));
    if (response.success) {
      history.push("/dashboard");
    } else {
      setNotification({
        open: true,
        message: "Signup Failed!",
        severity: "error",
      });
      setLoading(false);
    }
  };

  return (
    <>
      {" "}
      <Signup onSubmit={onSubmit} loading={loading} />
      <Notification
        open={notification.open}
        message={notification.message}
        severity={notification.severity}
        handleClose={handleClose}
      />
    </>
  );
};
export default SignupContainer;
