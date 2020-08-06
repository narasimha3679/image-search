import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {

    // initialising state images
    state = {images: []}

    // this method is called when user enter search term and enter submit in searchbar component
    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term},
        })
        //components state images is updates with api response
        this.setState({images: response.data.results})
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App
