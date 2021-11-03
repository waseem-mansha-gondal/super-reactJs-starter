import React from "react";
import ProfileComponent from "../../components/profile";
import { useAppSelector } from "../../hooks/reduxHooks";
import { selectUser } from "../../redux/reducers/auth";

const Profile: React.FC = (): JSX.Element => {
  const user = useAppSelector(selectUser);
  return (
    <>
      <ProfileComponent user={user} />
    </>
  );
};

export default Profile;
