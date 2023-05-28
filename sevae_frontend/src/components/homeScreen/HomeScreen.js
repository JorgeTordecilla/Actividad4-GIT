import { useDispatch } from "react-redux";
import "./homeScreen.css";

import { startLogout } from "../../actions/authActions";
export const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className="home-container">
      <div className="logo-container">
        <img src="/assets/sevae_logo.png" alt="Logo"></img>
      </div>

      <div className="grid-container">
        <div className="grid-item">
          <div className="icon-container">
            <img src="/assets/student.png" alt="student" id="student"></img>
          </div>
          <h6>Register new student</h6>
        </div>
        <div className="grid-item">
          <div className="icon-container">
            <img src="/assets/keyboard.png" alt="student" id="student"></img>
          </div>
          <h6>Manual student access</h6>
        </div>
        <div className="grid-item">
          <div className="icon-container">
            <img src="/assets/gears.png" alt="student" id="student"></img>
          </div>
          <h6>School params</h6>
        </div>
        <div className="grid-item">
          <div className="icon-container">
            <img
              src="/assets/arrow.png"
              alt="student"
              id="student"
              onClick={handleLogout}
            ></img>
          </div>
          <h6>Logout</h6>
        </div>
      </div>

      <div className="waves-container">
        <img src="/assets/waves.png" alt="child sevae"></img>
      </div>

      <div className="h2-container ">
        <p className="h1-corner">
          SEVAE
          <span>SAFETY EDUCATION INNOVATION</span>
        </p>
      </div>
      <div className="image-container">
        <img
          src="/assets/girl_image.png"
          alt="girl sevae"
          id="girl_image"
        ></img>
      </div>
    </div>
  );
};
