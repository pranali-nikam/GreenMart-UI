import React from "react";

const Footer = () => {
  let currentDate = new Date();
  let year = currentDate.getFullYear();

  return (
    <footer
      className="text-center text-white"
      style={{ backgroundColor: "#0a4275" }}
    >
      <div className="container p-4 pb-0">
        <section className="">
          <p className="d-flex justify-content-center align-items-center">
            <span className="me-3">
              <a className="footerText" href="test.com">
                About Us
              </a>
            </span>
            <span className="me-3">
              <a className="footerText" href="test.com">
                Greenify Policys
              </a>
            </span>
            <span className="me-3">
              <a className="footerText" href="test.com">
                Payment Partners
              </a>
            </span>
            <span className="me-3">
              <a className="footerText" href="/customer/feedback">
                Give a feedback
              </a>
            </span>
          </p>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {year}{" "}
        <a className="text-white" href="test.com">
        2024 GREENIFY
        </a>
      </div>
    </footer>
  );
};

export default Footer;
