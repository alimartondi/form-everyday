import React from "react";

export default function Summary() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <h2>Order Summary</h2>
          <p>
            Please check your order. Your order will be delivered to the
            school&apos;s canteen and should arrive X hour before the school
            lunch time
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <table className="table table-borderless">
            <tbody>
              {summaryData.map((data, i) => (
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
              className="table table-borderless border-bottom py-3"
              key={i}
            >
              <thead>
                <tr>
                  <th>{data.order}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Main dish</td>
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
                <th>Rp.XXX.XXX</th>
              </tr>
            </thead>
          </table>
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
