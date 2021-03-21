import React, { Component } from "react";
import "./App.css";
import Search from "./Components/Search";
import WallpaperGrid from "./Components/WallpaperGrid";
import Modal from "./Components/Modal";
import { unsplash } from "./utils/config";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      searchTxt: "",
      wallpaperData: [],
      modalData: {},
    };
  }

  updateModal = (newData) => {
    this.setState({
      showModal: !this.state.showModal,
      modalData: newData,
    });
  };

  searchHandler = (txt) => {
    this.setState(
      {
        searchTxt: txt,
        wallpaperData: [],
      },
      () => {
        this.getData();
      }
    );
  };

  getData = () => {
    unsplash.photos
      .getRandom({ count: 15, query: this.state.searchTxt })
      .then((result) => {
        if (result.errors) {
          alert("error occurred: ", result.errors[0]);
        } else {
          const data = result.response;
          this.setState({
            wallpaperData: this.state.wallpaperData.concat(data),
          });
        }
      });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <>
        <div className="App">
          <Search searchHandler={this.searchHandler} />
          {this.state.showModal ? (
            <Modal
              mydata={this.state.modalData}
              clickHandler={this.updateModal}
            />
          ) : (
            ""
          )}
          <WallpaperGrid
            data={this.state.wallpaperData}
            clickHandler={this.updateModal}
          />
        </div>
        <button className="btn" onClick={this.getData}>
          Load More
        </button>
      </>
    );
  }
}

export default App;
