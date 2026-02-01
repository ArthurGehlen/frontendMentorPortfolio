// Utils
import "./Header.css";

// Images
import user_img from "../../assets/user.png";
import github_icon from "../../assets/github_icon.svg";

const Header = () => {
  return (
    <header>
      <div className="user_area">
        <img src={user_img} alt="Avatar" />
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
