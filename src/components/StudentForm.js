import React from "react";

export default function StudentForm() {
  return (
    <section>
      <div className="container-xxl px-5">
        <div className="row">
          <div className="col-lg-7">
            <div className="row">
              <div className="col-lg-12">
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
                      <label htmlFor="studentName">School</label>
                      <input
                        type="text"
                        name="studentSchool"
                        id="studentSchool"
                        className="form-control rounded-0"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="studentName">Class</label>
                      <input
                        type="text"
                        name="studentClass"
                        id="studentClass"
                        className="form-control rounded-0"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="studentName">Alergy</label>
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
                      <label htmlFor="studentAge">Parents</label>
                      <input
                        type="text"
                        name="studentParents"
                        id="studentParents"
                        className="form-control rounded-0"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="studentAge">Email</label>
                      <input
                        type="email"
                        name="studentEmail"
                        id="studentEmail"
                        className="form-control rounded-0"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="studentAge">Phone Number</label>
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
            <span className="border-end"></span>
          </div>
          <div className="col-lg-4">
            <p>Please pick your meal plan dates</p>
          </div>
        </div>
      </div>
    </section>
  );
}
