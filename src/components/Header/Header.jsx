// Utils
import "./Header.css";
import { get_user_profile_picture } from "../../api/github";

// Images
import github_icon from "../../assets/github_icon.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [userAvatar, setUserAvatar] = useState("");

  const get_avatar = async () => {
    const pic = await get_user_profile_picture();
    setUserAvatar(pic);
  };

  useEffect(() => {
    get_avatar();
  }, []);

  return (
    <header>
      <div className="user_area">
        <img src={userAvatar} alt="Avatar" />
        <h2>Frontend Mentor Projects — Arthur Gehlen</h2>
      </div>
      <div className="git_img_container">
        <a href="https://github.com/ArthurGehlen" target="_blank">
          <img src={github_icon} alt="Github" />
        </a>
      </div>
    </header>
  );
};

export default Header;
