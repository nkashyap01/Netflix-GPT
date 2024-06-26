import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdFavorite } from "react-icons/md";
import { setIsLogin } from "../utils/moviesSlice";

const Header = ({ showSignOutButton }) => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const watchlistMovies = useSelector((state) => state.movies.watchlistMovies);

  const { isLogin } = useSelector((store) => store.movies);


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
       dispatch(setIsLogin(false));
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSearchClick = () => {
    navigate("/search/" + searchText);
  };

  console.log(watchlistMovies);

  return (
    <div className=" absolute px-8 py-2 bg-gradient-to-b from-black w-full z-20 flex justify-between items-center">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        className="w-44"
      />
      {isLogin ? (
        <div className="text-white">
          <p>search</p>
          <p>wishlist</p>
          <p>sign out</p>
        </div>
      ) : (
        <div className="text-white">
          <p>sign in</p>
          <p>sign up</p>
        </div>
      )}

      {/* <div className="flex">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className=" border-2 border-black"
        />
        <button
          onClick={handleSearchClick}
          className="rounded-md p-2 text-white"
        >
          Search
        </button>
      </div> */}
      {/* <Link to="/watchlist">
        <div className="flex justify-center items-center bg-red-700  rounded-md p-2 gap-2">
          <button className="  text-white"> My Watchlist</button>
          <MdFavorite className="text-2xl" />
          <span> {watchlistMovies.length}</span>
        </div>
      </Link> */}

      {showSignOutButton && (
        <div>
          <button className="bg-red-700 p-2 rounded-md" onClick={handleSignOut}>
            {" "}
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
