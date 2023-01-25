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
              <img style={{width:'35px' }} src="http://cdn.onlinewebfonts.com/svg/img_498787.png" />
              <h4>Refreshing Breakfast</h4>
              <p>Lorem ipsum dolor sit ametcons ecteturadipis icing elit.</p>
            </div>
            <div className="col-sm-12 col-lg-3 col-md-6">
            <img style={{width:'40px' }} src="https://cdn-icons-png.flaticon.com/512/2082/2082035.png" />
              <h4>Awesome Lunch</h4>
              <p>Lorem ipsum dolor sit ametcons ecteturadipis icing elit.</p>
            </div>
            <div className="col-sm-12 col-lg-3 col-md-6">
            <img style={{width:'40px' }} src="https://static.thenounproject.com/png/33767-200.png" />
              <h4>Soothing Dinner</h4>
              <p>Lorem ipsum dolor sit ametcons ecteturadipis icing elit.</p>
            </div>
            <div className=" col-sm-12 col-lg-3 col-md-6">
            <img style={{width:'40px' }} src="https://cdn-icons-png.flaticon.com/512/1051/1051012.png" />
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
