import React from 'react';
import "./Banner.css";

class Banner extends React.Component {
    render() { 
        return (
            <section className=" banner-area container-fluid mainbox">
            <div className="container">
              <div className="row align-items-start head">
                <div className="col-8 ">
                  <h5>WIDE OPTIONS OF CHOICE</h5>
                  <h1>Delicious Receipes</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim.
                  </p>
                  <button type="button" className="btn btn-outline-primary">
                    CHECK YOUR MENU
                  </button>
                </div>
              </div>
            </div>
          </section>
          
        );
    }
}
 
export default Banner;