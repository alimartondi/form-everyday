import React from "react";
import { Calendar } from "react-multi-date-picker";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { submitStudentForm } from "../redux/cateringOrderSlice";
import { Controller, useForm } from "react-hook-form";
import Header from "./layout/Header";

export default function StudentForm() {
  const a = useSelector((state) => state.cateringOrder.studentName);
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      studentName: a,
    },
  });

  let navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(useSelector((state) => state));

  const handleSubmission = (data) => {
    console.log(data);
    console.log(data.date[0]?.format?.("MMMM D YYYY"));
    dispatch(submitStudentForm(data));
    navigate("../menu");
  };

  return (
    <>
      <Header />
      <form
        onSubmit={handleSubmit(handleSubmission)}
        className="font-verlag-regular text-eggplant"
      >
        <div className="container py-5 px-3">
          <div className="row mb-5">
            <div className="col-md-7 mb-4 mb-md-0">
              <div className="row">
                <div className="col-lg-12 mb-3">
                  <h2 className="text-uppercase font-verlag-black text-eggplant">
                    Student Details
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="studentName">Student&apos;s Name</label>
                    <input
                      type="text"
                      id="studentName"
                      className="form-control rounded-0"
                      {...register("studentName")}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="studentSchool">School</label>
                    <input
                      type="text"
                      id="studentSchool"
                      className="form-control rounded-0"
                      {...register("studentSchool")}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="studentClass">Class</label>
                    <input
                      type="text"
                      id="studentClass"
                      className="form-control rounded-0"
                      {...register("studentClass")}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="studentAlergy">Alergy</label>
                    <input
                      type="text"
                      id="studentAlergy"
                      className="form-control rounded-0"
                      {...register("studentAlergy")}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="studentAge">Age</label>
                    <input
                      type="text"
                      id="studentAge"
                      className="form-control rounded-0"
                      {...register("studentAge")}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="studentParents">Parents</label>
                    <input
                      type="text"
                      id="studentParents"
                      className="form-control rounded-0"
                      {...register("studentParents")}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="studentEmail">Email</label>
                    <input
                      type="email"
                      id="studentEmail"
                      className="form-control rounded-0"
                      {...register("studentEmail")}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="studentPhone">Phone Number</label>
                    <input
                      type="text"
                      id="studentPhone"
                      className="form-control rounded-0"
                      {...register("studentPhone")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 d-none d-lg-flex justify-content-end">
              <span style={{ borderRight: "3px dotted #5e4659" }} />
            </div>
            <div className="col-md-4 font-verlag-regular text-eggplant">
              <div className="mx-auto" style={{ width: "fit-content" }}>
                <p className="ms-3">Please pick your meal plan dates:</p>
                <Controller
                  control={control}
                  name="date"
                  render={({ field: { onChange, name, value } }) => (
                    <Calendar
                      value={value || []}
                      onChange={(date) => {
                        console.log(date);
                        onChange(date);
                      }}
                      format={"en" ? "MM/DD/YYYY" : "YYYY/MM/DD"}
                      shadow={false}
                      multiple
                      buttons={false}
                      hideYear={true}
                      className="c-calendar border-0 bg-transparent w-100 p-0"
                    />
                  )}
                />
                <p className="ms-3">Total number of days : 3 Day(s)</p>
                <p>
                  Submitted Date: {handleSubmission?.format?.("MMMM D YYYY")}
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-sm-4">
              <button type="submit" className="btn main-button w-100 me-2">
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* <div className="container">
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
              <form
                id="myform"
                onSubmit={handleSubmit(handleSubmission)}
                className="font-verlag-regular text-eggplant"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="studentName">Student&apos;s Name</label>
                      <input
                        type="text"
                        name="studentName"
                        id="studentName"
                        className="form-control rounded-0"
                        {...register("studentName")}
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
            <Controller
              control={control}
              name="date"
              render={({ field: { onChange, name, value } }) => (
                <Calendar
                  value={value || []}
                  onChange={(date) => {
                    console.log(date);
                    onChange(date);
                  }}
                  format="DD/MM/YYYY"
                  shadow={false}
                  multiple={true}
                  buttons={true}
                  className="border-0 bg-transparent rmdp-mobile w-100 rmdp-calendar p-0"
                />
              )}
            ></Controller>
          </div>
          <div>
            <button
              type="submit"
              className="btn main-button w-100 me-2"
              form="myform"
            >
              Next
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}
