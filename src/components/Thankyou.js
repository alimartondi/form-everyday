import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

export default function Thankyou() {
  return (
    <>
      <Header />
      <div className="container py-5 px-3">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-md-0">
            <h1 className="font-verlag-black text-eggplant text-uppercase">
              Thank You <br />
              <span className="font-verlag-bold">For your order</span>
            </h1>
          </div>
          <div className="col-lg-8 position-relative">
            <p className="description">
              Your order has been submitted. Please transfer your payment to
              Good Food Jakarta BCA{" "}
              <span>
                and send your proof of payments via WhatsApp. Our staff wil be
                in touch with you shortly after.
              </span>
            </p>
            <div className="position-relative bg-eggplant text-white">
              <div
                className="position-relative bg-eggplant py-5 px-4"
                style={{ zIndex: "30" }}
              >
                <h3 className="font-verlag-bold">BCA a/n. Good Food Jakarta</h3>
                <h3 className="font-verlag-regular">XXX-XXX-XXX</h3>
                <h6 className="font-verlag-regular">
                  Please send your payment slip to:
                </h6>
                <h3 className="font-verlag-bold">Wa. 0812-3456-7890</h3>
              </div>
              <div className="position-absolute top-100 start-0 translate-middle">
                <img
                  src="images/goodfood-arterisk.svg"
                  alt="good-food-arterisk"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
