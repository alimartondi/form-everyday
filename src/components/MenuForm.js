import React from "react";

export default function MenuForm() {
  return (
    <div className="row">
      <div className="col-lg-4">
        <h5>Calendar goes here</h5>
      </div>
      <div className="col-lg-1 d-flex justify-content-center">
        <span className="border-end"></span>
      </div>
      <div className="col-lg-7">
        <div className="row mb-5">
          <div className="col-lg-6">
            <p>Pick your cusine for Wed, 16 March 2022</p>
          </div>
          <div className="col-lg-6">
            <select
              name="cusineSelectOption"
              id="cusineSelectOption"
              className="form-select rounded-0"
              aria-label="cusineSelectOption"
            >
              <option value="Indian">Indian</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Thailand">Thailand</option>
            </select>
          </div>
        </div>
        <div className="row border-top">
          <div className="col-lg-12">
            <div className="row pt-4">
              <h5>Main Dish</h5>
              <p>Please pick one (1) from oprions below</p>
            </div>
            <div className="row">
              {foodMenu.map((data, i) => (
                <CardMenu
                  key={data.id}
                  name={data.main.foodName}
                  cuisine={data.cuisine}
                />
              ))}
              {/* <div className="col-lg-6">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="maindishMenu"
                    id="mainDishMenu2"
                  />
                  <label class="form-check-label" htmlFor="mainDishMenu2">
                    Food name
                  </label>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardMenu(props) {
  return (
    <div className="col-lg-6">
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="maindishMenu"
          id={props.id}
        />
        <label className="form-check-label" htmlFor="mainDishMenu1">
          {props.main.foodName}
        </label>
      </div>
      <div className="d-flex">
        <div className="ps-4">
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <h6>{props.cuisine}</h6>
        </div>
        <div className="d-flex flex-column align-items-center">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              />
            </svg>
          </button>
          <span>1</span>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

const foodMenu = [
  {
    id: 1,
    cuisine: "indonesia",
    main: [
      {
        id: 12,
        fodName: "Seblak",
        description: "Lorem ipsum dolor sit amet.",
        price: "12000",
      },
      {
        id: 22,
        fodName: "Seblak",
        description: "Lorem ipsum dolor sit amet.",
        price: "12000",
      },
    ],
  },
  {
    id: 2,
    cuisine: "india",
    Snack: [
      {
        id: 23,
        name: "Seblak",
        description: "Lorem ipsum dolor sit amet.",
        price: "12000",
      },
      {
        id: 4,
        name: "Seblak",
        description: "Lorem ipsum dolor sit amet.",
        price: "12000",
      },
    ],
  },
];
