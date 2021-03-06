import React from "react";
import SearchBar from "./components/SearchBar"
import youtube from './apis/youtube'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

export default class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        this.onTermSubmit('buildings')
        // when application first loads, we will see buildings
    }
    
   onTermSubmit = async term => {
    const response = await youtube.get('/search', {
        params: {
            q: term
        }
    });
    console.log(response.data.items)
    this.setState({ 
        videos: response.data.items,
        selectedVideo: response.data.items[0]
    })
   }

   onVideoSelect = (video) => {
       console.log('from the app!', video);
       this.setState({selectedVideo: video})
   }
    
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}