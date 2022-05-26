import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./layout/Header";

export default function Summary() {
  // const dispatch = useDispatch();
  const cateringOrder = useSelector((state) => state.cateringOrder);
  console.log({ cateringOrder });
  const navigate = useNavigate();

  const handleSubmission = () => {
    // dispatch(submitStudentForm({ studentName: "Ali", age: 26 }));
    navigate("../thankyou");
  };

  const summaryDataReal = [
    {
      title: `Student's name`,
      value: cateringOrder.studentName,
    },
    {
      title: "Age",
      value: cateringOrder.age,
    },
    {
      title: "School detail",
      value: cateringOrder.school,
    },
    {
      title: "Class",
      value: cateringOrder.class,
    },
    {
      title: "Alergy",
      value: cateringOrder.alergy,
    },
    {
      title: "Parent's name",
      value: cateringOrder.parents,
    },
    {
      title: "E-mail",
      value: cateringOrder.email,
    },
    {
      title: "Phone number",
      value: cateringOrder.phone,
    },
  ];

  return (
    <>
      <Header />
      <div className="container py-5 px-3">
        <div className="row mb-5">
          <div className="col-lg-12">
            <h2 className="main-title text-eggplant text-uppercase">
              Order Summary
            </h2>
            <p className="font-verlag-regular text-eggplant">
              Please check your order. Your order will be delivered to the
              school&apos;s canteen and should arrive X hour before the school
              lunch time
            </p>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-4 mb-4 mb-md-0">
            <table className="table table-borderless font-verlag-regular text-eggplant">
              <tbody>
                {summaryDataReal.map((data, i) => (
                  <tr key={i} className="boder-0">
                    <td>{data.title}</td>
                    <td>:</td>
                    <td>{data.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-1 d-flex justify-content-center">
            <span className="border-end"></span>
          </div>
          <div className="col-lg-7">
            {invoice.map((data, i) => (
              <table
                className="table table-borderless border-bottom py-3 font-verlag-regular text-eggplant"
                key={i}
              >
                <thead>
                  <tr>
                    <th className="font-verlag-bold text-uppercase">
                      {data.order}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Main dish</th>
                    <td>{data.mainDish.foodName}</td>
                    <td>{data.mainDish.qty}</td>
                    <td>{data.mainDish.price}</td>
                  </tr>
                  <tr>
                    <th>Snack</th>
                    <td>{data.Snack.foodName}</td>
                    <td>{data.Snack.qty}</td>
                    <td>{data.Snack.price}</td>
                  </tr>
                  <tr>
                    <th>Drink</th>
                    <td>{data.Drink.foodName}</td>
                    <td>{data.Drink.qty}</td>
                    <td>{data.Drink.price}</td>
                  </tr>
                </tbody>
              </table>
            ))}
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th colSpan="2">Total</th>
                  <th className="text-end">Rp.XXX.XXX</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4">
            <button
              onClick={handleSubmission}
              className="btn main-button w-100 me-2"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const summaryData = [
  {
    title: `Student's name`,
    value: "Jhon",
  },
  {
    title: "Age",
    value: "12",
  },
  {
    title: "School detail",
    value: "SMAn 28 Jakarta",
  },
  {
    title: "Class",
    value: "Ix",
  },
  {
    title: "Alergy",
    value: "Tidak ada",
  },
  {
    title: "Parent's name",
    value: "Jhon Senior",
  },
  {
    title: "E-mail",
    value: "jhon@mail.co",
  },
  {
    title: "Phone number",
    value: "0812 3456 790",
  },
];

const invoice = [
  {
    order: "Wed, 16 March 2022",
    mainDish: {
      foodName: "Ayam Gepuk",
      qty: "x1",
      price: "25000",
    },
    Snack: {
      foodName: "Puding",
      qty: "x1",
      price: "20000",
    },
    Drink: {
      foodName: "Es Jeruk",
      qty: "x1",
      price: "15000",
    },
  },
  {
    order: "Wed, 17 March 2022",
    mainDish: {
      foodName: "foodName",
      qty: "x1",
      price: "20000",
    },
    Snack: {
      foodName: "foodName",
      qty: "x1",
      price: "20000",
    },
    Drink: {
      foodName: "foodName",
      qty: "x1",
      price: "20000",
    },
  },
  {
    order: "Wed, 18 March 2022",
    mainDish: {
      foodName: "foodName",
      qty: "x1",
      price: "20000",
    },
    Snack: {
      foodName: "foodName",
      qty: "x1",
      price: "20000",
    },
    Drink: {
      foodName: "foodName",
      qty: "x1",
      price: "20000",
    },
  },
];
