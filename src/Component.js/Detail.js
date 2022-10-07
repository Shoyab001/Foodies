import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className="container-fluid detail">
  <div className=" container contact">
    <div className="row align-items-start div">
      <div className="col-4 a">
        <h2>Contact Us</h2>
        <p>
          <i className="fa-solid fa-location-dot" />
          Location
        </p>
        <p>
          <i className="fa-solid fa-phone" />
          Call +91 8233541112
        </p>
        <p>
          <i className="fa-solid fa-envelope" />
          mkshoyab@gmail.com
        </p>
      </div>
      <div className="col-4 link">
        <h2>Foodies</h2>
        <p>
          {" "}
          Necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with{" "}
        </p>
        <ul>
          <i className="fa-brands fa-facebook" />
          <i className="fa-brands fa-twitter" />
          <i className="fa-brands fa-linkedin-in" />
          <i className="fa-brands fa-instagram" />
          <i className="fa-brands fa-pinterest-p" />
        </ul>
      </div>
      <div className="col-4">
        <h2>Opening Hours</h2>
        <p>Everyday</p>
        <p>10.00 Am -10.00 Pm</p>
      </div>
    </div>
  </div>
</div>

        );
    }
}
 
export default Detail;