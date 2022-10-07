import React from "react";
import "./FeaturesArea.css";

class FeaturesArea extends React.Component {
  state = {};
  render() {
    return (
      <section className="features-area">
        <div className="container featuresbox">
          <div className="row align-items-start">
            <div className="col-sm-12 col-lg-3 col-md-6">
              <img src="https://preview.colorlib.com/theme/restaurant/img/xf1.png.pagespeed.ic.SUm0vW2vCs.png" />
              <h4>Refreshing Breakfast</h4>
              <p>Lorem ipsum dolor sit ametcons ecteturadipis icing elit.</p>
            </div>
            <div className="col-sm-12 col-lg-3 col-md-6">
              <img src="https://preview.colorlib.com/theme/restaurant/img/xf2.png.pagespeed.ic.e8iZqf6_yS.png" />
              <h4>Awesome Lunch</h4>
              <p>Lorem ipsum dolor sit ametcons ecteturadipis icing elit.</p>
            </div>
            <div className="col-sm-12 col-lg-3 col-md-6">
              <img src="https://preview.colorlib.com/theme/restaurant/img/xf3.png.pagespeed.ic.6KTxwTA2kI.png" />
              <h4>Soothing Dinner</h4>
              <p>Lorem ipsum dolor sit ametcons ecteturadipis icing elit.</p>
            </div>
            <div className=" col-sm-12 col-lg-3 col-md-6">
              <img src="https://preview.colorlib.com/theme/restaurant/img/xf4.png.pagespeed.ic._fYoargax-.png" />
              <h4>Rich Quality Buffet</h4>
              <p>Lorem ipsum dolor sit ametcons ecteturadipis icing elit.</p>
            </div>
          </div>
          <hr />
        </div>
      </section>
    );
  }
}

export default FeaturesArea;
