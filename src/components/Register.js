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
                  className="register-form d-flex flex-column justify-content-center py-5 px-5 h-100"
                >
                  <h1 className="font-verlag-black mb-4">Create an Account</h1>
                  <div className="mb-3">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" className="form-control rounded-0" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control rounded-0" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control rounded-0" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control rounded-0" />
                  </div>
                  <button
                    className="btn main-button py-2 px-5 mb-4 text-sm"
                    style={{ width: "fit-content" }}
                  >
                    Register
                  </button>
                  <div className="d-flex justify-content-between">
                    <small>
                      Already have an account? <Link to="/login">Login</Link>
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
