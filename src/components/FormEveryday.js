import React, { useState } from "react";
import StudentForm from "./StudentForm";
import MenuForm from "./MenuForm";
import Summary from "./Summary";

export default function FormEveryday() {
  const [page, setPage] = useState(0);

  const FormTitle = ["StudentForm", "MenuForm", "Summary", "Thankyou"];

  const Page = () => {
    if (page === 0) {
      return <StudentForm />;
    } else if (page === 1) {
      return <MenuForm />;
    } else {
      return <Summary />;
    }
  };

  return (
    <div className="container px-4 py-5">
      <div className="mb-5">{Page()}</div>
      <div className="row">
        <div className="col-lg-4 d-flex justify-content-between mx-auto font-verlag-regular">
          <button
            disabled={page === FormTitle.length - 1}
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
            }}
            className="btn main-button w-100 me-2"
          >
            Prev
          </button>
          <button
            onClick={() => {
              setPage((currentPage) => currentPage + 1);
            }}
            className="btn main-button w-100"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
