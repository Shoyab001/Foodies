import React from "react";
import "./Blogbox.css";

class Blogbox extends React.Component {
  state = {};
  render() {
    return (
      <section className="blogbox">
        <section className="toprated container">
          <div className="headbox">
            <h1>Latest From Our Blog</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section className="blogs">
          <div className="container blogsbox">
            <div className="row align-items-start">
              <div className="col-sm-12 col-md-6 col-lg-3">
                <img src="https://preview.colorlib.com/theme/restaurant/img/xb1.jpg.pagespeed.ic.0P_xQXrf9x.webp" />
                <br />
                <p className="date">10 JAN. 2022</p>
                <a href="#">
                  <h4>Cooking Perfect Fried Rice in minutes</h4>
                </a>
                <p className="asd">
                  inappropriate behavior ipsum dolor sit amet, consectetur.
                </p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 ">
                <img src="https://preview.colorlib.com/theme/restaurant/img/xb2.jpg.pagespeed.ic.PHj8rPHl3r.webp" />
                <br />
                <p className="date">10 JAN. 2022</p>
                <a href="#">
                  <h4>Secret of making Heart Shaped eggs</h4>
                </a>
                <p className="asd">
                  inappropriate behavior ipsum dolor sit amet, consectetur.
                </p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <img src="https://preview.colorlib.com/theme/restaurant/img/xb3.jpg.pagespeed.ic.VKjUqmqCmg.webp" />
                <br />
                <p className="date">10 JAN. 2022</p>
                <a href="#">
                  <h4>How to check steak if it is tender or not</h4>
                </a>
                <p className="asd">
                  inappropriate behavior ipsum dolor sit amet, consectetur.
                </p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <img src="https://preview.colorlib.com/theme/restaurant/img/xb4.jpg.pagespeed.ic.JIK-qO-Pb5.webp" />
                <br />
                <p className="date">10 JAN. 2022</p>
                <a href="#">
                  <h4>Addiction When Gambling Becomes A Problem</h4>
                </a>
                <p className="asd">
                  inappropriate behavior ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Blogbox;
