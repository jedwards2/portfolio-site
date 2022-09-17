import Header from "../Header";
import ProfileContent from "../ProfileContent";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";
import "../../index.css";
import "./profile.css";

function ProfilePage() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme ? "dark" : "light"}`}>
      <Header />
      <ProfileContent />
    </div>
  );
}

export default ProfilePage;
