import { unsplash } from "./config";

export const getData = () => {
  unsplash.photos
    .getRandom({ count: 15, query: this.state.searchTxt })
    .then((result) => {
      if (result.errors) {
        console.log("error occurred: ", result.errors[0]);
      } else {
        const data = result.response;
        this.setState({
          wallpaperData: this.state.wallpaperData.concat(data),
        });
      }
    });
};
