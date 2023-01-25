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
                <img src="https://www.foodnetwork.com/content/dam/images/food/fullset/2019/1/11/0/KC1912_Bacon-and-Egg-Fried-Rice_s4x3.jpg" />
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
                <img src="https://www.seriouseats.com/thmb/_UpZJf-wE0Vr5jNOpBPPC_FyzcA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/anda-bhurji-spicy-indian-scrambled-eggs-recipe-step-06-b861178e6c5546559667743aa64a187f.jpg" />
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
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/62/37/d2/magic-foods.jpg" />
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
                <img src="https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image1-min-1024x569.png" />
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
