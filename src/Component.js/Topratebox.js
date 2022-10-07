import React from "react";
import "./Topratebox.css";

class Topratebox extends React.Component {
  render() {
    return (
      <section className="topratebox container">
        <section className="toprated container">
          <div className="headbox">
            <h1>Our Top Rated Dishes</h1>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
        </section>
        <section>
          <div className="container dishesbox">
            <div className="row align-items-start">
              <div className="col-sm-12 col-lg-4 col-md-6">
                <img src="./01.jpg" />
                <h4>Bread Fruit Cheese Sandwich</h4>
                <p>
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct women face higher conduct.
                </p>
                <br />
                <br />
              </div>
              <div className="col-sm-12 col-lg-4 col-md-6">
                <img src="./02.jpg" />
                <h4>Bread Fruit Cheese Sandwich</h4>
                <p>
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct women face higher conduct.
                </p>
                <br />
                <br />
              </div>
              <div className="col-sm-12 col-lg-4 col-md-6">
                <img src="./03.jpg" />
                <h4>Bread Fruit Cheese Sandwich</h4>
                <p>
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct women face higher conduct.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Topratebox;
