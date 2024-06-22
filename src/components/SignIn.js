import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/regex";

import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMG_LOGO_URL } from "../utils/constant";

const SignIn = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;

  const [showLearn, setShowLearn] = useState(false);
  const [emailPhoneInput, setEmailPhoneInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [PasswordInput, setPasswordInput] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [inputType, setInputType] = useState("password");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(emailPhoneInput)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }

    if (!validatePassword(PasswordInput)) {
      setPasswordError("Please enter your password.");
    } else {
      setPasswordError("");
    }

    if (
      pathname === "/signup" &&
      validateEmail(emailPhoneInput) &&
      validatePassword(PasswordInput)
    ) {
      createUserWithEmailAndPassword(auth, emailPhoneInput, PasswordInput)
        .then((userCredential) => {
          updateProfile(userCredential?.user, {
            displayName: nameInput,
            photoURL: nameInput[0],
          })
            .then(() => {
              dispatch(
                addUser({
                  email: auth.currentUser.email,
                  uid: auth.currentUser.uid,
                  displayName: auth.currentUser.displayName,
                  photoURL: auth.currentUser.photoURL,
                })
              );
            })
            .catch((error) => {
              console.log(error.message);
            });

          console.log(auth.currentUser);

          setEmailPhoneInput("");
          setPasswordInput("");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      if (validateEmail(emailPhoneInput) && validatePassword(PasswordInput)) {
        signInWithEmailAndPassword(auth, emailPhoneInput, PasswordInput)
          .then((userCredential) => {
            setEmailPhoneInput("");
            setPasswordInput("");
          })
          .catch((error) => {
            setPasswordError("User credentials are wrong");
          });
      }
    }
  };

  return (
    <div className="">
      <div>
        <img
          src={BACKGROUND_IMG_LOGO_URL}
          alt="home-logo"
          className="h-screen w-full brightness-50 blur-[3px] "
          draggable={false}
        />
      </div>
      <div className=" bg-black text-white w-[500px] h-[650px] rounded-lg absolute top-1/2  left-1/2 -translate-y-[55%] -translate-x-1/2 bg-opacity-70 mt-20  ">
        <div className="p-12">
          <div className="text-3xl mb-5 font-bold">
            {pathname === "/signup" ? "Sign Up" : "Sign In"}
          </div>
          <div className="">
            <form className=" flex flex-col gap-5" onSubmit={handleSubmit}>
              {pathname === "/signup" ? (
                <input
                  placeholder="Name"
                  className="w-full h-14 p-2 outline-none  border rounded-lg bg-gray-800 bg-opacity-10 "
                  value={nameInput}
                  required
                  autoComplete="on"
                  onChange={(e) => setNameInput(e.target.value)}
                />
              ) : (
                <></>
              )}
              <div className="">
                <input
                  placeholder="Email address"
                  className="w-full h-14 p-2 outline-none  border rounded-lg bg-gray-800 bg-opacity-10 "
                  value={emailPhoneInput}
                  required
                  autoComplete="on"
                  onChange={(e) => setEmailPhoneInput(e.target.value)}
                />
                {emailError !== null && (
                  <p className="text-red-500">{emailError}</p>
                )}
              </div>
              <div className="flex border rounded-lg bg-gray-800 bg-opacity-10 items-center ">
                <input
                  placeholder="Password"
                  className="w-full h-14 p-2 outline-none  bg-gray-800 bg-opacity-10 "
                  value={PasswordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  required
                  autoComplete="on"
                  type={inputType}
                />
                <div
                  className=" cursor-pointer text-center px-2"
                  onClick={() => {
                    if (inputType === "password") {
                      setInputType("text");
                    } else setInputType("password");
                  }}
                >
                  {inputType === "password" ? "Show" : "Hide"}
                </div>
              </div>
              {passwordError !== null && (
                <p className="text-red-500 -mt-4">{passwordError}</p>
              )}
              <button
                className="bg-red-700 hover:bg-red-800 p-2    rounded-lg text-2xl  font-bold"
                type="submit"
              >
                {pathname === "/signup" ? "Sign Up" : "Sign In"}
              </button>
            </form>
          </div>

          <div className=" mt-10 text-gray-500 ">
            {pathname === "/signup" ? (
              <div className="flex gap-2 mb-2">
                <p>Already have an account?</p>
                <Link to="/signin">
                  <span className="cursor text-white hover:underline">
                    Sign in now
                  </span>
                </Link>
              </div>
            ) : (
              <div className="flex gap-2 mb-2">
                <p>New to Netflix?</p>
                <Link to="/">
                  <span className="cursor text-white hover:underline">
                    Sign up now
                  </span>
                </Link>
              </div>
            )}

            <div className="text-sm ">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              {/*  */}
              {showLearn === true ? (
                <p>
                  The information collected by Google reCAPTCHA is subject to
                  the Google{" "}
                  <a
                    href={"https://policies.google.com/privacy"}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-sky-700  hover:underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href={"https://policies.google.com/terms"}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-sky-700  hover:underline"
                  >
                    Terms of Service
                  </a>
                  , and is used for providing, maintaining, and improving the
                  reCAPTCHA service and for general security purposes (it is not
                  used for personalised advertising by Google).
                </p>
              ) : (
                <span
                  className="cursor-pointer text-sky-700  hover:underline"
                  onClick={() => setShowLearn(true)}
                >
                  Learn more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
