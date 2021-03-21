import React, { Component } from "react";

class Card extends Component {
  clickHandler = () => {
    this.props.clickHandler(this.props.data);
  };

  render() {
    return (
      <div className="card">
        <img
          onClick={this.clickHandler}
          className="thumbImg"
          src={this.props.data.urls.small}
          alt="dummyImg"
        />
      </div>
    );
  }
}
export default Card;
