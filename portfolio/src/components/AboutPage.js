import React, { Component } from 'react';

class AboutPage extends Component {
  render() {
    return (
    <div>
        <div className = "row">
            <div className = "col-md-4">
                <h1>John</h1>
            </div>
        </div>
        <div className = "row">
            <div className = "col-md-4">
                <h1>Doe</h1>
            </div>
            <div className = "col-md-8 text-center">
                <img src = "/profile-img.gif" alt = ""/>
            </div>
        </div>
        <div className = "row">
            <div className = "col-md-4">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam fugiat
          nulla perspiciatis ipsam voluptatem temporibus provident reiciendis.
          Magnam, maiores autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, natus.
                </p>
            </div>
        </div>
    </div>
    )
  }
}

export default AboutPage;
