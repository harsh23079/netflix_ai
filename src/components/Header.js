import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const userInfoSubscribe = useSelector((store) => store.user);

  const handleClick = () => {
    navigate(`signin`);
  };
  const handleClickSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <div className="w-full bg-gradient-to-r from-black z-10 absolute flex justify-between items-center text-white">
      <div className="">
        <img
          src={LOGO_URL}
          alt="netflix-logo"
          className="h-20 relative lg:left-10   "
        />
      </div>
      {}
      <div className=" ">
        {window.location.pathname === "/" ? (
          <div className="px-32">
            <button
              className="bg-red-600 hover:bg-red-800 p-2 px-4   rounded-lg "
              onClick={handleClick}
            >
              Sign In
            </button>
          </div>
        ) : userInfoSubscribe === null ? (
          <></>
        ) : (
          <div className="w-[950px]">
            <div className="text-white flex items-center justify-between  ">
              <div className="flex gap-4 text-sm">
                <Link>Home</Link>
                <Link>TV Shows</Link>
                <Link>Movies</Link>
                <Link>New & Popular</Link>
                <Link>My List</Link>
                <Link>Browse by Languages</Link>
              </div>

              <div className="mr-10 flex gap-3">
                <div className="bg-red-600 rounded-full p-2 px-4">
                  {userInfoSubscribe?.photoURL}
                </div>
                <button
                  className="bg-red-600 hover:bg-red-800 p-2 px-4   rounded-lg "
                  onClick={handleClickSignOut}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
