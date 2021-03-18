import React from "react";
import SearchBar from "./components/SearchBar"
import youtube from './apis/youtube'

export default class App extends React.Component {
    state = { videos: [] }
   onTermSubmit = async term => {
    const response = await youtube.get('/search', {
        params: {
            q: term
        }
    });
    console.log(response.data.items)
    this.setState({ videos: response.data.items })
   }
    
    render() {
        return (
            <div className="ui container">
                <h1><SearchBar onFormSubmit={this.onTermSubmit}/></h1>
                I have {this.state.videos.length} videos.
            </div>
        )
    }
}