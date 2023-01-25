import React from "react";
import "./Chefbox.css";

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
                <img
                  style={{ width: "200px", borderRadius: "10px" }}
                  src="https://i.pinimg.com/originals/1b/1d/c3/1b1dc304d72f89b38ab18c0f3be893fb.jpg"
                />
                <h4>Ethel Davis</h4>
                <p>Managing Director (Sales)</p>
                <br />
                <br />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <img
                  style={{ width: "200px", borderRadius: "10px", border: '3px solid gray' }}
                  src="https://thumbs.dreamstime.com/b/smiling-chef-man-uniform-23326629.jpg"
                />
                <h4>Rodney Cooper</h4>
                <p>Creative Art Director (Project)</p>
                <br />
                <br />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <img
                  style={{ width: "200px", borderRadius: "10px" }}
                  src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZiUyMHdvbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                />
                <h4>Dora Walker</h4>
                <p>Senior Core Developer</p>
                <br />
                <br />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <img
                  style={{ width: "200px", borderRadius: "10px" }}
                  src="https://i.pngimg.me/thumb/f/720/xframe_141028.jpg"
                />
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
