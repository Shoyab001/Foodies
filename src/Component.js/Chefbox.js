import React from "react";
import './Chefbox.css';

class Chefbox extends React.Component {
  render() {
    return (
      <section className="container-fluid background Chefbox">
        <section className="toprated container">
          <div className="headbox">
            <h1>Meet Our Qualified Chefs</h1>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
        </section>
        <section className="Chefs">
          <div className="container chefsbox">
            <div className="row align-items-start">
              <div className="col-sm-12 col-md-6 col-lg-3">
                <img src="https://preview.colorlib.com/theme/restaurant/img/xt1.jpg.pagespeed.ic.qX1rtRc1Gw.webp" />
                <h4>Ethel Davis</h4>
                <p>Managing Director (Sales)</p>
                <br />
                <br />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <img src="https://preview.colorlib.com/theme/restaurant/img/xt2.jpg.pagespeed.ic.rNbYD-7Vni.webp" />
                <h4>Rodney Cooper</h4>
                <p>Creative Art Director (Project)</p>
                <br />
                <br />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <img src="https://preview.colorlib.com/theme/restaurant/img/xt3.jpg.pagespeed.ic.hgrhnPVH61.webp" />
                <h4>Dora Walker</h4>
                <p>Senior Core Developer</p>
                <br />
                <br />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <img src="https://preview.colorlib.com/theme/restaurant/img/xt4.jpg.pagespeed.ic.pO1rXfLDtc.webp" />
                <h4>Lena Keller</h4>
                <p>Creative Content Developer</p>
                <br />
                <br />
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Chefbox;
