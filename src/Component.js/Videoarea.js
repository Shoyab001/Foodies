import React from "react";
import "./Videoarea.css";

class Videoarea extends React.Component {
  render() {
    return (
      <section className="videoarea">
        <div className="container">
          <div className="row justify-content-center align-items-center flex-column">
            <a className="play-btn" href="https://youtu.be/GGHfBBEuTiw">
              <img
                src="./play-button.png"
                alt=""
                data-pagespeed-url-hash={2819878289}
                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
              />
            </a>
            <h3 className="pt-20 pb-20 text-white">
              We Always serve the vaping hot and delicious foods
            </h3>
            <p className="text-white youtube">
              Youtube video will appear in popover
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Videoarea;
