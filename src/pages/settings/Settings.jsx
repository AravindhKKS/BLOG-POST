import "./settings.css";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label> Profile Picture</label>
          <div className="settingsPP">
            <img
              className="settingsImg"
              src="https://cdn-images.zety.com/pages/how_to_write_web_developer_resume.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none   " }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Aravinth" />
          <label>Email</label>
          <input type="email" placeholder="aravinthnatarajan16@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
