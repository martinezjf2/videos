import React from "react";
import SearchBar from "./components/SearchBar"
import youtube from './apis/youtube'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

export default class App extends React.Component {
    state = { videos: [], selectedVideo: null }
   onTermSubmit = async term => {
    const response = await youtube.get('/search', {
        params: {
            q: term
        }
    });
    console.log(response.data.items)
    this.setState({ videos: response.data.items })
   }

   onVideoSelect = (video) => {
       console.log('from the app!', video);
       this.setState({selectedVideo: video})
   }
    
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
        )
    }
}