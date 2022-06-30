import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../app/authenticationSlice";
import './nav_bar.css'

const Nav_bar = () => {
  const { isLoggedIn } = useSelector((state) => state.authenticationSlice);
  const dispatch = useDispatch();

  return (
    <nav className="nav_bar">
      <h1 className="zdrive">ZDrive</h1>
      {isLoggedIn ? (
        <button
          className="signinbutton"
          href="/signin"
          
          onClick={() => {
            dispatch(logout());
            window.location.reload();
          }}
        >
          Log out
        </button>
      ) : (
        <div className="divstyle">
          <NavLink to="/signup" className="signupnavlink">Sign up</NavLink>
          <NavLink to="/signin" className="signinnavlink">
            Sign in
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Nav_bar;
