import React from "react";
import { Calendar } from "react-multi-date-picker";

export default function StudentForm() {
  return (
    <div className="row pt-5">
      <div className="col-lg-7">
        <div className="row">
          <div className="col-lg-12 mb-3">
            <h2 className="text-uppercase font-verlag-black text-eggplant">
              Student Details
            </h2>
          </div>
        </div>
        <div className="row">
          <form action="" className="font-verlag-regular text-eggplant">
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label htmlFor="studentName">Student&apos;s Name</label>
                  <input
                    type="text"
                    name="studentName"
                    id="studentName"
                    className="form-control rounded-0"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="studentSchool">School</label>
                  <input
                    type="text"
                    name="studentSchool"
                    id="studentSchool"
                    className="form-control rounded-0"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="studentClass">Class</label>
                  <input
                    type="text"
                    name="studentClass"
                    id="studentClass"
                    className="form-control rounded-0"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="studentAlergy">Alergy</label>
                  <input
                    type="text"
                    name="studentAlergy"
                    id="studentAlergy"
                    className="form-control rounded-0"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label htmlFor="studentAge">Age</label>
                  <input
                    type="text"
                    name="studentAge"
                    id="studentAge"
                    className="form-control rounded-0"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="studentParents">Parents</label>
                  <input
                    type="text"
                    name="studentParents"
                    id="studentParents"
                    className="form-control rounded-0"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="studentEmail">Email</label>
                  <input
                    type="email"
                    name="studentEmail"
                    id="studentEmail"
                    className="form-control rounded-0"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="studentPhone">Phone Number</label>
                  <input
                    type="text"
                    name="studentPhone"
                    id="studentPhone"
                    className="form-control rounded-0"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-1 d-flex justify-content-center">
        <span style={{ borderRight: "3px dotted #5e4659" }} />
      </div>
      <div className="col-lg-4 font-verlag-regular text-eggplant">
        <p>Please pick your meal plan dates:</p>
        <Calendar
          shadow={false}
          multiple={true}
          buttons={false}
          className="border-0 bg-transparent rmdp-mobile w-100 rmdp-calendar p-0"
        />
      </div>
    </div>
  );
}
