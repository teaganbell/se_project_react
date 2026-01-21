import "./SideBar.css";
import avatarDefault from "../../images/avatar.jpg";

export default function SideBar() {
  const userName = "Teagan Bell";

  return (
    <aside className="sidebar">
      <div className="sidebar__user-container">
        <p className="sidebar__username">{userName}</p>
        <img
          src={avatarDefault}
          alt="User avatar"
          className="sidebar__avatar"
        />
      </div>
    </aside>
  );
}
