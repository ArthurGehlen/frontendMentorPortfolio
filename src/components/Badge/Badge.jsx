// Utils
import "./Badge.css";

import html_icon from "../../assets/html_icon.svg";
import css_icon from "../../assets/css_icon.svg";
import api_icon from "../../assets/api_icon.svg";
import json_icon from "../../assets/json_icon.svg";
import scss_icon from "../../assets/scss_icon.svg";
import react_icon from "../../assets/react_icon.svg";
import js_icon from "../../assets/js_icon.svg";

const ICONS = {
  html: html_icon,
  css: css_icon,
  javascript: js_icon,
  scss: scss_icon,
  react: react_icon,
  api: api_icon,
  json: json_icon,
};

const Badge = ({ label, variant }) => {
  const icon = ICONS[variant];

  return (
    <span className={`badge ${variant || ""}`}>
      {icon && <img src={icon} alt={`${label} icon`} width="30%" />}
      {label}
    </span>
  );
};

export default Badge;
