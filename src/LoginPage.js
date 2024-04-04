import React from "react";
import { useNavigate } from "react-router-dom";
import Main from "./components/Main";
import "./styles/SignUpPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/sign-up");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/confirmation");
  };

  return (
    <Main>
      <section className="reservation"  aria-labelledby="login-heading">
        <button className="button-back" onClick={handleBack}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#495E57" />
            <path
              d="M18.12 17.46C18.52 17.04 18.68 16.66 18.68 16.36C18.68 15.74 18.1 15.36 17.5 15.36C17.16 15.36 16.82 15.48 16.54 15.78L13.56 18.8C13.16 19.2 12.96 19.74 12.96 20.24C12.96 20.76 13.16 21.26 13.54 21.66L16.5 24.64C16.78 24.92 17.14 25.04 17.46 25.04C18.06 25.04 18.64 24.66 18.64 24.06C18.64 23.74 18.5 23.36 18.1 22.94L16.7 21.52H27.02C27.68 21.52 28.22 20.98 28.22 20.28C28.22 19.62 27.68 19.08 27.02 19.08H16.54L18.12 17.46Z"
              fill="white"
            />
          </svg>
          Back
        </button>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div>
            {" "}
            <label htmlFor="username">
              Username<span className="required"> *</span>
            </label>
            <input type="text" id="username" name="usernameF" required />
          </div>

          <div>
            {" "}
            <label htmlFor="password">
              Password<span className="required"> *</span>
            </label>
            <input type="password" id="password" name="password" required />
          </div>

          <div className="form-group">
            <label className="custom-radio">
              Keep me signed in on this device
              <input
                type="radio"
                id="signedIn"
                name="signedInStatus"
                value="signedIn"
              />
              <span className="checkmark"></span>
            </label>
          </div>

          <input type="submit" className="submit" value="Reserve" />
        </form>

        <div className="social-container">
          <p>or sign up with</p>
          <div>
            <a
              href="https://www.facebook.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_7_893)">
                  <path
                    d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M33.3422 30.9375L34.4062 24H27.75V19.5C27.75 17.602 28.68 15.75 31.6613 15.75H34.6875V9.84375C34.6875 9.84375 31.9411 9.375 29.3152 9.375C23.8331 9.375 20.25 12.6975 20.25 18.7125V24H14.1562V30.9375H20.25V47.7084C22.7349 48.0972 25.2651 48.0972 27.75 47.7084V30.9375H33.3422Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7_893">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              href="https://www.google.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_7_1044)">
                  <path
                    d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                    fill="#34A853"
                  />
                  <path
                    d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7_1044">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Main>
  );
}

export default LoginPage;
