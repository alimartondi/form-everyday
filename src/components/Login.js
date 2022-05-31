import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="vh-100 position-relative">
      <div className="container h-100 d-flex align-items-center p-5">
        <div className="row w-100">
          <div className="col-lg-10 mx-auto">
            <div className="row">
              <div className="col-lg-5 bg-eggplant">
                <div className="w-100 h-100"></div>
              </div>
              <div
                className="col-lg-7 bg-gray font-verlag-regular text-eggplant"
                style={{ height: "600px" }}
              >
                <form
                  action=""
                  className="login-form d-flex flex-column justify-content-center py-5 px-5 h-100"
                >
                  <h1 className="font-verlag-black mb-4">
                    Log into your Account
                  </h1>

                  <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control rounded-0" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control rounded-0" />
                  </div>
                  <div className="d-flex justify-content-between mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Remember me!
                      </label>
                    </div>
                    <small>Forgot password?</small>
                  </div>
                  <button
                    className="btn main-button py-2 px-5 mb-4 text-sm"
                    style={{ width: "fit-content" }}
                  >
                    Login
                  </button>
                  <div className="d-flex justify-content-between">
                    <small>
                      Don&apos;t have an account?{" "}
                      <Link to="/register">Register</Link>
                    </small>
                    <small>Term and conditions?</small>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
