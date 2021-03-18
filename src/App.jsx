import React from "react";
import SearchBar from "./components/SearchBar"
import youtube from './apis/youtube'

export default class App extends React.Component {

   onTermSubmit = (term) => {
    youtube.get('/search', {
        params: {
            q: term
        }
    })
   }
    
    render() {
        return (
            <div className="ui container">
                <h1><SearchBar onFormSubmit={this.onTermSubmit}/></h1>
            </div>
        )
    }
}