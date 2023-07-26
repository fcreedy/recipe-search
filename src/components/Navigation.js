import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleInfo,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <div className="nav-bar w-16 h-[100vh] bg-blue-black fixed top-0 left-0 p-3 flex flex-col justify-start">
      <nav className="mb-auto text-2xl">
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon
            icon={faHouse}
            className="my-5 w-full text-white hover:text-apple-yellow"
            title="Home"
          />
        </NavLink>

        <NavLink exact="true" activeclassname="active" to="/about">
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="my-5 w-full text-white hover:text-apple-yellow"
            title="About"
          />
        </NavLink>

        <NavLink exact="true" activeclassname="active" to="/contact">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="my-5 w-full text-white hover:text-apple-yellow"
            title="Contact"
          />
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
