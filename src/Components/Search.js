import React, { Component } from "react";
// import { unsplash } from "../utils/api";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTxt: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      searchTxt: e.target.value,
    });
  };

  handleSubmit = (e) => {
    this.props.searchHandler(this.state.searchTxt);
    e.preventDefault();
  };
  render() {
    return (
      <>
        <h1 className="title">Image Hunt</h1>
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <input
            className="searchInput"
            type="text"
            placeholder="Enter search keyword"
            value={this.state.searchTxt}
            onChange={this.handleChange}
          />
          <input className="btn" type="submit" value="Search" />
        </form>
      </>
    );
  }
}

export default Search;
