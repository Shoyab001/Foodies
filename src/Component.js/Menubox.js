import React from "react";
import "./Menubox.css";

class Menubox extends React.Component {
  render() {
    return (
      <section className="menubox">
        <section className="toprated container">
          <div className="headbox">
            <h1>Our Featured Food Menus</h1>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
        </section>
        <section>
          <div className="container foodmenu">
            <div className="row align-items-start">
              <div className="col-sm-12 col-lg-6 col-md-6 a">
                <h4>Fresh &amp; Crispy All the time</h4>
                <p>
                  Who are in extremely love with eco friendly system. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p></p>
              </div>
              <div className="col-sm-12 col-lg-6 col-md-6 b">
                <img src="./02.jpg" />
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Menubox;
